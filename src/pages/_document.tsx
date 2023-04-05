import { Html, Head, Main, NextScript } from "next/document";
import Header from "@/components/header";

export default function Document(): JSX.Element {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Header />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
