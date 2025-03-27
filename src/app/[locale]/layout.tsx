import localFont from "next/font/local";
import {routing} from '@/i18n/routing';
import {notFound} from 'next/navigation';
import '../../style/globals.css';
import { Locale } from "@/global/type";

const geistSans = localFont({
  src: "../../assets/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../../assets/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Tu Nguyen",
  description: "Tu Nguyen CV",
};

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params
  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased` }
      >
        {children}
      </body>
    </html>
  );
}
