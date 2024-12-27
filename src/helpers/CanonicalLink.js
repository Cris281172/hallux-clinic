import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const CanonicalLink = () => {
    const location = useLocation();
    const canonicalUrl = `${window.location.protocol}//${window.location.host}${location.pathname}`;

    useEffect(() => {
        const link = document.querySelector("link[rel='canonical']") || document.createElement('link');
        link.setAttribute('rel', 'canonical');
        link.setAttribute('href', canonicalUrl);
        document.head.appendChild(link);

        return () => document.head.removeChild(link);
    }, [canonicalUrl]);

    return null;
};

export default CanonicalLink;