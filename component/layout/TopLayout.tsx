import React from 'react';

interface TopLayoutProps {
  /** Main large hero title */
  heroTitle: string;
  /** Subtitle (e.g. "Home", "Company", etc.) */
  subtitle?: string;
  /** Current page title (appears after the slash) */
  currentTitle: string;
  /** Optional height of the hero section */
  height?: string;
  /** Optional overlay darkness (0 to 1) */
  overlayOpacity?: number;
}

const TopLayout: React.FC<TopLayoutProps> = ({
  heroTitle,
  subtitle,
  currentTitle,
  height = 'h-[300px]',
  overlayOpacity = 0.65,
}) => {
  const backgroundImage = '/assests/topbg2.jpg';   // ← Change this path to your image

  return (
    <div
      className={`relative w-full ${height} bg-cover bg-center bg-no-repeat flex items-center justify-center`}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Dark overlay */}
      <div
        className="absolute inset-0 bg-black"
        style={{ opacity: overlayOpacity }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Hero Title */}
        <p className="text-5xl md:text-6xl lg:text-5xl font-semibold text-white leading-tight tracking-tighter">
          {heroTitle}
        </p>
        {/* Breadcrumb */}
        <div className="flex items-center justify-center gap-2 text-white/90 text-sm md:text-base mb-6 tracking-widest uppercase">
          {subtitle && (
            <>
              <span>{subtitle}</span>
              <span className="text-white/60">/</span>
            </>
          )}
          <span className="text-white font-semibold">{currentTitle}</span>
        </div>

        
      </div>

      {/* Bottom fade effect */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black/80 to-transparent" />
    </div>
  );
};

export default TopLayout;