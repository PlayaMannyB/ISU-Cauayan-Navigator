import QRCode from 'qrcode';

const appUrl = 'https://isu-cauayan-navigator.vercel.app/';

await QRCode.toFile('public/ISU Cauayan Navigator.png', appUrl, {
  errorCorrectionLevel: 'H',
  margin: 4,
  width: 1024,
  color: {
    dark: '#046A38',
    light: '#FFFFFF'
  }
});