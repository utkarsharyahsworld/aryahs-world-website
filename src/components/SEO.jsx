import { Helmet } from 'react-helmet-async';
import { COMPANY_INFO } from '../constants'; // Assumes you made this file earlier

export const SEO = ({ title, description, url, image }) => {
  const siteTitle = "Aryahs World Venture";
  const defaultDescription = "Innovative IT Solutions for Modern Businesses.";
  const siteUrl = "https://aryahsworld.com";
  const defaultImage = "/assets/logo.jpg";

  return (
    <Helmet>
      <title>{title ? `${title} | ${siteTitle}` : siteTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      <meta property="og:title" content={title || siteTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:image" content={image || defaultImage} />
      <meta property="og:url" content={url ? `${siteUrl}${url}` : siteUrl} />
      <link rel="canonical" href={url ? `${siteUrl}${url}` : siteUrl} />
    </Helmet>
  );
};