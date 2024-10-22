import { ForwardRefRenderFunction, HTMLAttributes, ReactNode, forwardRef } from "react";
import useLayoutStore from "@/components/UI/Layout/LayoutStore";
import useThemeStore from "@/store/ThemeStore";
import utils from "@/utils";

interface ContentCardProps extends HTMLAttributes<HTMLDivElement> {
  rootClassName?: string;
  head?: ReactNode;
  children?: ReactNode;
}

const ContentCard: ForwardRefRenderFunction<HTMLDivElement, ContentCardProps> = (
  { rootClassName = "", head, children, ...restProps },
  ref
) => {
  const layoutTheme = useLayoutStore((state) => state.layoutTheme);

  const color = useThemeStore((state) => state.color);

  const colorClassName = `content-card-${color}`;

  const modeClassName = `content-card-${layoutTheme}`;

  const mainClassName = utils.formatClassName("content-card", colorClassName, modeClassName, rootClassName);

  return (
    <div ref={ref} {...restProps} className={mainClassName}>
      {head && <div className="content-card-head">{head}</div>}
      {children}
    </div>
  );
};

export default forwardRef(ContentCard);
