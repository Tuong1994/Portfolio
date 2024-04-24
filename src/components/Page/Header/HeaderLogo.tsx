import { FC, useEffect, useState } from "react";
import { Image } from "@/components/UI";
import useThemeStore from "@/store/ThemeStore";

interface HeaderLogoProps {}

const HeaderLogo: FC<HeaderLogoProps> = () => {
  const color = useThemeStore((state) => state.color);

  const [src, setSrc] = useState<string>(`/logo/logo-${color}.svg`);

  useEffect(() => {
    setSrc(`/logo/logo-${color}.svg`);
  }, [color]);

  return <Image imgWidth={100} imgHeight={30} src={src} />;
};

export default HeaderLogo;
