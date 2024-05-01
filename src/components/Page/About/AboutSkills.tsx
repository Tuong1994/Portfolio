import { FC, Fragment } from "react";
import { UI } from "@/components";
import { Lang } from "@/common/lang";
import IconView from "../Common/IconView";

const { Divider, Grid, Typography } = UI;

const { Row, Col } = Grid;

const { Title, } = Typography;

interface AboutSkillsProps {
  lang: Lang;
}

const AboutSkills: FC<AboutSkillsProps> = ({ lang }) => {
  const logos = [
    {
      img: "html",
      name: "HTML",
    },
    {
      img: "css",
      name: "CSS",
    },
    {
      img: "sass",
      name: "Sass",
    },
    {
      img: "js",
      name: "Javascript",
    },
    {
      img: "ts",
      name: "Typescript",
    },
    {
      img: "react",
      name: "ReactJs",
    },
    {
      img: "redux",
      name: "Redux",
    },
    {
      img: "vue",
      name: "VueJs",
    },
    {
      img: "nextjs",
      name: "NextJs",
    },
    {
      img: "nodejs",
      name: "NodeJs",
    },
    {
      img: "nestjs",
      name: "NestJs",
    },
    {
      img: "mysql",
      name: "MySQL",
    },
  ];

  return (
    <Fragment>
      <Title level={3} align="center">
        {lang.about.skills.title}
      </Title>
      <Divider />
      <Row justify="center">
        {logos.map((logo) => (
          <Col xs={12} span={4} key={logo.img}>
            <IconView src={`/dev/${logo.img}.svg`} iconName={logo.name} />
          </Col>
        ))}
      </Row>
    </Fragment>
  );
};

export default AboutSkills;
