import { FC, useEffect, useState } from "react";
import useThemeStore from "@/store/ThemeStore";

interface HeaderLogoProps {}

const HeaderLogo: FC<HeaderLogoProps> = () => {
  const color = useThemeStore((state) => state.color);

  const [src, setSrc] = useState<string>(`/logo/logo-${color}.svg`);

  useEffect(() => {
    setSrc(`/logo/logo-${color}.svg`);
  }, [color]);

  return <img className="header-logo" src={src} />;
};

export default HeaderLogo;
