import { FC, useRef } from "react";
import { UI } from "@/components";
import { linkId } from "@/common/constant";
import ContentHead from "../Common/ContentHead";
import AboutContent from "./AboutContent";
import AboutPersonal from "./AboutPersonal";
import AboutEducation from "./AboutEducation";
import AboutSkills from "./AboutSkills";
import useLang from "@/hooks/useLang";
import useThemeStore from "@/store/ThemeStore";
import useReveal from "@/hooks/useReveal";
import utils from "@/utils";

const { ABOUT } = linkId;

const { Navigating, Grid } = UI;

const { NavigateContent } = Navigating;

const { Row, Col } = Grid;

interface AboutProps {}

const About: FC<AboutProps> = () => {
  const { lang } = useLang();

  const color = useThemeStore((state) => state.color);

  const aboutRef = useRef<HTMLDivElement>(null);

  const reveal = useReveal(aboutRef);

  const colorClassName = `about-${color}`;

  const revealClassName = reveal ? "about-reveal" : "";

  const mainClassName = utils.formatClassName("about", colorClassName, revealClassName);

  return (
    <NavigateContent ref={aboutRef} id={ABOUT} rootClassName={mainClassName}>
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
