import type { Metadata } from "next";
import { Montserrat, Roboto } from "next/font/google";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Register | Shaurya 2026 — IIT Kharagpur",
  description: "Register for SHAURYA 2026 at IIT Kharagpur.",
};

export default function RegisterLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${montserrat.variable} ${roboto.variable}`}>
      {children}
    </div>
  );
}
