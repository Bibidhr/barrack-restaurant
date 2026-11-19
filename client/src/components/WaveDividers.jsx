import React from 'react';

/**
 * 1. Bottom of Hero into Vista
 * Transitions from the dark sunset skyline into the warm parchment of VistaSection.
 */
export function HeroBottomWave() {
  return (
    <div className="absolute -bottom-1 left-0 right-0 z-20 overflow-hidden leading-none pointer-events-none">
      <svg
        className="w-full h-12 sm:h-18 md:h-24 lg:h-28 block"
        viewBox="0 0 1440 120"
        fill="none"
        preserveAspectRatio="none"
      >
        {/* Layer 1: Subtle translucent terracotta/gold wave */}
        <path
          d="M0,45 C320,110 580,10 920,70 C1200,115 1360,40 1440,65 L1440,120 L0,120 Z"
          fill="#BE523C"
          fillOpacity="0.15"
        />
        {/* Layer 2: Soft elevated parchment wave */}
        <path
          d="M0,60 C260,15 620,95 980,35 C1240,75 1380,30 1440,50 L1440,120 L0,120 Z"
          fill="#F5EAE2"
          fillOpacity="0.85"
        />
        {/* Layer 3: Solid base parchment wave matching Vista background */}
        <path
          d="M0,80 C360,25 680,110 1040,55 C1260,20 1390,70 1440,60 L1440,120 L0,120 Z"
          fill="#FBF6F0"
        />
      </svg>
    </div>
  );
}

/**
 * 2. Vista to Popular Menu Wave Divider
 * Replaces straight horizontal border with flowing organic wave.
 */
export function VistaToMenuWave() {
  return (
    <div className="w-full overflow-hidden leading-none -mb-1 pointer-events-none relative z-10">
      <svg
        className="w-full h-10 sm:h-16 md:h-20 block"
        viewBox="0 0 1440 90"
        fill="none"
        preserveAspectRatio="none"
      >
        {/* Subtle accent wave line */}
        <path
          d="M0,45 Q360,0 720,45 T1440,45"
          stroke="rgba(22, 62, 43, 0.12)"
          strokeWidth="1.5"
          fill="none"
        />
        {/* Secondary wave layer */}
        <path
          d="M0,35 C280,75 560,15 880,55 C1180,90 1360,30 1440,50 L1440,90 L0,90 Z"
          fill="#F5EAE2"
          fillOpacity="0.5"
        />
        {/* Primary wave matching Popular Menu background */}
        <path
          d="M0,55 C340,15 640,80 1020,35 C1240,65 1380,30 1440,45 L1440,90 L0,90 Z"
          fill="#FAF7F2"
        />
      </svg>
    </div>
  );
}

/**
 * 3. Popular Menu to Location Wave Divider
 * Replaces straight border at the end of the menu gallery.
 */
export function MenuToLocationWave() {
  return (
    <div className="w-full overflow-hidden leading-none -mt-1 pointer-events-none relative z-10">
      <svg
        className="w-full h-10 sm:h-16 md:h-20 block"
        viewBox="0 0 1440 90"
        fill="none"
        preserveAspectRatio="none"
      >
        {/* Subtle accent line */}
        <path
          d="M0,35 Q360,75 720,35 T1440,35"
          stroke="rgba(190, 82, 60, 0.14)"
          strokeWidth="1.5"
          fill="none"
        />
        {/* Secondary soft wave */}
        <path
          d="M0,50 C380,15 700,85 1060,35 C1260,70 1380,25 1440,45 L1440,90 L0,90 Z"
          fill="#F5EAE2"
          fillOpacity="0.4"
        />
        {/* Primary matching base background */}
        <path
          d="M0,40 C320,85 640,20 960,65 C1220,25 1360,60 1440,40 L1440,90 L0,90 Z"
          fill="#FBF6F0"
        />
      </svg>
    </div>
  );
}

/**
 * 4. Location to CTA Wave Divider
 * Transitions down into the evening mood of CTA.
 */
