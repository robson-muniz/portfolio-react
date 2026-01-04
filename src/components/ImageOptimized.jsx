import { useState } from 'react';

const ImageOptimized = ({ src, alt, className, ...props }) => {
    const [loaded, setLoaded] = useState(false);

    return (
        <div className={`relative overflow-hidden ${className}`}>
            {/* Blur placeholder */}
            {!loaded && (
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 animate-pulse" />
            )}

            <img
                src={src}
                alt={alt}
                loading="lazy"
                decoding="async"
                className={`w-full h-full object-cover transition-opacity duration-300 ${
                    loaded ? 'opacity-100' : 'opacity-0'
                }`}
                onLoad={() => setLoaded(true)}
                {...props}
            />
        </div>
    );
};

export default ImageOptimized;