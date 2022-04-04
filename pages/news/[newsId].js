import {useRouter} from 'next/router'
//domain/news/something-important

const DetailPage = () => {
  const router = useRouter();

  router.query.newsId;
  
  return <h1>Detail Page</h1>;
};

export default DetailPage;
