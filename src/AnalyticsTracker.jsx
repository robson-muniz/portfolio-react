// src/AnalyticsTracker.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const AnalyticsTracker = () => {
    const location = useLocation();

    useEffect(() => {
        // Safety check — only run if GA is loaded
        if (!window.gtag) return;

        // Send page_view event to GA4
        window.gtag("event", "page_view", {
            page_location: window.location.href, // Full URL
            page_path: location.pathname,        // Route path
            page_title: document.title           // Page title
        });
    }, [location]);

    return null; // No UI
};

export default AnalyticsTracker;
