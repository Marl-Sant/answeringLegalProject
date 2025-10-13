'use client';

import IntakeSectionDesktop from './IntakeSectionDesktop';
import IntakeSectionMobile from './IntakeSectionMobile';
import { useState, useEffect } from 'react';

export default function IntakeSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkViewport = () => setIsMobile(window.innerWidth < 1439);
    checkViewport();
    console.log(window.innerWidth, isMobile)
    window.addEventListener('resize', checkViewport);
    return () => window.removeEventListener('resize', checkViewport);
  }, [isMobile]);

  return isMobile ? <IntakeSectionMobile /> : <IntakeSectionDesktop />;
}
