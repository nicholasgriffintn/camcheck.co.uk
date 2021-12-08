import Head from 'next/head';

import { Hero } from '@/common/Hero';

const NotFound = () => {
  return (
    <>
      <Head>
        <title>404 Not Found - Nicholas Griffin</title>
      </Head>
      <Hero title="404 - Page Not Found" />
    </>
  );
};

export default NotFound;
