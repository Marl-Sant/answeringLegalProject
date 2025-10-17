'use client';

import FooterDesktop from './FooterDesktop';
import FooterMobile from './FooterMobile';
import { useState, useEffect } from 'react';

export default function BlogSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkViewport = () => setIsMobile(window.innerWidth < 1200);
    checkViewport();
    console.log(window.innerWidth, isMobile)
    window.addEventListener('resize', checkViewport);
    return () => window.removeEventListener('resize', checkViewport);
  }, [isMobile]);

  return isMobile ? <FooterMobile /> : <FooterDesktop />;
}
