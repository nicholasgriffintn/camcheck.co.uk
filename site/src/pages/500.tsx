import Head from 'next/head';

import { Hero } from '@/common/Hero';

const NotFound = () => {
  return (
    <>
      <Head>
        <title>500 Internal Server Error - Nicholas Griffin</title>
      </Head>
      <Hero title="500 Internal Server Error" />
    </>
  );
};

export default NotFound;
