import { FC, useState } from "react";
import { UI } from "@/components";
import HeaderLogo from "./HeaderLogo";
import HeaderMenu from "./HeaderMenu";
import HeaderMode from "./HeaderMode";
import HeaderTranslate from "./HeaderTranslate";
import HeaderTheme from "./HeaderTheme";
import HeaderAction from "./HeaderAction";
import HeaderMobile from "./HeaderMobile";
import useModeStore from "@/store/ModeStore";
import useSticky from "./useSticky";
import utils from "@/utils";

const { Grid } = UI;

const { Row, Col } = Grid;

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  const [open, setOpen] = useState<boolean>(false);

  const sticky = useSticky()

  const mode = useModeStore((state) => state.mode);

  const modeClassName = `header-${mode}`;

  const stickyClassName = sticky ? "header-fixed" : "";

  const mainClassName = utils.formatClassName("header", stickyClassName, modeClassName);

  const handleOpen = () => setOpen(!open);

  return (
    <header className={mainClassName}>
      <Row align="middle" justify="between">
        <Col md={8} span={4}>
          <HeaderLogo />
        </Col>
        <Col xs={0} md={0} span={12}>
          <HeaderMenu />
        </Col>
        <Col xs={8} md={8} span={4}>
          <HeaderMode />
        </Col>
        <Col xs={0} md={0} span={2}>
          <HeaderTranslate />
        </Col>
        <Col xs={0} md={2} span={2}>
          <HeaderTheme />
        </Col>
        <Col xs={4} md={4} lg={0} span={0}>
          <HeaderAction onClick={handleOpen} />
        </Col>
      </Row>

      <HeaderMobile open={open} onClose={handleOpen} />
    </header>
  );
};

export default Header;
