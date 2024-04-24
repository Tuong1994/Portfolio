import { ForwardRefRenderFunction, HTMLAttributes, ReactNode, forwardRef } from "react";
import { smoothScroll } from "./smoothScroll";
import useNavLink from "./useNavLink";
import utils from "@/utils";
import { NavLinkColor } from "./type";

interface NavLinkProps extends HTMLAttributes<HTMLAnchorElement> {
  rootClassName?: string;
  linkColor?: NavLinkColor;
  children?: ReactNode;
}

const NavLink: ForwardRefRenderFunction<HTMLAnchorElement, NavLinkProps> = (
  { rootClassName = "", children, id, linkColor = "blue", ...restProps },
  ref
) => {
  const colorClassName = `navlink-${linkColor}`;

  const className = utils.formatClassName("navlink", colorClassName, rootClassName);

  useNavLink();

  return (
    <a ref={ref} {...restProps} href={`#${id}`} className={className} onClick={smoothScroll}>
      {children}
    </a>
  );
};

export default forwardRef(NavLink);
