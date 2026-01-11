import type { Metadata } from 'next';
import { Cairo } from 'next/font/google';
import Providers from './providers';

const cairo = Cairo({
  subsets: ['arabic', 'latin'],
  weight: ['400', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Bashamelo Menu',
  description: 'Bashamelo QR Menu',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar">
      <body className={cairo.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
