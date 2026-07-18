import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// GET Customers
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
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch customers",
      },
      { status: 500 }
    );
  }
}

// POST Customer
export async function POST(req: Request) {
  try {
    const body = await req.json();

    const customer = await prisma.customer.create({
  data: {
    name: body.name,
    mobile: body.mobile,
    email: body.email,
    city: body.city,
    address: body.address,
    gstNumber: body.gstNumber,
    openingBalance: Number(body.openingBalance),
    creditLimit: Number(body.creditLimit),
  },
});

    return NextResponse.json({
      success: true,
      customer,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to create customer",
      },
      { status: 500 }
    );
  }
}

// DELETE Customer
export async function DELETE(req: Request) {
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
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to delete customer",
      },
      { status: 500 }
    );
  }
}