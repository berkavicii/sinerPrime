import { Cormorant_Garamond, Jost } from "next/font/google";

export const display = Cormorant_Garamond({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

export const sans = Jost({
  subsets: ["latin", "latin-ext"],
  variable: "--font-sans",
  display: "swap",
});
