import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import Providers from "./providers";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bashamelo.com"),
  title: "بشاميلو الأحساء | منيو برجر وبيتزا ومشروبات",
  description:
    "منيو مطعم بشاميلو في الأحساء: برجر، بيتزا، بشاميل، بطاطس، مقرمشات ومشروبات مع روابط الطلب والتواصل والموقع.",
  keywords: [
    "بشاميلو",
    "بشاميلو الأحساء",
    "منيو بشاميلو",
    "مطعم بشاميلو",
    "مطعم بشاميلو الأحساء",
    "bashamelo",
    "bashamelo menu",
    "bashamelo al ahsa",
    "برجر الأحساء",
    "بيتزا الأحساء",
    "مشروبات الأحساء",
  ],
  openGraph: {
    title: "بشاميلو الأحساء | منيو برجر وبيتزا ومشروبات",
    description:
      "اكتشف منيو بشاميلو في الأحساء وتواصل معنا بسهولة للطلب أو معرفة الموقع.",
    url: "https://bashamelo.com/",
    siteName: "بشاميلو الأحساء",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "منيو بشاميلو الأحساء",
      },
    ],
    locale: "ar_SA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "بشاميلو الأحساء | منيو برجر وبيتزا ومشروبات",
    description: "منيو بشاميلو في الأحساء للبرجر والبيتزا والمشروبات.",
    images: ["/opengraph-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={cairo.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
