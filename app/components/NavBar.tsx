'use client';

import NavBarDesktop from './NavBarDesktop';
import NavBarMobile from './NavBarMobile';
import { useState, useEffect } from 'react';

export default function NavBar() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkViewport = () => setIsMobile(window.innerWidth < 1115);
    checkViewport();
    console.log(window.innerWidth, isMobile)
    window.addEventListener('resize', checkViewport);
    return () => window.removeEventListener('resize', checkViewport);
  }, [isMobile]);

  return isMobile ? <NavBarMobile /> : <NavBarDesktop />;
}
