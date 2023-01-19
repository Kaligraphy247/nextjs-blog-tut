import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, world. I am James and this my corner of the internet.</p>
        <p>
          (This is also a sample website i built like this one on {""}
          <a href="https://nextjs.org/learn">Next.js Official Tutorial</a>)
        </p>
      </section>
    </Layout>
  );
}
