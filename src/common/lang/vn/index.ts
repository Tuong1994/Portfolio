import about_vn from "./about";
import experiences_vn from "./experiences";
import header_vn from "./header";
import intro_vn from "./intro";
import projects_vn from "./projects";

const vn = {
  header: header_vn,
  intro: intro_vn,
  about: about_vn,
  experiences: experiences_vn,
  projects: projects_vn,
};

export type VN = typeof vn;

export default vn;
