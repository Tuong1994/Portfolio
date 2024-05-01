import { FC } from "react";
import { UI } from "@/components";
import IntroContent from "./IntroContent";
import IntroImage from "./IntroImage";
import useThemeStore from "@/store/ThemeStore";
import useLayout from "@/components/UI/Layout/useLayout";
import utils from "@/utils";

const { Grid, Navigating } = UI;

const { Row, Col } = Grid;

const { NavigateContent } = Navigating;

interface IntroProps {}

const Intro: FC<IntroProps> = () => {
  const { layoutValue } = useLayout();

  const color = useThemeStore((state) => state.color);

  const modeClassName = `intro-${layoutValue.layoutTheme}`;

  const colorClassName = `intro-${color}`;

  const mainClassName = utils.formatClassName("section-content", "intro", colorClassName, modeClassName);

  return (
    <NavigateContent rootClassName={mainClassName}>
      <Row align="middle" justify="between">
        <Col xs={24} md={24} lg={12} span={10}>
          <IntroImage />
        </Col>
        <Col xs={24} md={24} lg={12} span={14}>
          <IntroContent color={color} />
          <div className="info-arrow">
            <div className="arrow-chevron"></div>
            <div className="arrow-chevron"></div>
            <div className="arrow-chevron"></div>
          </div>
        </Col>
      </Row>
    </NavigateContent>
  );
};

export default Intro;
