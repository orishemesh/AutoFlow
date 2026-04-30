import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { paymentCache } from '@/lib/cache';

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    // const paymentId = searchParams.get('paymentId');
    // if (!paymentId) {
    //   return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
    // }
    // const isValid = paymentCache.isPaymentPaid(paymentId)
    // if (!isValid) {
    //   return NextResponse.json({ error: 'Auth error' }, { status: 401 });
    // }
    // Determine the absolute path to the zip file in the backend
    const filePath = path.join(process.cwd(), 'src', 'private', 'autoflow.zip');
    
    if (!fs.existsSync(filePath)) {
      return NextResponse.json({ error: 'File not found' }, { status: 404 });
    }

    const fileBuffer = fs.readFileSync(filePath);

    return new NextResponse(fileBuffer, {
      status: 200,
      headers: {
        'Content-Type': 'application/zip',
        // Make sure it downloads with the right name
        'Content-Disposition': 'attachment; filename="AutoFlow - Full Pack.zip"',
        // Content Length is polite to give
        'Content-Length': fileBuffer.byteLength.toString(),
      },
    });
  } catch (err) {
    console.error("Download endpoint error:", err);
    return NextResponse.json({ error: 'Download failed' }, { status: 500 });
  }
}
