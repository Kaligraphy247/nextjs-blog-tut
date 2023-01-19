import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "posts");

export function getAllPostIds() {
  const fileName = fs.readdirSync(postsDirectory);
  return fileName.map((fileName) => {
    return {
      params: {
        // id will be replaced with whatever they dynamic url file is called
        id: fileName.replace(/\.md$/, ""),
      },
    };
  });
}

export function getSortedPostsData() {
  // get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, "");

    // read md files as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    return {
      id,
      ...matterResult.data,
    };
  });

  // sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.data < b.data) {
      return 1;
    } else {
      return -1;
    }
  });
}

//
export async function getPostData(id) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // use remark to convert markdown into html string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // combine the data with the id
  return {
    id,
    contentHtml,
    ...matterResult.data,
  };
}

//* if fetching data from internet:
// export async function getSortedPostsData(){
//   const res = await fetch('...');
//   return res.json();
// }

//* querying database
// import someDbSDK from 'thatDbSDK';
// const dbClient = someDbSDK.createClient(...)
// export  async function getSortedPostsData() {
//   return dbClient.query('DB QUERY')
// }
