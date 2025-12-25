import { Manrope } from "next/font/google";
import "./globals.css";
import Header from "./Components/Header";
import AOSProvider from "./Components/AOSProvider";
import AnimatedHeading from "./Components/AnimatedHeading";

const manrope = Manrope({
  subsets: ["latin"],
  weights: ["400", "500", "700"],
  display: "swap",
});

export const metadata = {
  title: "Pioticon",
  description: "Turning complexity into clarity to focus on  progress.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={manrope.className}>
        <AOSProvider>
          <Header />
        
          {children}
        </AOSProvider>
            <AnimatedHeading/>

      </body>
    </html>
  );
}
