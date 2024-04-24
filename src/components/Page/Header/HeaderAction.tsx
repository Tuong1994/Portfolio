import { FC } from "react";
import { UI } from "@/components";
import { HiListBullet } from "react-icons/hi2";
import { ButtonProps } from "@/components/UI/Button";

const { Button } = UI;

interface HeaderActionProps extends ButtonProps {}

const HeaderAction: FC<HeaderActionProps> = ({ ...restProps }) => {
  return (
    <Button color="blue" rootClassName="header-action" {...restProps}>
      <HiListBullet size={18} />
    </Button>
  );
};

export default HeaderAction;
