import { FC, useRef } from "react";
import { UI } from "@/components";
import { linkId } from "@/common/constant";
import ContentHead from "../Common/ContentHead";
import ExperiencesWork from "./ExperiencesWork";
import useThemeStore from "@/store/ThemeStore";
import useReveal from "@/hooks/useReveal";
import useLang from "@/hooks/useLang";
import utils from "@/utils";

const { EXPERIENCES } = linkId;

const { Navigating } = UI;

const { NavigateContent } = Navigating;

interface ExperiencesProps {}

const Experiences: FC<ExperiencesProps> = () => {
  const { lang } = useLang();

  const experiencesRef = useRef<HTMLDivElement>(null);

  const reveal = useReveal(experiencesRef);

  const color = useThemeStore((state) => state.color);

  const colorClassName = `experiences-${color}`;

  const revealClassName = reveal ? "experiences-reveal" : "";

  const mainClassName = utils.formatClassName(
    "section-content",
    "experiences",
    colorClassName,
    revealClassName
  );

  return (
    <NavigateContent ref={experiencesRef} id={EXPERIENCES} rootClassName={mainClassName}>
      <ContentHead>{lang.header.menu.experiences}</ContentHead>
      <ExperiencesWork lang={lang} />
    </NavigateContent>
  );
};

export default Experiences;
