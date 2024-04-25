import { FC, Fragment } from "react";
import { Lang } from "@/common/lang";
import { UI } from "@/components";
import { InfoRowProps } from "@/components/UI/InfoRow";
import { ThemeColor } from "@/store/ThemeStore";

const { InfoRow, Button } = UI;

interface AboutPersonalProps {
  lang: Lang;
  color: ThemeColor;
}

const AboutPersonal: FC<AboutPersonalProps> = ({ lang, color }) => {
  const infoRowProps: InfoRowProps = { labelSpanProps: { span: 6 }, textSpanProps: { span: 14 } };
  return (
    <Fragment>
      <InfoRow {...infoRowProps} label={lang.about.personal.email} text="nbtuong1994@gmail.com" />
      <InfoRow {...infoRowProps} label={lang.about.personal.phone} text="(+84) 079 322 9970" />
      <InfoRow {...infoRowProps} label={lang.about.personal.birthday} text="28/11/1944" />
      <InfoRow {...infoRowProps} label={lang.about.personal.city} text={lang.about.personal.hcm} />
      <a className="about-download" href="/cv.pdf" download="CV - Nhâm Bổn Tường">
        <Button sizes="lg" color={color}>
          {lang.intro.download}
        </Button>
      </a>
    </Fragment>
  );
};

export default AboutPersonal;
