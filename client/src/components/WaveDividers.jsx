import React from 'react';

/**
 * Clean, smooth undulating wave dividers matching the user's reference design.
 * Features ultra-smooth continuous bezier curvature with clean, un-cluttered fills.
 */

// 1. Bottom of Hero transitioning into Vista Section (Warm Parchment #FBF6F0)
// Completely shapes the bottom of the hero picture into an organic wave with no straight line.
export function HeroBottomWave() {
  return (
    <div className="absolute -bottom-1 left-0 right-0 z-20 overflow-hidden leading-none pointer-events-none">
      <svg
        className="w-full h-16 sm:h-20 md:h-28 lg:h-32 block"
        viewBox="0 0 1440 100"
        fill="none"
        preserveAspectRatio="none"
      >
        {/* Subtle warm cream undertone ribbon */}
        <path
          d="M0,28 Q180,54 360,28 T720,28 T1080,28 T1440,28 L1440,100 L0,100 Z"
          fill="#F4EAD4"
          fillOpacity="0.6"
        />
        {/* Main solid wave matching Vista background */}
        <path
          d="M0,36 Q180,62 360,36 T720,36 T1080,36 T1440,36 L1440,100 L0,100 Z"
          fill="#FBF6F0"
        />
      </svg>
    </div>
  );
}

// 2. Vista to Popular Menu Wave Divider
export function VistaToMenuWave() {
  return (
    <div className="w-full overflow-hidden leading-none -mb-1 pointer-events-none relative z-10">
      <svg
        className="w-full h-12 sm:h-16 md:h-20 block"
        viewBox="0 0 1440 80"
        fill="none"
        preserveAspectRatio="none"
      >
        {/* Soft cream accent wave */}
        <path
          d="M0,22 Q180,46 360,22 T720,22 T1080,22 T1440,22 L1440,80 L0,80 Z"
          fill="#F4EAD4"
          fillOpacity="0.5"
        />
        {/* Main wave matching Popular Menu background */}
        <path
          d="M0,30 Q180,56 360,30 T720,30 T1080,30 T1440,30 L1440,80 L0,80 Z"
          fill="#FAF7F2"
        />
      </svg>
    </div>
  );
}

// 3. Popular Menu to Location Wave Divider
export function MenuToLocationWave() {
  return (
    <div className="w-full overflow-hidden leading-none -mt-1 pointer-events-none relative z-10">
      <svg
        className="w-full h-12 sm:h-16 md:h-20 block"
        viewBox="0 0 1440 80"
        fill="none"
        preserveAspectRatio="none"
      >
        {/* Soft cream accent wave */}
        <path
          d="M0,22 Q180,46 360,22 T720,22 T1080,22 T1440,22 L1440,80 L0,80 Z"
          fill="#F4EAD4"
          fillOpacity="0.4"
        />
        {/* Main wave matching Location section background */}
        <path
          d="M0,30 Q180,56 360,30 T720,30 T1080,30 T1440,30 L1440,80 L0,80 Z"
          fill="#FBF6F0"
        />
      </svg>
    </div>
  );
}

// 4. Top of CTA Section: Shapes the top of the CTA picture into an organic wave
export function CTATopWave() {
  return (
    <div className="absolute -top-1 left-0 right-0 z-20 overflow-hidden leading-none pointer-events-none">
      <svg
        className="w-full h-14 sm:h-18 md:h-24 block"
        viewBox="0 0 1440 80"
        fill="none"
        preserveAspectRatio="none"
      >
        {/* Solid parchment wave cutting cleanly into the photo from above */}
        <path
          d="M0,0 L1440,0 L1440,40 Q1260,18 1080,40 T720,40 T360,40 T0,40 Z"
          fill="#FBF6F0"
        />
        {/* Soft cream accent ribbon along wave border */}
        <path
          d="M0,40 Q180,62 360,40 T720,40 T1080,40 T1440,40"
          stroke="#F4EAD4"
          strokeWidth="3"
          strokeOpacity="0.7"
          fill="none"
        />
      </svg>
    </div>
  );
}

// 5. Bottom of CTA Section: Shapes the bottom of the CTA picture into an organic wave
export function CTABottomWave() {
  return (
    <div className="absolute -bottom-1 left-0 right-0 z-20 overflow-hidden leading-none pointer-events-none">
      <svg
        className="w-full h-14 sm:h-18 md:h-24 block"
        viewBox="0 0 1440 80"
        fill="none"
        preserveAspectRatio="none"
      >
        {/* Soft cream accent wave ribbon */}
        <path
          d="M0,22 Q180,44 360,22 T720,22 T1080,22 T1440,22 L1440,80 L0,80 Z"
          fill="#F4EAD4"
          fillOpacity="0.5"
        />
        {/* Main solid wave filled with white #FFFFFF cutting into the photo from below */}
        <path
          d="M0,30 Q180,54 360,30 T720,30 T1080,30 T1440,30 L1440,80 L0,80 Z"
          fill="#FFFFFF"
        />
      </svg>
    </div>
  );
}

/**
 * 6. Ambient Background Waves Component
 * Renders multiple broad, gentle, smooth undulating wave ribbons in warm linen/cream
 * across the background to give that exact calm, flowing aesthetic seen in the reference image.
 */
export function AmbientBackgroundWaves() {
  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden opacity-80">
      <svg
        className="w-full h-full min-h-screen"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 2800"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        {/* Wave Band 1 (Top Hero / Vista transition) */}
        <path
          d="M-50,220 Q200,320 480,220 T960,220 T1440,220 T1600,220"
          stroke="#F4EAD4"
          strokeWidth="60"
          strokeOpacity="0.35"
        />
        <path
          d="M-50,280 Q200,380 480,280 T960,280 T1440,280 T1600,280"
          stroke="#EBF2E6"
          strokeWidth="35"
          strokeOpacity="0.4"
        />

        {/* Wave Band 2 (Mid-page Vista / Menu area) */}
        <path
          d="M-50,920 Q200,820 480,920 T960,920 T1440,920 T1600,920"
          stroke="#F4EAD4"
          strokeWidth="70"
          strokeOpacity="0.35"
        />
        <path
          d="M-50,980 Q200,880 480,980 T960,980 T1440,980 T1600,980"
          stroke="#F5EAE2"
          strokeWidth="40"
          strokeOpacity="0.45"
        />

        {/* Wave Band 3 (Popular Menu Gallery) */}
        <path
          d="M-50,1650 Q200,1750 480,1650 T960,1650 T1440,1650 T1600,1650"
          stroke="#F4EAD4"
          strokeWidth="75"
          strokeOpacity="0.3"
        />
        <path
          d="M-50,1710 Q200,1810 480,1710 T960,1710 T1440,1710 T1600,1710"
          stroke="#EBF2E6"
          strokeWidth="45"
          strokeOpacity="0.35"
        />

        {/* Wave Band 4 (Location & Hours Section) */}
        <path
          d="M-50,2320 Q200,2220 480,2320 T960,2320 T1440,2320 T1600,2320"
          stroke="#F4EAD4"
          strokeWidth="65"
          strokeOpacity="0.35"
        />
        <path
          d="M-50,2380 Q200,2280 480,2380 T960,2380 T1440,2380 T1600,2380"
          stroke="#F5EAE2"
          strokeWidth="40"
          strokeOpacity="0.4"
        />
      </svg>
    </div>
  );
}
