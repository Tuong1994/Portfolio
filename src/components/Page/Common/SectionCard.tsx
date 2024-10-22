import { ForwardRefRenderFunction, ReactNode, forwardRef } from "react";
import useLayoutStore from "@/components/UI/Layout/LayoutStore";
import useThemeStore from "@/store/ThemeStore";
import utils from "@/utils";

interface SectionCardProps {
  rootClassName?: string;
  head?: ReactNode;
  children?: ReactNode;
}

const SectionCard: ForwardRefRenderFunction<HTMLDivElement, SectionCardProps> = (
  { rootClassName = "", head, children, ...restProps },
  ref
) => {
  const color = useThemeStore((state) => state.color);

  const layoutTheme = useLayoutStore((state) => state.layoutTheme);

  const colorClassName = `section-card-${color}`;

  const modeClassName = `section-card-${layoutTheme}`;

  const mainClassName = utils.formatClassName("section-card", colorClassName, modeClassName, rootClassName);

  return (
    <div ref={ref} {...restProps} className={mainClassName}>
      <div className="card-wrap">
        {head && <div className="wrap-head">{head}</div>}
        {children}
      </div>
    </div>
  );
};

export default forwardRef(SectionCard);
