import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Providers from '@/components/Providers';

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Tailor My Style - Bangladesh Custom Apparel Platform",
  description: "Design your perfect shirt, suit, blazer, trousers, or kurta with our intuitive customization platform. Connect with skilled local tailors for premium custom clothing in Bangladesh.",
  keywords: ["custom clothing", "tailor", "bangladesh", "bespoke", "shirt", "suit", "kurta", "blazer"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} font-sans antialiased`}
      >
        <Providers>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
