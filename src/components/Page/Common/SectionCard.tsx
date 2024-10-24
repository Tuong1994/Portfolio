import { ForwardRefRenderFunction, ReactNode, forwardRef } from "react";
import useLayoutStore from "@/components/UI/Layout/LayoutStore";
import useThemeStore from "@/store/ThemeStore";
import utils from "@/utils";

interface SectionCardProps {
  rootClassName?: string;
  head?: ReactNode;
  children?: ReactNode;
  hasBackground?: boolean;
  hasBorder?: boolean;
}

const SectionCard: ForwardRefRenderFunction<HTMLDivElement, SectionCardProps> = (
  { rootClassName = "", head, children, hasBackground = true, hasBorder = true, ...restProps },
  ref
) => {
  const color = useThemeStore((state) => state.color);

  const layoutTheme = useLayoutStore((state) => state.layoutTheme);

  const colorClassName = `section-card-${color}`;

  const modeClassName = `section-card-${layoutTheme}`;

  const backGroundClassName = hasBackground ? "section-card-background" : "";

  const borderClassName = hasBorder ? "section-card-bordered" : "";

  const mainClassName = utils.formatClassName(
    "section-card",
    borderClassName,
    colorClassName,
    modeClassName,
    backGroundClassName,
    rootClassName
  );

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
