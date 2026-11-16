import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./navbar/navbar";

export default function RootLayout({ children }) {
  return (
    <html>
      <Navbar />
      <body>{children}</body>
    </html>
  );
}
