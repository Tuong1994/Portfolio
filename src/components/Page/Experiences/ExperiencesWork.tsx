import { FC } from "react";
import { Lang } from "@/common/lang";
import { UI } from "@/components";
import { BsDot } from "react-icons/bs";

const { Typography, UList, Space, Divider } = UI;

const { Paragraph } = Typography;

const { List, ListItem } = UList;

interface ExperiencesWorkProps {
  lang: Lang;
}

const ExperiencesWork: FC<ExperiencesWorkProps> = ({ lang }) => {
  return (
    <div className="experiences-work">
      <Paragraph weight={600} size={16}>
        Fresher ReactJs Developer
      </Paragraph>
      <Space align="middle">
        <Paragraph weight={600} size={18} rootClassName="work-company">
          CNV Loyalty
        </Paragraph>
        <span>|</span>
        <Paragraph weight={600} size={16}>
          10/2021 - 03/2023
        </Paragraph>
      </Space>
      <Divider />
      <List>
        <ListItem>
          <Paragraph size={16}>{lang.experiences.firstCompany.content_1}</Paragraph>
        </ListItem>
        <ListItem>
          <Paragraph size={16}>{lang.experiences.firstCompany.content_2}</Paragraph>
        </ListItem>
        <ListItem>
          <Paragraph size={16}>{lang.experiences.firstCompany.content_3}</Paragraph>
        </ListItem>
      </List>
      <div className="work-project">
        <Paragraph weight={600} size={16} rootClassName="project-title">
          {lang.experiences.firstCompany.project.title}
        </Paragraph>
        <List icon={<BsDot size={20} />}>
          <ListItem>
            <Paragraph>{lang.experiences.firstCompany.project.name_1}</Paragraph>
          </ListItem>
          <ListItem>
            <Paragraph>{lang.experiences.firstCompany.project.name_2}</Paragraph>
          </ListItem>
          <ListItem>
            <Paragraph>{lang.experiences.firstCompany.project.name_3}</Paragraph>
          </ListItem>
          <ListItem>
            <Paragraph>{lang.experiences.firstCompany.project.name_4}</Paragraph>
          </ListItem>
          <ListItem>
            <Paragraph>{lang.experiences.firstCompany.project.name_5}</Paragraph>
          </ListItem>
        </List>
      </div>
    </div>
  );
};

export default ExperiencesWork;
