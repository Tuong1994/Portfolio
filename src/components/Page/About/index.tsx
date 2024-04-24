import { FC } from "react";
import { UI } from "@/components";
import { linkId } from "@/common/constant";
import utils from "@/utils";
import ContentHead from "../Common/ContentHead";
import useModeStore from "@/store/ModeStore";

const { ABOUT } = linkId;

const { Navigating } = UI;

const { NavigateContent } = Navigating;

interface AboutProps {}

const About: FC<AboutProps> = () => {
  const mode = useModeStore((state) => state.mode);

  const modeClassName = `about-${mode}`;

  const mainClassName = utils.formatClassName("section-content", "about", modeClassName);

  return (
    <NavigateContent id={ABOUT} rootClassName={mainClassName}>
      <ContentHead>About</ContentHead>
    </NavigateContent>
  );
};

export default About;
