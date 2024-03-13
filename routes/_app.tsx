import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";

import { type PageProps } from "$fresh/server.ts";
export default function App({ Component }: PageProps) {
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>try-deno</title>
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body>
        <Header />
        <Component />
        <Footer />
      </body>
    </html>
  );
}
