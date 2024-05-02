import { FC } from "react";
import { UI } from "@/components";
import { HiListBullet } from "react-icons/hi2";
import { ButtonProps } from "@/components/UI/Button";
import useThemeStore from "@/store/ThemeStore";

const { Button } = UI;

interface HeaderActionProps extends ButtonProps {}

const HeaderAction: FC<HeaderActionProps> = ({ ...restProps }) => {
  const color = useThemeStore((state) => state.color);

  return (
    <Button color={color} rootClassName="header-action" {...restProps}>
      <HiListBullet size={18} />
    </Button>
  );
};

export default HeaderAction;
