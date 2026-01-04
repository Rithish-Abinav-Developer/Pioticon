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
      <head>
       <link
          rel="stylesheet"
          href="https://projects.candyboxdesign.com/wp-content/uploads/elementor/css/post-1.css"
        />
        <link
          rel="stylesheet"
          href="https://projects.candyboxdesign.com/wp-content/uploads/elementor/css/post-7.css"
        />
          <link
          rel="stylesheet"
          href="https://projects.candyboxdesign.com/wp-content/uploads/elementor/css/post-15.css"
        />
          <link
          rel="stylesheet"
          href="https://projects.candyboxdesign.com/wp-content/uploads/elementor/css/post-18.css"
        />
          <link
          rel="stylesheet"
          href="https://projects.candyboxdesign.com/wp-content/plugins/elementor/assets/css/frontend.min.css"
        />
      </head>
      <body className={manrope.className}>
        <AOSProvider>
          <Header />
          {children}
        </AOSProvider>

      </body>
    </html>
  );
}
