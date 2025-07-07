import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "History Clock | Discover Historical Events",
  description: "An interactive clock that shows historical events that happened at different hours throughout history.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative">
        {children}
      </body>
    </html>
  );
}
