import { FC, Fragment } from "react";
import { Carousel } from "@/components/UI";
import { Lang } from "@/common/lang";
import { ThemeColor } from "@/store/ThemeStore";
import { Projects } from "./type";
import { CarouselItems } from "@/components/UI/Carousel/type";
import { useViewpoint } from "@/hooks";
import { breakpoint } from "@/hooks/useViewpoint";
import PersonalItem from "./PersonalItem";
import PersonalItemMobile from "./PersonalItemMobile";
import useLayoutStore from "@/components/UI/Layout/LayoutStore";

const { Horizontal } = Carousel;

interface ProjectsPersonalProps {
  lang: Lang;
  color: ThemeColor;
}

const ProjectsPersonal: FC<ProjectsPersonalProps> = ({ lang, color }) => {
  const { screenWidth } = useViewpoint();

  const { LG_TABLET } = breakpoint;

  const mode = useLayoutStore((state) => state.layoutTheme);

  const carouselMode = mode === "dark" ? "light" : "dark";

  const responsive = screenWidth <= LG_TABLET;

  const projects: Projects = [
    {
      id: "healthy-food-main",
      title: lang.projects.personal.healthyFood.main.title,
      description: lang.projects.personal.healthyFood.main.description,
      features: [
        lang.projects.personal.healthyFood.main.features_1,
        lang.projects.personal.healthyFood.main.features_2,
        lang.projects.personal.healthyFood.main.features_3,
        lang.projects.personal.healthyFood.main.features_4,
        lang.projects.personal.healthyFood.main.features_5,
        lang.projects.personal.healthyFood.main.features_6,
        lang.projects.personal.healthyFood.main.features_7,
      ],
      techs: ["html", "css", "sass", "js", "ts", "nextjs", "nestjs", "mysql"],
      imageUrl: "/projects/healthy-food-main.PNG",
      link: "https://healthy-food-main.vercel.app/",
    },
    {
      id: "healthy-food-admin",
      title: lang.projects.personal.healthyFood.admin.title,
      description: lang.projects.personal.healthyFood.admin.description,
      features: [
        lang.projects.personal.healthyFood.admin.features_1,
        lang.projects.personal.healthyFood.admin.features_2,
        lang.projects.personal.healthyFood.admin.features_3,
        lang.projects.personal.healthyFood.admin.features_4,
        lang.projects.personal.healthyFood.admin.features_5,
        lang.projects.personal.healthyFood.admin.features_6,
        lang.projects.personal.healthyFood.admin.features_7,
        lang.projects.personal.healthyFood.admin.features_8,
        lang.projects.personal.healthyFood.admin.features_9,
        lang.projects.personal.healthyFood.admin.features_10,
      ],
      techs: ["html", "css", "sass", "js", "ts", "react", "nestjs", "mysql"],
      imageUrl: "/projects/healthy-food-admin.PNG",
      link: "https://healthy-food-admin.vercel.app/",
    },
  ];

  const carouselItem: CarouselItems = projects.map((project, idx) => ({
    id: project.id,
    content: <PersonalItem lang={lang} color={color} project={project} idx={idx} />,
  }));

  const renderContent = () => {
    if (responsive)
      return projects.map((project) => (
        <PersonalItemMobile key={project.id} lang={lang} color={color} project={project} />
      ));
    return (
      <Horizontal
        rootClassName="projects-carousel"
        hasArrow={false}
        mode={carouselMode}
        items={carouselItem}
      />
    );
  };

  return <Fragment>{renderContent()}</Fragment>;
};

export default ProjectsPersonal;
