import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../components/layout";
import Date from "../components/date";
import { getSortedPostsData } from "../lib/posts";
import utilsStyles from "../styles/utils.module.css";

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className="text-xl leading-normal">
        <p className="mb-4">
          前端开发者，你可以在
          <a href="https://twitter.com/suzukazeyoru"> Twitter </a>找到我
        </p>
        <p className="mb-5">状态：在家咸鱼中</p>
      </section>
      <section className="text-xl leading-normal pt-1">
        <h1 className={utilsStyles.headingLg}>Blog</h1>
        <ul>
          {allPostsData.map(({ id, date, title }) => (
            <li className="mb-5" key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className="text-gray-600">
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
