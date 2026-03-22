import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Freight Estimator — Duraxia Industries",
  description: "Estimate freight costs from Dabaspet to any pincode in India",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
