import about_vn from "./about";
import header_vn from "./header";
import intro_vn from "./intro";

const vn = {
  header: header_vn,
  intro: intro_vn,
  about: about_vn,
};

export type VN = typeof vn;

export default vn;
