import { FC } from "react";
import { UI } from "@/components";
import { DrawerProps } from "@/components/UI/Drawer";
import { useViewpoint } from "@/hooks";
import HeaderTranslate from "./HeaderTranslate";
import HeaderTheme from "./HeaderTheme";
import useMenu from "./useMenu";
import useLayout from "@/components/UI/Layout/useLayout";
import utils from "@/utils";

const { Drawer, Divider, Space, Navigating } = UI;

const { NavLink } = Navigating;

interface HeaderMobileProps extends DrawerProps {}

const HeaderMobile: FC<HeaderMobileProps> = ({ onClose, ...restProps }) => {
  const { layoutValue } = useLayout();

  const { isPhone } = useViewpoint();

  const menus = useMenu();

  const modeClassName = `header-mobile-${layoutValue.layoutTheme}`;

  const mainClassName = utils.formatClassName("header-mobile", modeClassName);

  const handleClose = () => onClose?.();

  return (
    <Drawer hasHead={false} bodyClassName={mainClassName} {...restProps} onClose={handleClose}>
      {menus.map((menu) => (
        <NavLink key={menu.id} id={menu.id} rootClassName="mobile-link" onClick={handleClose}>
          {menu.title}
        </NavLink>
      ))}
      <Divider />
      <Space justify="end" size="lg">
        <HeaderTranslate />
        {isPhone && <HeaderTheme />}
      </Space>
    </Drawer>
  );
};

export default HeaderMobile;
