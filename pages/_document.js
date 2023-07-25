import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";
export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.materialdesignicons.com/6.5.95/css/materialdesignicons.min.css"
        />
        <link
          rel="stylesheets"
          href="https://cdn.jsdelivr.net/npm/react-whatsapp-chat-widget@1.1.6/index.min.css"
        />
        <link
          rel="stylesheets"
          href="https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/5.3.45/css/materialdesignicons.min.css"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
        <Script src="https://cdn.jsdelivr.net/npm/react-whatsapp-chat-widget@1.1.6/index.min.js"></Script>
      </body>
    </Html>
  );
}
