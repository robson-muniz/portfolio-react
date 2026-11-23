const required = [
    "VITE_EMAILJS_SERVICE_ID",
    "VITE_EMAILJS_TEMPLATE_ID",
    "VITE_EMAILJS_PUBLIC_KEY",
];

export const getMissingEnv = () =>
    required.filter((key) => !import.meta.env[key]);

export const validateEnv = () => {
    const missing = getMissingEnv();
    if (missing.length > 0 && import.meta.env.PROD) {
        console.error("Missing required environment variables:", missing);
        return false;
    }

    return true;
};