export function LocationToCTAWave() {
  return (
    <div className="w-full overflow-hidden leading-none -mb-1 pointer-events-none relative z-10">
      <svg
        className="w-full h-12 sm:h-18 md:h-24 block"
        viewBox="0 0 1440 100"
        fill="none"
        preserveAspectRatio="none"
      >
        {/* Accent outline */}
        <path
          d="M0,40 C360,95 720,15 1080,75 C1260,40 1380,60 1440,50"
          stroke="rgba(22, 62, 43, 0.18)"
          strokeWidth="1.5"
          fill="none"
        />
        {/* Deep translucent transition layer */}
        <path
          d="M0,50 C340,100 680,25 1040,80 C1240,45 1380,65 1440,55 L1440,100 L0,100 Z"
          fill="#163E2B"
          fillOpacity="0.2"
        />
        {/* Dark night wave matching CTA background */}
        <path
          d="M0,65 C320,20 660,95 1020,45 C1240,85 1360,45 1440,60 L1440,100 L0,100 Z"
          fill="#0E1A14"
        />
      </svg>
    </div>
  );
}

/**
 * 5. CTA to Footer Wave Divider
 * Wave transition from the dark CTA photo section into the clean footer.
 */
export function CTAToFooterWave() {
  return (
    <div className="w-full overflow-hidden leading-none -mb-1 pointer-events-none relative z-10 bg-[#0E1A14]">
      <svg
        className="w-full h-10 sm:h-16 md:h-20 block"
        viewBox="0 0 1440 90"
        fill="none"
        preserveAspectRatio="none"
      >
        {/* Accent wave line */}
        <path
          d="M0,45 Q360,10 720,45 T1440,45"
          stroke="rgba(255, 255, 255, 0.15)"
          strokeWidth="1.2"
          fill="none"
        />
        {/* Soft parchment wave */}
        <path
          d="M0,55 C320,20 640,80 980,35 C1220,70 1360,35 1440,50 L1440,90 L0,90 Z"
          fill="#F5EAE2"
          fillOpacity="0.5"
        />
        {/* Solid white wave matching Footer */}
        <path
          d="M0,65 C280,30 620,85 960,45 C1240,80 1380,45 1440,55 L1440,90 L0,90 Z"
          fill="#FFFFFF"
        />
      </svg>
    </div>
  );
}

/**
 * 6. Ambient Background Waves Component
 * Renders multiple flowing, undulating wave contours across the background
 * creating a warm, organic botanical atmosphere as you scroll.
 */
export function AmbientBackgroundWaves() {
  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden opacity-70">
      <svg
        className="w-full h-full min-h-screen"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 2800"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        {/* Flowing Wave Ribbon 1 (Pine Green & Terracotta) */}
        <path
          d="M-100,200 C300,350 500,100 900,280 C1300,450 1500,220 1600,380"
          stroke="rgba(22, 62, 43, 0.06)"
          strokeWidth="2.5"
          strokeDasharray="8 6"
        />
        <path
          d="M-100,240 C320,390 520,140 920,320 C1320,490 1520,260 1600,420"
          stroke="rgba(190, 82, 60, 0.05)"
          strokeWidth="2"
        />

        {/* Flowing Wave Ribbon 2 (Mid-page Vista / Menu) */}
        <path
          d="M-100,850 C260,700 620,1020 1020,860 C1360,720 1540,980 1600,920"
          stroke="rgba(22, 62, 43, 0.05)"
          strokeWidth="3"
        />
        <path
          d="M-100,890 C280,740 640,1060 1040,900 C1380,760 1560,1020 1600,960"
          stroke="rgba(197, 155, 103, 0.08)"
          strokeWidth="1.8"
        />
        <path
          d="M-100,930 C300,780 660,1100 1060,940 C1400,800 1580,1060 1600,1000"
          stroke="rgba(22, 62, 43, 0.04)"
          strokeWidth="1.5"
          strokeDasharray="6 8"
        />

        {/* Flowing Wave Ribbon 3 (Gallery & Atmosphere) */}
        <path
          d="M-100,1550 C380,1720 700,1450 1100,1650 C1420,1800 1550,1600 1600,1700"
          stroke="rgba(190, 82, 60, 0.06)"
          strokeWidth="2.5"
        />
        <path
          d="M-100,1590 C400,1760 720,1490 1120,1690 C1440,1840 1570,1640 1600,1740"
          stroke="rgba(22, 62, 43, 0.05)"
          strokeWidth="1.8"
        />

        {/* Flowing Wave Ribbon 4 (Lower Location section) */}
        <path
          d="M-100,2250 C280,2100 650,2400 1050,2220 C1350,2100 1520,2350 1600,2300"
          stroke="rgba(22, 62, 43, 0.05)"
          strokeWidth="3"
        />
        <path
          d="M-100,2290 C300,2140 670,2440 1070,2260 C1370,2140 1540,2390 1600,2340"
          stroke="rgba(197, 155, 103, 0.07)"
          strokeWidth="2"
        />
      </svg>
    </div>
  );
}
