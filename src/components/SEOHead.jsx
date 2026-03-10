import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEOHead = ({
    title,
    description,
    keywords,
    canonical,
    ogImage = 'https://smaarelysium.com/og-image.jpg',
    schema,
}) => {
    const siteTitle = title
        ? `${title} | Smaar Elysium`
        : 'Smaar Elysium – Premier Manpower & Staffing Agency in India';

    return (
        <Helmet>
            {/* Primary SEO */}
            <title>{siteTitle}</title>
            <meta name="description" content={description} />
            {keywords && <meta name="keywords" content={keywords} />}
            <meta name="robots" content="index, follow" />
            {canonical && <link rel="canonical" href={canonical} />}

            {/* Open Graph */}
            <meta property="og:title" content={siteTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:type" content="website" />
            <meta property="og:image" content={ogImage} />
            {canonical && <meta property="og:url" content={canonical} />}
            <meta property="og:site_name" content="Smaar Elysium" />

            {/* Twitter Card */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={siteTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={ogImage} />

            {/* JSON-LD Schema */}
            {schema && (
                <script type="application/ld+json">{JSON.stringify(schema)}</script>
            )}
        </Helmet>
    );
};

export default SEOHead;
