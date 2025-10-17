'use client';

import FormSectionDesktop from './FormSectionDesktop';
import FormSectionMobile from './FormSectionMobile';
import { useState, useEffect } from 'react';

export default function FormSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkViewport = () => setIsMobile(window.innerWidth < 890);
    checkViewport();
    console.log(window.innerWidth, isMobile)
    window.addEventListener('resize', checkViewport);
    return () => window.removeEventListener('resize', checkViewport);
  }, [isMobile]);

  return isMobile ? <FormSectionMobile /> : <FormSectionDesktop />;
}
