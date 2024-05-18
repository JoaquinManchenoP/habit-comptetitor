import { Inter } from "next/font/google";
import { GlobalStateProvider } from "./context/GlobalContext";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <GlobalStateProvider>
        <body className={inter.className}>
          <div className="h-screen w-full bg-purple-400 flex flex-col justify-center items-center">
            <div className="header h-20 w-full bg-green-400">page header</div>
            <div className="content h-full w-10/12 bg-red-500">{children}</div>
          </div>
        </body>
      </GlobalStateProvider>
    </html>
  );
}
