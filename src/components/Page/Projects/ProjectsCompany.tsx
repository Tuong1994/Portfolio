import { FC, Fragment } from "react";
import { UI } from "@/components";
import { Lang } from "@/common/lang";
import { InfoRowProps } from "@/components/UI/InfoRow";
import IconView from "../Common/IconView";
import SectionCard from "../Common/SectionCard";
import ContentCard from "../Common/ContentCard";

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

  const renderFeatures = () => {
    return features.map((feature) => (
      <Col key={feature.id} xs={24} md={12} lg={12} span={12}>
        <ContentCard rootClassName="features-card" head={<Paragraph weight={600}>{feature.title}</Paragraph>}>
          <Paragraph>{feature.description}</Paragraph>
        </ContentCard>
      </Col>
    ));
  };

  const head = (
    <Fragment>
      <Space align="middle">
        <Paragraph size={18} weight={600} rootClassName="group-name">
          {lang.projects.company.project}
        </Paragraph>
        <span>-</span>
        <Paragraph size={16}>CNV Loyalty</Paragraph>
      </Space>
    </Fragment>
  );

  return (
    <SectionCard head={head} hasBackground={false} rootClassName="projects-group">
      <InfoRow {...infoRowProps} label={lang.projects.description} text={lang.projects.company.description} />
      <InfoRow {...infoRowProps} label={lang.projects.tech} text={renderTechs()} />
      <Divider />
      <div className="group-features">
        <Paragraph align="center" weight={600} size={16} rootClassName="features-title">
          {lang.projects.company.features.title}
        </Paragraph>
        <Row>{renderFeatures()}</Row>
      </div>
    </SectionCard>
  );
};

export default ProjectsCompany;
