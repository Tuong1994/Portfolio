import utils from "@/utils";
import { ForwardRefRenderFunction, HTMLAttributes, ReactNode, forwardRef } from "react";

interface NavigateContentProps extends HTMLAttributes<HTMLDivElement> {
  rootClassName?: string;
  children?: ReactNode;
}

const NavigateContent: ForwardRefRenderFunction<HTMLDivElement, NavigateContentProps> = (
  { rootClassName = "", children, ...restProps },
  ref
) => {
  const className = utils.formatClassName("navigate-content", rootClassName);

  return (
    <div ref={ref} {...restProps} className={className}>
      {children}
    </div>
  );
};

export default forwardRef(NavigateContent);
