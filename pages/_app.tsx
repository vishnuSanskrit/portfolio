import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react";
import Layout from "components/Layout";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"], weight: ["300", "400", "500"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Vishnu Sanskrit" />
        <meta name="description" content="Vishnu's homepage" />
        <meta name="twitter:title" content="Vishnu Sanskrit" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@titas_p" />
        <meta name="twitter:creator" content="@titas_p" />
        <meta property="og:site_name" content="Vishnu Sanskrit" />
        <meta name="og:title" content="Vishnu Sanskrit" />
        <meta property="og:type" content="website" />
        <link rel="favicon icon" href="/my-logo.svg" />
        <title>Vishnu Sanskrit - Homepage</title>
      </Head>
      <main className={inter.className}>
        <Layout>
          <Component {...pageProps} />
          <Analytics />
        </Layout>
      </main>
    </>
  );
}
