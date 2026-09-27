import fs from 'node:fs';
import jsQR from 'jsqr';
import { PNG } from 'pngjs';

const expectedUrl = 'https://isu-cauayan-navigator.vercel.app/';
const png = PNG.sync.read(fs.readFileSync('public/ISU Cauayan Navigator.png'));
const result = jsQR(new Uint8ClampedArray(png.data), png.width, png.height);

if (!result || result.data !== expectedUrl) {
  throw new Error(`QR payload mismatch: ${result?.data ?? 'nothing decoded'}`);
}

console.log(`QR verified: ${result.data}`);