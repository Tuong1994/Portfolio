import { FC } from "react";
import { UI } from "@/components";
import { linkId } from "@/common/constant";
import ContentHead from "../Common/ContentHead";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";
import useLang from "@/hooks/useLang";
import useThemeStore from "@/store/ThemeStore";
import utils from "@/utils";

const { CONTACT } = linkId;

const { Navigating, Grid } = UI;

const { NavigateContent } = Navigating;

const { Row, Col } = Grid;

interface ContactProps {}

const Contact: FC<ContactProps> = () => {
  const { lang } = useLang();

  const color = useThemeStore((state) => state.color);

  const colorClassName = `contact-${color}`;

  const mainClassName = utils.formatClassName("contact", colorClassName);

  return (
    <NavigateContent id={CONTACT} rootClassName={mainClassName}>
      <ContentHead>{lang.header.menu.contact}</ContentHead>
      <Row justify="center">
        <Col xs={24} md={12} lg={12} span={10}>
          <ContactInfo lang={lang} />
        </Col>
        <Col xs={24} md={12} lg={12} span={10}>
          <ContactForm lang={lang} color={color} />
        </Col>
      </Row>
    </NavigateContent>
  );
};

export default Contact;
