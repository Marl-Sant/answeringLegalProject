'use client';

import CRMSectionDesktop from './CRMSectionDesktop';
import CRMSectionMobile from './CRMSectionMobile';
import { useState, useEffect } from 'react';

export default function CRMSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkViewport = () => setIsMobile(window.innerWidth < 830);
    checkViewport();
    console.log(window.innerWidth, isMobile)
    window.addEventListener('resize', checkViewport);
    return () => window.removeEventListener('resize', checkViewport);
  }, [isMobile]);

  return isMobile ? <CRMSectionMobile /> : <CRMSectionDesktop />;
}
