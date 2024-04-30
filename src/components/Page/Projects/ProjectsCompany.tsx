import { FC } from "react";
import { UI } from "@/components";
import { Lang } from "@/common/lang";
import { InfoRowProps } from "@/components/UI/InfoRow";
import IconView from "../Common/IconView";

const { Typography, Grid, Divider, InfoRow, Space } = UI;

const { Row, Col } = Grid;

const { Paragraph } = Typography;

interface ProjectsCompanyProps {
  lang: Lang;
}

const ProjectsCompany: FC<ProjectsCompanyProps> = ({ lang }) => {
  const techs = ["html", "css", "js", "ts", "react", "c-sharp", "net-core"];

  const features = [
    {
      id: "automation",
      title: lang.projects.company.features.automation.title,
      description: lang.projects.company.features.automation.description,
    },
    {
      id: "printed",
      title: lang.projects.company.features.printed.title,
      description: lang.projects.company.features.printed.description,
    },
    {
      id: "album",
      title: lang.projects.company.features.album.title,
      description: lang.projects.company.features.album.description,
    },
    {
      id: "wholesale",
      title: lang.projects.company.features.wholesale.title,
      description: lang.projects.company.features.wholesale.description,
    },
    {
      id: "xGetY",
      title: lang.projects.company.features.xGetY.title,
      description: lang.projects.company.features.xGetY.description,
    },
  ];

  const infoRowProps: InfoRowProps = {
    labelProps: { size: 16 },
    textProps: { size: 16 },
    labelSpanProps: { span: 3 },
    textSpanProps: { xs: 24, md: 20, lg: 20, span: 20 },
  };

  const renderTechs = () => {
    return (
      <Space>
        {techs.map((tech) => (
          <IconView key={tech} src={`/dev/${tech}.svg`} hasHover={false} iconWidth={30} iconHeight={30} />
        ))}
      </Space>
    );
  };

  const renderFeatures = () => {
    return features.map((feature) => (
      <Col key={feature.id} xs={24} md={12} lg={12} span={8}>
        <div className="group-card">
          <Paragraph weight={600}>{feature.title}</Paragraph>
          <Paragraph>{feature.description}</Paragraph>
        </div>
      </Col>
    ));
  };

  return (
    <div className="projects-group">
      <Space align="middle">
        <Paragraph size={18} weight={600} rootClassName="group-name">
          {lang.projects.company.project}
        </Paragraph>
        <span>-</span>
        <Paragraph size={16}>CNV Loyalty</Paragraph>
      </Space>
      <Divider />
      <InfoRow {...infoRowProps} label={lang.projects.description} text={lang.projects.company.description} />
      <InfoRow {...infoRowProps} label={lang.projects.tech} text={renderTechs()} />
      <Divider />
      <Paragraph align="center" weight={600} size={16} rootClassName="group-features-title">
        {lang.projects.company.features.title}
      </Paragraph>
      <Row>{renderFeatures()}</Row>
    </div>
  );
};

export default ProjectsCompany;
