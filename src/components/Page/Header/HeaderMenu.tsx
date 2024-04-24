import { FC } from "react";
import { UI } from "@/components";
import useMenu from "./useMenu";
import useThemeStore from "@/store/ThemeStore";

const { Grid, Navigating } = UI;

const { Row, Col } = Grid;

const { NavLink } = Navigating;

interface HeaderMenuProps {}

const HeaderMenu: FC<HeaderMenuProps> = () => {
  const color = useThemeStore((state) => state.color);

  const menus = useMenu();

  const renderContent = () => {
    return menus.map((menu) => (
      <Col key={menu.id}>
        <NavLink id={menu.id} linkColor={color} rootClassName="menu-link">
          {menu.title}
        </NavLink>
      </Col>
    ));
  };

  return <Row rootClassName="header-menu">{renderContent()}</Row>;
};

export default HeaderMenu;
