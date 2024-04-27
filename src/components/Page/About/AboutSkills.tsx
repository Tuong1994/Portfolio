import { FC, Fragment } from "react";
import { UI } from "@/components";
import { Lang } from "@/common/lang";

const { Image, Divider, Grid, Typography } = UI;

const { Row, Col } = Grid;

const { Title, Paragraph } = Typography;

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
          <Col xs={8} span={4} key={logo.img}>
            <Row justify="center">
              <Col>
                <div className="about-icon">
                  <div className="icon-view">
                    <Image imgWidth={50} imgHeight={50} src={`/dev/${logo.img}.svg`} />
                  </div>
                  <Paragraph align="center" weight={600}>
                    {logo.name}
                  </Paragraph>
                </div>
              </Col>
            </Row>
          </Col>
        ))}
      </Row>
    </Fragment>
  );
};

export default AboutSkills;
