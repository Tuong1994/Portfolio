import { ForwardRefRenderFunction, HTMLAttributes, forwardRef, ReactNode } from "react";
import { Title } from "@/components/UI/Typography";
import { TitleProps } from "@/components/UI/Typography/Title";
import useThemeStore from "@/store/ThemeStore";
import utils from "@/utils";
import useModeStore from "@/store/ModeStore";

interface ContentHeadProps extends HTMLAttributes<HTMLDivElement> {
  rootClassName?: string;
  titleProps?: TitleProps;
  children?: ReactNode;
}

const ContentHead: ForwardRefRenderFunction<HTMLDivElement, ContentHeadProps> = (
  { rootClassName = "", children, titleProps, ...restProps },
  ref
) => {
  const mode = useModeStore((state) => state.mode);

  const color = useThemeStore((state) => state.color);

  const titleDefaultProps: TitleProps = { weight: 600, rootClassName: "head-title", ...titleProps };

  const colorClassName = `content-head-${color}`;

  const modeClassName = `content-head-${mode}`;

  const mainClassName = utils.formatClassName("content-head", colorClassName, modeClassName);

  return (
    <div ref={ref} {...restProps} className={mainClassName}>
      <Title {...titleDefaultProps}>{children}</Title>
      <div className="head-line-long" />
      <div className="head-line-short" />
    </div>
  );
};

export default forwardRef(ContentHead);