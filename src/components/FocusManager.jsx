import { useEffect } from 'react';

const FocusManager = () => {
    useEffect(() => {
        // Add skip to main content link
        const skipLink = document.createElement('a');
        skipLink.href = '#main-content';
        skipLink.className = 'skip-link';
        skipLink.textContent = 'Skip to main content';
        skipLink.setAttribute('aria-label', 'Skip to main content');

        document.body.prepend(skipLink);

        return () => skipLink.remove();
    }, []);

    return null;
};

export default FocusManager;