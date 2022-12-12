import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <title>AI with Purpose</title>
        <meta charSet="utf-8" />
        <meta property="og:title" content="AI Template" key="title" />
        <meta
          property="og:description"
          content="Powered with Purpose"
          key="description"
        />

        <meta name="twitter:card" content="summary_large_image"></meta>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
