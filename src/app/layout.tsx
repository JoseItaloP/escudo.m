import type { Metadata } from "next";
import "./globals.css";



export const metadata: Metadata = {
  title: "ESCUDO",
  description: "Descrição não editada",
};

export default function RootLayout({
  children,
  header,
}: Readonly<{
  children: React.ReactNode;
  header: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {header}
        {children}
      </body>
    </html>
  );
}
