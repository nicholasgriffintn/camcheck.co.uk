import { useRouter } from 'next/router';
import Image from 'next/image';

import AppLogo from '../../../public/img/logo.png';

export const Header = () => {
  const router = useRouter();

  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap pl-5 pr-5 pt-2 pb-2 flex-col md:flex-row items-center">
        <a
          onClick={e => {
            e.preventDefault();
            router.push('/');
          }}
          href="/"
          title="Go back to the homepage"
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 relative"
          style={{
            width: '50px',
            height: '50px',
          }}
        >
          <Image
            layout="fill"
            objectFit="contain"
            className="app-logo"
            alt="Nicholas Griffin"
            src={AppLogo}
          />
        </a>
        <nav className="pl-5 flex flex-wrap text-base">
          <a
            className="mr-5 hover:text-gray-900"
            onClick={e => {
              e.preventDefault();
              router.push('/404');
            }}
            href="/404"
          >
            404 Page
          </a>
          <a
            className="mr-5 hover:text-gray-900"
            onClick={e => {
              e.preventDefault();
              router.push('/500');
            }}
            href="/500"
          >
            500 page
          </a>
        </nav>
      </div>
    </header>
  );
};
