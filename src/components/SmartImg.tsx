import { useState } from 'react';

// Responsive, lazy-loaded photo with a shimmer skeleton until it has loaded. Unsplash URLs get a srcset
// (Unsplash resizes on request and serves AVIF/WebP with auto=format); other URLs are used as they are.
export function unsplashSrcSet(src: string, widths = [480, 800, 1200, 1600]) {
  try {
    const url = new URL(src);
    if (url.hostname !== 'images.unsplash.com') return undefined;
    return widths
      .map((w) => {
        url.searchParams.set('w', String(w));
        url.searchParams.set('auto', 'format');
        return `${url.toString()} ${w}w`;
      })
      .join(', ');
  } catch {
    return undefined;
  }
}

export default function SmartImg({
  src,
  alt,
  sizes = '100vw',
  className = '',
  wrapperClassName = 'w-full h-full',
  eager = false,
}: {
  src: string;
  alt: string;
  sizes?: string;
  className?: string;
  wrapperClassName?: string;
  eager?: boolean;
}) {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className={`${wrapperClassName} ${loaded ? '' : 'skeleton'}`} style={{ borderRadius: 0 }}>
      <img
        src={src}
        srcSet={unsplashSrcSet(src)}
        sizes={sizes}
        alt={alt}
        loading={eager ? 'eager' : 'lazy'}
        decoding="async"
        ref={(el) => { if (el?.complete && el.naturalWidth > 0 && !loaded) setLoaded(true); }}
        onLoad={() => setLoaded(true)}
        onError={() => setLoaded(true)}
        className={`${className} transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'}`}
      />
    </div>
  );
}
