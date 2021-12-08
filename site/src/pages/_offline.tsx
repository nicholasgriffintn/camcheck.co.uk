import Head from 'next/head';

import { Hero } from '@/common/Hero';

const NotFound = () => {
  return (
    <>
      <Head>
        <title>Offline - Nicholas Griffin</title>
      </Head>
      <Hero title="Sorry, this page isn't available offline" />
    </>
  );
};

export default NotFound;
