import { FC } from "react";
import { UI } from "@/components";
import { linkId } from "@/common/constant";
import ContentHead from "../Common/ContentHead";
import useLang from "@/hooks/useLang";
import ExperiencesWork from "./ExperiencesWork";
import useThemeStore from "@/store/ThemeStore";
import utils from "@/utils";

const { EXPERIENCES } = linkId;

const { Navigating } = UI;

const { NavigateContent } = Navigating;

interface ExperiencesProps {}

const Experiences: FC<ExperiencesProps> = () => {
  const { lang } = useLang();

  const color = useThemeStore((state) => state.color);

  const colorClassName = `experiences-${color}`;

  const mainClassName = utils.formatClassName("section-content", "experiences", colorClassName);

  return (
    <NavigateContent id={EXPERIENCES} rootClassName={mainClassName}>
      <ContentHead>{lang.header.menu.experiences}</ContentHead>
      <ExperiencesWork lang={lang} />
    </NavigateContent>
  );
};

export default Experiences;
