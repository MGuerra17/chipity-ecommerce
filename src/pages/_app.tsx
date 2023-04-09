import "@/styles/globals.css";
import { Nunito } from "next/font/google";
import type { AppProps } from "next/app";
import Header from "@/components/header";
import { ArticlesContextProvider } from "@/contexts/articlesContext";

const nunito = Nunito({
  subsets: ["latin"],
  variable: '--font-nunito'
});

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ArticlesContextProvider>
      <div className={nunito.className}>
        <Header />
        <Component {...pageProps} />
      </div>
    </ArticlesContextProvider>
  );
}
