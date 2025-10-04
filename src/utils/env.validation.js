export const validateEnv = () => {
    const required = [
        'VITE_EMAILJS_SERVICE_ID',
        'VITE_EMAILJS_TEMPLATE_ID',
        'VITE_EMAILJS_PUBLIC_KEY'
    ];

    const missing = required.filter(key => !import.meta.env[key]);

    if (missing.length > 0 && import.meta.env.PROD) {
        console.error('Missing required environment variables:', missing);
        return false;
    }

    return true;
};