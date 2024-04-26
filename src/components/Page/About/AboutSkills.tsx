import { FC, Fragment } from "react";
import { UI } from "@/components";
import { Lang } from "@/common/lang";

const { Image, Grid, Typography } = UI;

const { Row, Col } = Grid;

const { Title } = Typography;

interface AboutSkillsProps {
  lang: Lang;
}

const AboutSkills: FC<AboutSkillsProps> = ({ lang }) => {
  const logos = ["html", "css", "sass", "js", "ts", "react", "redux", "vue", "nodejs", "nestjs", "mysql"];

  return (
    <Fragment>
      <Title level={4}>{lang.about.skills.title}</Title>
      <Row justify="between">
        {logos.map((logo) => (
          <Col xs={8} key={logo}>
            <Image imgWidth={80} imgHeight={80} src={`/dev/${logo}.svg`} />
          </Col>
        ))}
      </Row>
    </Fragment>
  );
};

export default AboutSkills;
