import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { unlink } from 'fs/promises';
import path from 'path';

export const dynamic = 'force-dynamic';

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const doc = await prisma.uploadedDocument.findUnique({
      where: { id: params.id }
    });
    if (!doc) {
      return NextResponse.json({ error: "Dokumentet hittades inte." }, { status: 404 });
    }
    return NextResponse.json(doc);
  } catch (err: any) {
    console.error("Failed to fetch archive item:", err);
    return NextResponse.json({ error: "Kunde inte hämta dokumentet." }, { status: 500 });
  }
}

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const body = await req.json();
    const { customName, isNew, customerNumber, salesOrderNumber, customerName } = body;

    const updateData: any = {};
    if (customName !== undefined) updateData.customName = customName;
    if (isNew !== undefined) updateData.isNew = isNew;
    if (customerNumber !== undefined) updateData.customerNumber = customerNumber;
    if (salesOrderNumber !== undefined) updateData.salesOrderNumber = salesOrderNumber;
    if (customerName !== undefined) updateData.customerName = customerName;

    if (Object.keys(updateData).length === 0) {
      return NextResponse.json({ error: "Inga uppdateringsdata angavs." }, { status: 400 });
    }

    const updated = await prisma.uploadedDocument.update({
      where: { id: params.id },
      data: updateData
    });

    return NextResponse.json(updated);
  } catch (err: any) {
    console.error("Failed to update archive item:", err);
    return NextResponse.json({ error: "Kunde inte uppdatera ritningen." }, { status: 500 });
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const doc = await prisma.uploadedDocument.findUnique({
      where: { id: params.id }
    });

    if (!doc) {
      return NextResponse.json({ error: "Dokumentet hittades inte." }, { status: 404 });
    }

    // Delete file from disk
    const absolutePath = path.join(process.cwd(), 'public', doc.filePath);
    try {
      await unlink(absolutePath);
    } catch (diskErr) {
      console.warn("Could not delete file from disk:", diskErr);
      // Continue deleting from DB even if file is already gone
    }

    // Delete record from DB
    await prisma.uploadedDocument.delete({
      where: { id: params.id }
    });

    return NextResponse.json({ success: true });
  } catch (err: any) {
    console.error("Failed to delete archive item:", err);
    return NextResponse.json({ error: "Kunde inte radera dokumentet." }, { status: 500 });
  }
}
