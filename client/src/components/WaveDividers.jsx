import React from 'react';

/**
 * Clean, smooth undulating wave dividers matching the user's reference design.
 * Features ultra-smooth continuous bezier curvature with clean, un-cluttered fills.
 */

// 1. Bottom of Hero transitioning into Vista Section (Warm Parchment #FBF6F0)
export function HeroBottomWave() {
  return (
    <div className="absolute -bottom-1 left-0 right-0 z-20 overflow-hidden leading-none pointer-events-none">
      <svg
        className="w-full h-10 sm:h-14 md:h-18 lg:h-20 block"
        viewBox="0 0 1440 64"
        fill="none"
        preserveAspectRatio="none"
      >
        {/* Subtle warm cream undertone ribbon */}
        <path
          d="M0,26 Q180,48 360,26 T720,26 T1080,26 T1440,26 L1440,64 L0,64 Z"
          fill="#F5EBE0"
          fillOpacity="0.6"
        />
        {/* Main smooth wave matching Vista background */}
        <path
          d="M0,32 Q180,56 360,32 T720,32 T1080,32 T1440,32 L1440,64 L0,64 Z"
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
        className="w-full h-10 sm:h-14 md:h-16 block"
        viewBox="0 0 1440 64"
        fill="none"
        preserveAspectRatio="none"
      >
        {/* Soft cream accent wave */}
        <path
          d="M0,24 Q180,46 360,24 T720,24 T1080,24 T1440,24 L1440,64 L0,64 Z"
          fill="#F4EAD4"
          fillOpacity="0.5"
        />
        {/* Main wave matching Popular Menu background */}
        <path
          d="M0,32 Q180,56 360,32 T720,32 T1080,32 T1440,32 L1440,64 L0,64 Z"
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
        className="w-full h-10 sm:h-14 md:h-16 block"
        viewBox="0 0 1440 64"
        fill="none"
        preserveAspectRatio="none"
      >
        {/* Soft cream accent wave */}
        <path
          d="M0,24 Q180,46 360,24 T720,24 T1080,24 T1440,24 L1440,64 L0,64 Z"
          fill="#F4EAD4"
          fillOpacity="0.4"
        />
        {/* Main wave matching Location section background */}
        <path
          d="M0,32 Q180,56 360,32 T720,32 T1080,32 T1440,32 L1440,64 L0,64 Z"
          fill="#FBF6F0"
        />
      </svg>
    </div>
  );
}

// 4. Location to CTA Wave Divider
export function LocationToCTAWave() {
  return (
    <div className="w-full overflow-hidden leading-none -mb-1 pointer-events-none relative z-10">
      <svg
        className="w-full h-12 sm:h-16 md:h-20 block"
        viewBox="0 0 1440 64"
        fill="none"
        preserveAspectRatio="none"
      >
        {/* Smooth dark evening wave matching CTA */}
        <path
          d="M0,32 Q180,56 360,32 T720,32 T1080,32 T1440,32 L1440,64 L0,64 Z"
          fill="#0E1A14"
        />
      </svg>
    </div>
  );
}

// 5. CTA to Footer Wave Divider
export function CTAToFooterWave() {
  return (
    <div className="w-full overflow-hidden leading-none -mb-1 pointer-events-none relative z-10 bg-[#0E1A14]">
      <svg
        className="w-full h-10 sm:h-14 md:h-18 block"
        viewBox="0 0 1440 64"
        fill="none"
        preserveAspectRatio="none"
      >
        {/* Clean white wave matching Footer */}
        <path
          d="M0,32 Q180,56 360,32 T720,32 T1080,32 T1440,32 L1440,64 L0,64 Z"
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
