import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { customerSchema } from "@/validations/customer-schema";

const prisma = new PrismaClient();

// GET ALL CUSTOMERS
export async function GET() {
  try {
    const customers = await prisma.customer.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json({
      success: true,
      customers,
    });
  } catch (error) {
    console.error("GET /api/customers:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch customers",
      },
      { status: 500 }
    );
  }
}

// CREATE CUSTOMER
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const data = customerSchema.parse(body);

    const customer = await prisma.customer.create({
      data: {
        name: data.name,
        mobile: data.mobile,
        email: data.email,
        city: data.city,
        address: data.address,
        gstNumber: data.gstNumber ?? "",
        openingBalance: data.openingBalance,
        creditLimit: data.creditLimit,
      },
    });

    return NextResponse.json({
      success: true,
      customer,
    });
  } catch (error: any) {
    console.error("POST /api/customers:", error);

    return NextResponse.json(
      {
        success: false,
        message: error?.message ?? "Failed to create customer",
      },
      { status: 400 }
    );
  }
}

// UPDATE CUSTOMER
export async function PUT(req: NextRequest) {
  try {
    const body = await req.json();

    const { id, ...rest } = body;

    const data = customerSchema.parse(rest);

    const customer = await prisma.customer.update({
      where: {
        id,
      },
      data,
    });

    return NextResponse.json({
      success: true,
      customer,
    });
  } catch (error: any) {
    console.error("PUT /api/customers:", error);

    return NextResponse.json(
      {
        success: false,
        message: error?.message ?? "Failed to update customer",
      },
      { status: 400 }
    );
  }
}

// DELETE CUSTOMER
export async function DELETE(req: NextRequest) {
  try {
    const { id } = await req.json();

    await prisma.customer.delete({
      where: {
        id,
      },
    });

    return NextResponse.json({
      success: true,
    });
  } catch (error: any) {
    console.error("DELETE /api/customers:", error);

    return NextResponse.json(
      {
        success: false,
        message: error?.message ?? "Failed to delete customer",
      },
      { status: 400 }
    );
  }
}