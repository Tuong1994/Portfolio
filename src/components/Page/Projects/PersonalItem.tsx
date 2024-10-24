import { FC } from "react";
import { Divider, InfoRow, Image, Space, Button, Grid, Typography, UList } from "@/components/UI";
import { InfoRowProps } from "@/components/UI/InfoRow";
import { Project } from "./type";
import { Lang } from "@/common/lang";
import { ThemeColor } from "@/store/ThemeStore";
import SectionCard from "../Common/SectionCard";
import IconView from "../Common/IconView";
import utils from "@/utils";

const { Row, Col } = Grid;

const { Paragraph } = Typography;

const { List, ListItem } = UList;

interface PersonalItemProps {
  lang: Lang;
  color: ThemeColor;
  project: Project;
  idx: number;
}

const PersonalItem: FC<PersonalItemProps> = ({ lang, color, project, idx }) => {
  const infoRowProps: InfoRowProps = {
    labelProps: { size: 16 },
    textProps: { size: 16 },
    labelSpanProps: { span: 3 },
    textSpanProps: { xs: 24, md: 20, lg: 20, span: 20 },
  };
  
 const mainClassName = utils.formatClassName("projects-card", `projects-card-${idx + 1}`);

  const renderTechs = (techs: string[]) => {
    return (
      <Space>
        {techs.map((tech) => (
          <IconView
            key={tech}
            src={`/dev/${tech}.svg`}
            hasHover={false}
            iconWidth={25}
            iconHeight={25}
            borderWidth={5}
          />
        ))}
      </Space>
    );
  };

  return (
    <div className={mainClassName}>
      <SectionCard
        hasBorder={false}
        head={
          <Paragraph weight={600} size={18} rootClassName="card-title">
            {project.title}
          </Paragraph>
        }
      >
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
              <div className="image-wrapper">
                <Image imgWidth="100%" src={project.imageUrl} />
              </div>
              <Space rootClassName="image-action">
                <a href={project.link} target="_blank">
                  <Button color={color}>{lang.projects.personal.demo}</Button>
                </a>
              </Space>
            </div>
          </Col>
        </Row>
      </SectionCard>
    </div>
  );
};

export default PersonalItem;
