import { FC } from "react";
import { UI } from "@/components";
import { Lang } from "@/common/lang";
import { HiEnvelope, HiPhone } from "react-icons/hi2";
import { InfoRowProps } from "@/components/UI/InfoRow";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const { Typography, InfoRow, Divider, Card, Space } = UI;

const { Paragraph } = Typography;

interface ContactInfoProps {
  lang: Lang;
}

const ContactInfo: FC<ContactInfoProps> = ({ lang }) => {
  const infoRowProps: InfoRowProps = {
    hasColon: false,
    labelProps: { size: 16 },
    textProps: { size: 16, strong: false },
    labelSpanProps: { span: 2 },
  };

  return (
    <div className="contact-info">
      <Paragraph size={25} align="center">
        {lang.contact.subTitle} !!
      </Paragraph>
      <Divider />
      <Card hoverable rootClassName="info-card">
        <InfoRow {...infoRowProps} label={<HiPhone size={18} />} text="(+84) 079 322 9970" />
      </Card>
      <Card hoverable rootClassName="info-card">
        <InfoRow {...infoRowProps} label={<HiEnvelope size={18} />} text="nbtuong1994@gmail.com" />
      </Card>
      <Space justify="center">
        <a
          href="https://www.facebook.com/profile.php?id=61556964666962"
          target="_blank"
          className="info-icon"
        >
          <FaFacebook size={30} />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=61556964666962"
          target="_blank"
          className="info-icon"
        >
          <FaInstagram size={30} />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=61556964666962"
          target="_blank"
          className="info-icon"
        >
          <FaTwitter size={30} />
        </a>
      </Space>
    </div>
  );
};

export default ContactInfo;
