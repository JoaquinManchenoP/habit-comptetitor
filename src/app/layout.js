import { Inter } from "next/font/google";
import { GlobalStateProvider } from "./context/GlobalContext";
import "./globals.css";
import Header from "./components/header/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-gray-100 ">
      <GlobalStateProvider>
        <body className={inter.className}>
          <Header />
          <div className="h-screen w-full flex flex-col justify-center items-center mt-[40px]">
            <div className="content h-full xs:-w-full sm:w-11/12">
              {children}
            </div>
          </div>
        </body>
      </GlobalStateProvider>
    </html>
  );
}
