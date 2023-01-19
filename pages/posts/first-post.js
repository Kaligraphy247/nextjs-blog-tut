import Link from "next/link";
import Head from "next/head";
// import Script from "next/script"; //* unused import
import Layout from "/components/layout";

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </Layout>
  );
}

//* load script before page becomes interactive
// <Script
// 	id="scriptAfterInteractive"
// 	src="https://connect.facebook.net/en_US/sdk.js"
// 	strategy="beforeInteractive"
// 	onLoad={() => console.log(`Script loaded correctly, window.Fb has been populated`)}
// />
