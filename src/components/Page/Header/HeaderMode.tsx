import { FC } from "react";
import { UI } from "@/components";
import { HiSun, HiMoon } from "react-icons/hi2";
import useModeStore from "@/store/ModeStore";
import useThemeStore from "@/store/ThemeStore";

const { Space, Switch } = UI;

interface HeaderModeProps {}

const HeaderMode: FC<HeaderModeProps> = () => {
  const [mode, setMode] = useModeStore((state) => [state.mode, state.setMode]);

  const color = useThemeStore((state) => state.color);

  const handleChangeMode = (changed: boolean) => {
    if (changed) return setMode("dark");
    setMode("light");
  };

  return (
    <Space align="middle">
      <HiSun size={16} />
      <Switch sizes="sm" color={color} checked={mode === "dark"} onSwitch={handleChangeMode} />
      <HiMoon size={16} />
    </Space>
  );
};

export default HeaderMode;
