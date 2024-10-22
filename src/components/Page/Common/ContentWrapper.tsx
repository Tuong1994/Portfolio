import { ForwardRefRenderFunction, HTMLAttributes, ReactNode, forwardRef } from "react";
import useLayout from "@/components/UI/Layout/useLayout";
import utils from "@/utils";

interface ContentWrapperProps extends HTMLAttributes<HTMLDivElement> {
  rootClassName?: string;
  children?: ReactNode;
}

const ContentWrapper: ForwardRefRenderFunction<HTMLDivElement, ContentWrapperProps> = (
  { rootClassName = "", children, ...restProps },
  ref
) => {
  const { layoutValue } = useLayout();

  const modeClassName = `content-wrapper-${layoutValue.layoutTheme}`;

  const mainClassName = utils.formatClassName("content-wrapper", modeClassName, rootClassName);

  return (
    <div ref={ref} {...restProps} className={mainClassName}>
      {children}
    </div>
  );
};

export default forwardRef(ContentWrapper);
