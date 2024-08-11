import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Poppins } from "@next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "800"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* This will only show on screens smaller than lg */}
      <div className="lg:hidden flex items-center justify-center min-h-screen text-center p-4">
        <p className="text-xl font-semibold">This content is only available on desktop. Please view on a larger screen.</p>
      </div>

      {/* This will only show on screens lg and larger */}
      <main className={`hidden lg:block ${poppins.className}`}>
        <Component {...pageProps} />
      </main>
    </>
  );
}
