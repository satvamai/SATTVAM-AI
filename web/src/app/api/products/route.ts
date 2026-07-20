import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { productSchema } from "@/validations/product-schema";

const prisma = new PrismaClient();

// GET ALL PRODUCTS
export async function GET() {
  try {
    const products = await prisma.product.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json({
      success: true,
      products,
    });
  } catch (error) {
    console.error("GET /api/products:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch products",
      },
      { status: 500 }
    );
  }
}

// CREATE PRODUCT
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const data = productSchema.parse(body);

    // Duplicate SKU Check
    if (data.sku && data.sku !== "") {
      const existing = await prisma.product.findUnique({
        where: {
          sku: data.sku,
        },
      });

      if (existing) {
        return NextResponse.json(
          {
            success: false,
            message: "SKU already exists.",
          },
          { status: 400 }
        );
      }
    }

    const product = await prisma.product.create({
      data: {
        name: data.name,
        sku: data.sku || null,
        barcode: data.barcode || null,
        hsnCode: data.hsnCode || null,
        category: data.category,
        brand: data.brand,
        unit: data.unit,

        purchasePrice: data.purchasePrice,
        sellingPrice: data.sellingPrice,
        gst: data.gst,

        openingStock: data.openingStock,
        minimumStock: data.minimumStock,

        description: data.description || null,

        status: true,
      },
    });

    return NextResponse.json({
      success: true,
      product,
    });
  } catch (error: any) {
    console.error("POST /api/products:", error);

    return NextResponse.json(
      {
        success: false,
        message: error?.message ?? "Failed to create product",
      },
      { status: 400 }
    );
  }
}

// UPDATE PRODUCT
export async function PUT(req: NextRequest) {
  try {
    const body = await req.json();

    const { id, ...rest } = body;

    const data = productSchema.parse(rest);

    if (data.sku && data.sku !== "") {
      const existing = await prisma.product.findFirst({
        where: {
          sku: data.sku,
          NOT: {
            id,
          },
        },
      });

      if (existing) {
        return NextResponse.json(
          {
            success: false,
            message: "SKU already exists.",
          },
          { status: 400 }
        );
      }
    }

    const product = await prisma.product.update({
      where: {
        id,
      },
      data: {
        ...data,
        sku: data.sku || null,
        barcode: data.barcode || null,
        hsnCode: data.hsnCode || null,
        description: data.description || null,
      },
    });

    return NextResponse.json({
      success: true,
      product,
    });
  } catch (error: any) {
    console.error("PUT /api/products:", error);

    return NextResponse.json(
      {
        success: false,
        message: error?.message ?? "Failed to update product",
      },
      { status: 400 }
    );
  }
}

// DELETE PRODUCT
export async function DELETE(req: NextRequest) {
  try {
    const { id } = await req.json();

    await prisma.product.delete({
      where: {
        id,
      },
    });

    return NextResponse.json({
      success: true,
    });
  } catch (error: any) {
    console.error("DELETE /api/products:", error);

    return NextResponse.json(
      {
        success: false,
        message: error?.message ?? "Failed to delete product",
      },
      { status: 400 }
    );
  }
}