import { FC } from "react";
import { UI } from "@/components";
import { HiSun, HiMoon } from "react-icons/hi2";
import useThemeStore from "@/store/ThemeStore";
import useLayout from "@/components/UI/Layout/useLayout";

const { Space, Switch } = UI;

interface HeaderModeProps {}

const HeaderMode: FC<HeaderModeProps> = () => {
  const { layoutValue, layoutApi } = useLayout();

  const color = useThemeStore((state) => state.color);

  const handleChangeMode = (changed: boolean) => {
    if (changed) return layoutApi.onSwitchTheme("dark");
    layoutApi.onSwitchTheme("light");
  };

  return (
    <Space align="middle">
      <HiSun size={16} />
      <Switch
        sizes="sm"
        color={color}
        checked={layoutValue.layoutTheme === "dark"}
        onSwitch={handleChangeMode}
      />
      <HiMoon size={16} />
    </Space>
  );
};

export default HeaderMode;
