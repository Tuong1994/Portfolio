import { FC, useRef, useState } from "react";
import { UI } from "@/components";
import { linkId } from "@/common/constant";
import ContentHead from "../Common/ContentHead";
import ProjectsCompany from "./ProjectsCompany";
import useLang from "@/hooks/useLang";
import useThemeStore from "@/store/ThemeStore";
import utils from "@/utils";
import ProjectsPersonal from "./ProjectsPersonal";
import useReveal from "@/hooks/useReveal";

const { PROJECTS } = linkId;

const { Navigating } = UI;

const { NavigateContent } = Navigating;

interface ProjectsProps {}

const Projects: FC<ProjectsProps> = () => {
  const { lang } = useLang();

  const color = useThemeStore((state) => state.color);

  const projectsRef = useRef<HTMLDivElement>(null);

  const reveal = useReveal(projectsRef);

  const [selectedTab, setSelectedTab] = useState<string>("company");

  const colorClassName = `projects-${color}`;

  const revealClassName = reveal ? "projects-reveal" : "";

  const mainClassName = utils.formatClassName("section-content", "projects", colorClassName, revealClassName);

  const tabs = [
    { id: "company", title: lang.projects.company.title, content: <ProjectsCompany lang={lang} /> },
    {
      id: "personal",
      title: lang.projects.personal.title,
      content: <ProjectsPersonal lang={lang} color={color} />,
    },
  ];

  const handleSelectTab = (id: string) => setSelectedTab(id);

  const renderTitle = () => {
    return tabs.map((tab) => {
      const activeClassName = selectedTab === tab.id ? "head-title-selected" : "";
      const headClassName = utils.formatClassName("head-title", activeClassName);
      return (
        <div key={tab.id} className={headClassName} onClick={() => handleSelectTab(tab.id)}>
          {tab.title}
        </div>
      );
    });
  };

  const renderContent = () => {
    return tabs.map((tab) => {
      const selected = selectedTab === tab.id;
      const activeClassName = selected ? "content-item-selected" : "";
      const contentClassName = utils.formatClassName("content-item", activeClassName);
      if (!selected) return null;
      return (
        <div key={tab.id} className={contentClassName}>
          {tab.content}
        </div>
      );
    });
  };

  return (
    <NavigateContent ref={projectsRef} id={PROJECTS} rootClassName={mainClassName}>
      <ContentHead>{lang.header.menu.projects}</ContentHead>
      <div className="projects-tabs">
        <div className="tabs-head">{renderTitle()}</div>
        <div className="tabs-content">{renderContent()}</div>
      </div>
    </NavigateContent>
  );
};

export default Projects;
