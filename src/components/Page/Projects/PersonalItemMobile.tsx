import { FC } from "react";
import { Divider, InfoRow, Image, Space, Button, Typography, Accordion, UList } from "@/components/UI";
import { InfoRowProps } from "@/components/UI/InfoRow";
import { Project } from "./type";
import { Lang } from "@/common/lang";
import { ThemeColor } from "@/store/ThemeStore";
import SectionCard from "../Common/SectionCard";
import IconView from "../Common/IconView";

const { Paragraph } = Typography;

const { List, ListItem } = UList;

interface PersonalItemMobileProps {
  lang: Lang;
  color: ThemeColor;
  project: Project;
}

const PersonalItemMobile: FC<PersonalItemMobileProps> = ({ lang, color, project }) => {
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
    <div className="projects-item-mobile">
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

        <Accordion label={lang.projects.personal.features}>
          <List>
            {project.features.map((feature) => (
              <ListItem key={feature}>
                <Paragraph>{feature}</Paragraph>
              </ListItem>
            ))}
          </List>
        </Accordion>
      </SectionCard>
    </div>
  );
};

export default PersonalItemMobile;
