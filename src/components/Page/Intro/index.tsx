import { FC } from "react";
import { UI } from "@/components";
import useThemeStore from "@/store/ThemeStore";
import IntroContent from "./IntroContent";
import IntroImage from "./IntroImage";
import useModeStore from "@/store/ModeStore";
import utils from "@/utils";

const { Grid, Navigating } = UI;

const { Row, Col } = Grid;

const { NavigateContent } = Navigating;

interface IntroProps {}

const Intro: FC<IntroProps> = () => {
  const color = useThemeStore((state) => state.color);

  const mode = useModeStore((state) => state.mode);

  const modeClassName = `intro-${mode}`;

  const colorClassName = `intro-${color}`;

  const mainClassName = utils.formatClassName("section-content", "intro", colorClassName, modeClassName);

  return (
    <NavigateContent rootClassName={mainClassName}>
      <Row align="middle" justify="between">
        <Col xs={24} md={24} lg={12} span={14}>
          <IntroContent color={color} />
        </Col>
        <Col xs={0} md={0} lg={12} span={10}>
          <IntroImage />
        </Col>
      </Row>
    </NavigateContent>
  );
};

export default Intro;
