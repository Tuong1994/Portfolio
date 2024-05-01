import { HTMLAttributes, forwardRef, ReactNode, useRef, ForwardedRef, FC, useImperativeHandle } from "react";
import { Title } from "@/components/UI/Typography";
import { TitleProps } from "@/components/UI/Typography/Title";
import useThemeStore from "@/store/ThemeStore";
import useLayout from "@/components/UI/Layout/useLayout";
import useReveal from "@/hooks/useReveal";
import utils from "@/utils";

type Ref = {
  el: HTMLDivElement;
};

interface ContentHeadProps extends HTMLAttributes<HTMLDivElement> {
  rootClassName?: string;
  titleProps?: TitleProps;
  children?: ReactNode;
}

const ContentHead: FC<ContentHeadProps> = (
  { rootClassName = "", children, titleProps, ...restProps },
  ref: ForwardedRef<Ref>
) => {
  const { layoutValue } = useLayout();

  const headRef = useRef<HTMLDivElement>(null);

  useImperativeHandle(ref, () => ({ el: headRef.current as HTMLDivElement }));

  const reveal = useReveal(headRef);

  const color = useThemeStore((state) => state.color);

  const titleDefaultProps: TitleProps = { weight: 600, rootClassName: "head-title", ...titleProps };

  const colorClassName = `content-head-${color}`;

  const modeClassName = `content-head-${layoutValue.layoutTheme}`;

  const revealClassName = reveal ? "content-head-reveal" : "";

  const mainClassName = utils.formatClassName("content-head", colorClassName, modeClassName, revealClassName);

  return (
    <div ref={headRef} {...restProps} className={mainClassName}>
      <Title {...titleDefaultProps}>{children}</Title>
      <div className="head-line-long" />
      <div className="head-line-short" />
    </div>
  );
};

export default forwardRef(ContentHead);
