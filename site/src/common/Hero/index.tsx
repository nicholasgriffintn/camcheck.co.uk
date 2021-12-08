import { useRouter } from 'next/router';

type Props = {
  image?: string;
  title: string;
  description?: string;
  link?: {
    href: string;
    text: string;
    external?: boolean;
  };
};

export const Hero = ({
  image = '/img/page-assets/default.png',
  title,
  description,
  link,
}: Props) => {
  const router = useRouter();

  return (
    <div
      className="w-full bg-center bg-cover h-128"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className="flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50">
        <div className="container px-5 py-24 mx-auto">
          <div className="text-center">
            <h1 className="text-4xl font-semibold text-white uppercase lg:text-6xl">
              {title}
            </h1>
            {description ? (
              <p className="pt-4 text-2xl text-white lg:text-3xl">
                {description}
              </p>
            ) : null}
            {link && link.href ? (
              <div className="pt-8">
                <a
                  onClick={e => {
                    if (!link.external) {
                      e.preventDefault();
                      router.push(link.href);
                    } else if (typeof window !== undefined) {
                      const w = window.open(link.href, '_blank');

                      if (w) {
                        w.focus();
                      }
                    }
                  }}
                  className="py-4 px-6  bg-blue-500 hover:bg-blue-600 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-full"
                >
                  {link?.text}
                </a>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};
