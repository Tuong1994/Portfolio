import { FC } from "react";
import { UI } from "@/components";
import { DrawerProps } from "@/components/UI/Drawer";
import HeaderTranslate from "./HeaderTranslate";
import HeaderTheme from "./HeaderTheme";
import useMenu from "./useMenu";
import { useViewpoint } from "@/hooks";
import useModeStore from "@/store/ModeStore";
import utils from "@/utils";

const { Drawer, Divider, Space, Navigating } = UI;

const { NavLink } = Navigating;

interface HeaderMobileProps extends DrawerProps {}

const HeaderMobile: FC<HeaderMobileProps> = ({ ...restProps }) => {
  const menus = useMenu();

  const mode = useModeStore((state) => state.mode);

  const { isPhone } = useViewpoint();

  const modeClassName = `header-mobile-${mode}`;

  const mainClassName = utils.formatClassName("header-mobile", modeClassName);

  return (
    <Drawer hasHead={false} bodyClassName={mainClassName} {...restProps}>
      {menus.map((menu) => (
        <NavLink key={menu.id} id={menu.id} rootClassName="mobile-link">
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
