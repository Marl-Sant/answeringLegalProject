'use client';

import InfoSectionDesktop from './InfoSectionDesktop';
import InfoSectionMobile from './InfoSectionMobile';
import { useState, useEffect } from 'react';

export default function InfoSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkViewport = () => setIsMobile(window.innerWidth < 890);
    checkViewport();
    console.log(window.innerWidth, isMobile)
    window.addEventListener('resize', checkViewport);
    return () => window.removeEventListener('resize', checkViewport);
  }, [isMobile]);

  return isMobile ? <InfoSectionMobile /> : <InfoSectionDesktop />;
}
