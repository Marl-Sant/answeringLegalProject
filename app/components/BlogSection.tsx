'use client';

import BlogSectionDesktop from './BlogSectionDesktop'
import BlogSectionMobile from './BlogSectionMobile';
import { useState, useEffect } from 'react';

export default function BlogSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkViewport = () => setIsMobile(window.innerWidth < 830);
    checkViewport();
    console.log(window.innerWidth, isMobile)
    window.addEventListener('resize', checkViewport);
    return () => window.removeEventListener('resize', checkViewport);
  }, [isMobile]);

  return isMobile ? <BlogSectionMobile /> : <BlogSectionDesktop />;
}
