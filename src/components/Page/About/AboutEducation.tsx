import { FC, Fragment } from "react";
import { UI } from "@/components";
import { Lang } from "@/common/lang";

const { Typography, UList, Space, Image, Divider } = UI;

const { Title, Paragraph } = Typography;

const { List, ListItem } = UList;

interface AboutEducationProps {
  lang: Lang;
}

const AboutEducation: FC<AboutEducationProps> = ({ lang }) => {
  return (
    <Fragment>
      <Title level={3}>{lang.about.education.title}</Title>
      <div className="about-education">
        <Space align="middle">
          <Image imgWidth={50} imgHeight={50} src="/cybersoft.jpg" />
          <Paragraph weight={600} size={18}>
            CYBERSOFT ACADEMY
          </Paragraph>
        </Space>
        <Divider />
        <List>
          <ListItem>
            <Space>
              <Paragraph size={16}>Bootcamp Front End Web Developer</Paragraph>
              <Paragraph size={16}>(09/2020 - 04/2021)</Paragraph>
            </Space>
          </ListItem>
          <ListItem>
            <Space>
              <Paragraph size={16}>Back End Developer - NodeJS</Paragraph>
              <Paragraph size={16}>(06/2021 - 08/2021)</Paragraph>
            </Space>
          </ListItem>
        </List>
      </div>
    </Fragment>
  );
};

export default AboutEducation;
