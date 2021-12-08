import builder from 'xmlbuilder';
import { GetServerSideProps } from 'next';

export default function Sitemap() {}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  /// Create root element
  let root = builder.create('urlset', {
    version: '1.0',
    encoding: 'UTF-8',
  });
  // Set root element attribute
  root.att({ xmlns: 'http://www.sitemaps.org/schemas/sitemap/0.9' });

  // Get routes from API
  const routes = ['/'];

  // Insert a url element for each route
  routes.forEach(slug => {
    const url = root.ele('url');
    url.ele('loc', process.env.siteUrl || 'https://nicholasgriffin.dev' + slug);
    url.ele('priority', 0.5);
    url.ele('changefreq', 'daily');
  });

  let xml = root.end({ pretty: true });
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/xml');
  res.end(xml);
  return { props: {} };
};
