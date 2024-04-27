import { FC } from "react";
import { UI } from "@/components";
import { linkId } from "@/common/constant";
import ContentHead from "../Common/ContentHead";
import AboutContent from "./AboutContent";
import AboutPersonal from "./AboutPersonal";
import AboutEducation from "./AboutEducation";
import useModeStore from "@/store/ModeStore";
import useLang from "@/hooks/useLang";
import useThemeStore from "@/store/ThemeStore";
import utils from "@/utils";
import AboutSkills from "./AboutSkills";

const { ABOUT } = linkId;

const { Navigating, Grid } = UI;

const { NavigateContent } = Navigating;

const { Row, Col } = Grid;

interface AboutProps {}

const About: FC<AboutProps> = () => {
  const { lang } = useLang();

  const color = useThemeStore((state) => state.color);

  const mode = useModeStore((state) => state.mode);

  const modeClassName = `about-${mode}`;

  const colorClassName = `about-${color}`;

  const mainClassName = utils.formatClassName("about", colorClassName, modeClassName);

  return (
    <NavigateContent id={ABOUT} rootClassName={mainClassName}>
      <ContentHead>{lang.header.menu.about}</ContentHead>
      <AboutContent lang={lang} />
      <Row justify="between" rootClassName="about-group">
        <Col xs={24} md={24} lg={12} span={12}>
          <AboutPersonal lang={lang} color={color} />
        </Col>
        <Col xs={24} md={24} lg={12} span={12}>
          <AboutEducation lang={lang} />
        </Col>
      </Row>
      <AboutSkills lang={lang} />
    </NavigateContent>
  );
};

export default About;
