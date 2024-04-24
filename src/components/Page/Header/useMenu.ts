import useLang from "@/hooks/useLang";
import { linkId } from "@/common/constant";

const { ABOUT, SKILLS, EXPERIENCES, PROJECTS, CONTACT } = linkId;

const useMenu = () => {
  const { lang } = useLang();

  const menus = [
    { id: ABOUT, title: lang.header.menu.about },
    { id: SKILLS, title: lang.header.menu.skills },
    { id: EXPERIENCES, title: lang.header.menu.experiences },
    { id: PROJECTS, title: lang.header.menu.projects },
    { id: CONTACT, title: lang.header.menu.contact },
  ];

  return menus;
};

export default useMenu;
