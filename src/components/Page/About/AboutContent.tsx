import { FC, Fragment } from "react";
import { UI } from "@/components";
import { Lang } from "@/common/lang";

const { Divider, Typography } = UI;

const { Paragraph } = Typography;

interface AboutContentProps {
  lang: Lang;
}

const AboutContent: FC<AboutContentProps> = ({ lang }) => {
  return (
    <Fragment>
      <Paragraph size={18} rootClassName="about-content">{lang.about.content}</Paragraph>
      <Divider />
    </Fragment>
  );
};

export default AboutContent;
