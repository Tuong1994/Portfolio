import { Fragment, FC } from "react";
import { UI } from "@/components";
import { Lang } from "@/common/lang";
import { InfoRow } from "@/components/UI";
import { InfoRowProps } from "@/components/UI/InfoRow";
import IconView from "../Common/IconView";
import { ThemeColor } from "@/store/ThemeStore";

const { Grid, Typography, UList, Image, Divider, Space, Button } = UI;

const { Row, Col } = Grid;

const { Paragraph } = Typography;

const { List, ListItem } = UList;

interface ProjectsPersonalProps {
  lang: Lang;
  color: ThemeColor;
}

const ProjectsPersonal: FC<ProjectsPersonalProps> = ({ lang, color }) => {
  const projects = [
    {
      id: "healthy-food-main",
      title: lang.projects.personal.healthyFood.main.title,
      description: lang.projects.personal.healthyFood.main.description,
      features: [
        lang.projects.personal.healthyFood.main.features_1,
        lang.projects.personal.healthyFood.main.features_2,
        lang.projects.personal.healthyFood.main.features_3,
        lang.projects.personal.healthyFood.main.features_4,
        lang.projects.personal.healthyFood.main.features_5,
        lang.projects.personal.healthyFood.main.features_6,
        lang.projects.personal.healthyFood.main.features_7,
      ],
      techs: ["html", "css", "sass", "js", "ts", "nextjs", "nestjs", "mysql"],
      imageUrl: "/projects/healthy-food-main.PNG",
      link: "https://healthy-food-main.vercel.app/",
    },
    {
      id: "healthy-food-admin",
      title: lang.projects.personal.healthyFood.admin.title,
      description: lang.projects.personal.healthyFood.admin.description,
      features: [
        lang.projects.personal.healthyFood.admin.features_1,
        lang.projects.personal.healthyFood.admin.features_2,
        lang.projects.personal.healthyFood.admin.features_3,
        lang.projects.personal.healthyFood.admin.features_4,
        lang.projects.personal.healthyFood.admin.features_5,
        lang.projects.personal.healthyFood.admin.features_6,
        lang.projects.personal.healthyFood.admin.features_7,
        lang.projects.personal.healthyFood.admin.features_8,
        lang.projects.personal.healthyFood.admin.features_9,
        lang.projects.personal.healthyFood.admin.features_10,
      ],
      techs: ["html", "css", "sass", "js", "ts", "react", "nestjs", "mysql"],
      imageUrl: "/projects/healthy-food-admin.PNG",
      link: "https://healthy-food-admin.vercel.app/",
    },
  ];

  const infoRowProps: InfoRowProps = {
    labelProps: { size: 16 },
    textProps: { size: 16 },
    labelSpanProps: { span: 3 },
    textSpanProps: { xs: 24, md: 20, lg: 20, span: 20 },
  };

  const renderTechs = (techs: string[]) => {
    return (
      <Space>
        {techs.map((tech) => (
          <IconView key={tech} src={`/dev/${tech}.svg`} hasHover={false} iconWidth={30} iconHeight={30} />
        ))}
      </Space>
    );
  };

  const renderContent = () => {
    return projects.map((project) => (
      <div className="project-card" key={project.id}>
        <Paragraph weight={600} size={18} rootClassName="card-title">
          {project.title}
        </Paragraph>
        <Divider />
        <InfoRow {...infoRowProps} label={lang.projects.description} text={project.description} />
        <InfoRow {...infoRowProps} label={lang.projects.tech} text={renderTechs(project.techs)} />
        <Divider />
        <Row justify="between">
          <Col xs={24} md={24} lg={12} span={12}>
            <List head={lang.projects.personal.features}>
              {project.features.map((feature) => (
                <ListItem key={feature}>
                  <Paragraph>{feature}</Paragraph>
                </ListItem>
              ))}
            </List>
          </Col>
          <Col xs={24} md={24} lg={12} span={12}>
            <div className="card-image">
              <Image imgWidth="100%" src={project.imageUrl} />
              <Space rootClassName="image-action">
                <a href={project.link} target="_blank">
                  <Button color={color}>{lang.projects.personal.demo}</Button>
                </a>
              </Space>
            </div>
          </Col>
        </Row>
      </div>
    ));
  };

  return <Fragment>{renderContent()}</Fragment>;
};

export default ProjectsPersonal;
