import { FC } from "react";
import { UI } from "@/components";
import type { ButtonColor } from "@/components/UI/Button";
import useThemeStore from "@/store/ThemeStore";

const { Space, Button } = UI;

interface HeaderThemeProps {}

const HeaderTheme: FC<HeaderThemeProps> = () => {
  const [color, setColor] = useThemeStore((state) => [state.color, state.setColor]);

  const themes = ["blue", "green", "red", "orange", "yellow", "pink", "purple"];

  const handleSelectColor = (color: any) => setColor(color);

  return (
    <div className="header-theme">
      <Button color={color as ButtonColor} rootClassName="theme-selected" />
      <div className="theme-dropdown">
        <Space>
          {themes.map((theme) => (
            <Button
              key={theme}
              color={theme as ButtonColor}
              rootClassName="dropdown-item"
              onClick={() => handleSelectColor(theme as ButtonColor)}
            />
          ))}
        </Space>
      </div>
    </div>
  );
};

export default HeaderTheme;
