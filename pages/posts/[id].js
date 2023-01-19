import Head from "next/head";
import Layout from "/components/layout";
import Date from "/components/date";
import utilStyles from "/styles/utils.module.css";
import { getAllPostIds, getPostData } from "/lib/posts";

//
export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

//
export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

//
export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }}></div>
      </article>
    </Layout>
  );
}

//* getStaticPaths can also fetch data from any data source
//* Inside of getStaticPaths, you could have:
// export async function getAllPostIds() {
//   // instead of file system,
//   // fetch data from an external API endpoint
//   const res = await fetch("...");
//   const dataForUse = await res.json();
//   return postMessage.map((data) => {
//     return {
//       params: {
//         id: data.id,
//       },
//     };
//   });
// }
