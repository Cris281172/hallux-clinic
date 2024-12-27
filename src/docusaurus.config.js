// structuredDataHelpers.js
export const generateStructuredData = (pageType, data) => {
    switch (pageType) {
        case 'Contact':
            return {
                "@context": "https://schema.org",
                "@type": "ContactPage",
                "url": window.location.href,
                "name": data.title,
                "description": data.desc
            };
        case 'AboutMe':
            return {
                "@context": "https://schema.org",
                "@type": "Person",
                "url": window.location.href,
                "name": "mgr Monika Juczyńska",
                "jobTitle": "Dyplomowany Specjalista ds. Podologii",
                "description": data.desc
            };
        case 'Gallery':
            return {
                "@context": "https://schema.org",
                "@type": "ImageGallery",
                "url": window.location.href,
                "name": data.title,
                "description": data.desc
            };
        default:
            return {};
    }
};

export default generateStructuredData