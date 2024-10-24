import { useState, useEffect } from "react";

export const breakpoint = {
  SM_PHONE: 320,
  MD_PHONE: 480,
  LG_PHONE: 576,
  SM_TABLET: 667,
  MD_TABLET: 768,
  LG_TABLET: 992,
  LAPTOP: 1200,
};

const useViewpoint = () => {
  if (typeof window === "undefined")
    return { screenWidth: 0, isPhone: false, isTablet: false, isLaptop: false, isDesktop: false };

  const { SM_PHONE, MD_PHONE, MD_TABLET } = breakpoint;

  const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isPhone = screenWidth >= SM_PHONE && screenWidth <= MD_PHONE;

  const isTablet = screenWidth > MD_PHONE && screenWidth <= MD_TABLET;

  const isLaptop = screenWidth > MD_TABLET && screenWidth <= 1100;

  const isDesktop = screenWidth > 1100;

  return { screenWidth, isPhone, isTablet, isLaptop, isDesktop };
};

export default useViewpoint;
