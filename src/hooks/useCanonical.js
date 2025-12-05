import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Custom hook to set canonical URL for each page
 */
export const useCanonical = () => {
  const location = useLocation();

  useEffect(() => {
    const baseUrl = 'https://teamashwatthama.in';
    const canonicalUrl = `${baseUrl}${location.pathname}`;

    // Remove existing canonical tag if any
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    
    if (canonicalLink) {
      canonicalLink.setAttribute('href', canonicalUrl);
    } else {
      // Create new canonical tag if it doesn't exist
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      canonicalLink.setAttribute('href', canonicalUrl);
      document.head.appendChild(canonicalLink);
    }

    // Also update og:url for social media
    let ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) {
      ogUrl.setAttribute('content', canonicalUrl);
    }
  }, [location.pathname]);
};