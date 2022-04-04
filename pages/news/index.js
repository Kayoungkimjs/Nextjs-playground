import Link from 'next/link'
// domain/news

const NewsPage = () => {
  return (
    <>
      <h1>News Page</h1>
      <ul>
        <li>
          <Link href={"/news/contents1"}>News contents 1</Link>
        </li>
        <li>
          <Link href={"/news/contents2"}>News contents 2</Link>
        </li>
      </ul>
    </>
  );
};

export default NewsPage;
