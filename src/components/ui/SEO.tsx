import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  name?: string;
  type?: string;
  image?: string;
  url?: string;
  keywords?: string;
}

export function SEO({
  title = "KOA Engineering - Structural, Civil & General Engineering in Abuja, Nigeria",
  description = "KOA Engineering delivers world-class structural, civil and general engineering solutions across Nigeria. Based in Abuja, FCT.",
  name = "KOA Engineering",
  type = "website",
  image = "https://koaengineering.com/images/webp/hero.webp",
  url = "https://koaengineering.com",
  keywords = "Civil Engineering Abuja, Structural Engineering Nigeria, General Engineering, KOA Engineering, Highway Construction, Industrial Engineering, Renewable Energy Nigeria, Building Construction Abuja",
}: SEOProps) {
  const absoluteImage = image.startsWith("http")
    ? image
    : `https://koaengineering.com${image}`;

  return (
    <Helmet>
      {/* Primary Meta */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={name} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={name} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={absoluteImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={title} />
      <meta property="og:url" content={url} />
      <meta property="og:locale" content="en_NG" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={name} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={absoluteImage} />
      <meta name="twitter:image:alt" content={title} />
    </Helmet>
  );
}