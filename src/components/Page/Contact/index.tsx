import { FC, useRef } from "react";
import { UI } from "@/components";
import { linkId } from "@/common/constant";
import ContentHead from "../Common/ContentHead";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";
import useLang from "@/hooks/useLang";
import useThemeStore from "@/store/ThemeStore";
import useReveal from "@/hooks/useReveal";
import utils from "@/utils";

const { CONTACT } = linkId;

const { Navigating, Grid } = UI;

const { NavigateContent } = Navigating;

const { Row, Col } = Grid;

interface ContactProps {}

const Contact: FC<ContactProps> = () => {
  const { lang } = useLang();

  const contactRef = useRef<HTMLDivElement>(null);

  const reveal = useReveal(contactRef);

  const color = useThemeStore((state) => state.color);

  const colorClassName = `contact-${color}`;

  const revealClassName = reveal ? "contact-reveal" : "";

  const mainClassName = utils.formatClassName("contact", colorClassName, revealClassName);

  return (
    <NavigateContent ref={contactRef} id={CONTACT} rootClassName={mainClassName}>
      <ContentHead>{lang.header.menu.contact}</ContentHead>
      <Row justify="center" rootClassName="contact-content">
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
