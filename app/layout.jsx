import { Marck_Script, Manrope } from "next/font/google";
import "./globals.css";

const hand = Marck_Script({
  subsets: ["cyrillic", "latin"],
  weight: "400",
  variable: "--font-hand",
});
const sans = Manrope({
  subsets: ["cyrillic", "latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Дарья Иванова — UX/UI designer",
  description: "Портфолио UX/UI дизайнера Дарьи Ивановой: обо мне, опыт, кейсы и контакты.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru" className={`${hand.variable} ${sans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
