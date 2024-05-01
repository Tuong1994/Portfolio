import { FC, Fragment } from "react";
import { Lang } from "@/common/lang";
import { UI } from "@/components";
import { InfoRowProps } from "@/components/UI/InfoRow";
import { ThemeColor } from "@/store/ThemeStore";
import { HiBuildingOffice, HiCalendar, HiEnvelope, HiPhone } from "react-icons/hi2";

const { InfoRow, Button } = UI;

interface AboutPersonalProps {
  lang: Lang;
  color: ThemeColor;
}

const AboutPersonal: FC<AboutPersonalProps> = ({ lang, color }) => {
  const infoRowProps: InfoRowProps = {
    hasColon: false,
    textProps: { strong: false, size: 16 },
    labelSpanProps: { span: 2 },
    textSpanProps: { span: 14 },
  };
  return (
    <Fragment>
      <InfoRow {...infoRowProps} label={<HiEnvelope size={16} />} text="nbtuong1994@gmail.com" />
      <InfoRow {...infoRowProps} label={<HiPhone size={16} />} text="(+84) 079 322 9970" />
      <InfoRow {...infoRowProps} label={<HiCalendar size={16} />} text="28/11/1944" />
      <InfoRow {...infoRowProps} label={<HiBuildingOffice size={16} />} text={lang.about.personal.hcm} />
      <a className="about-download" href="/cv.pdf" download="CV - Nhâm Bổn Tường">
        <Button sizes="lg" color={color}>
          {lang.intro.download}
        </Button>
      </a>
    </Fragment>
  );
};

export default AboutPersonal;
