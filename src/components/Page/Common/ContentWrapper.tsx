import { ForwardRefRenderFunction, HTMLAttributes, ReactNode, forwardRef } from "react";
import useModeStore from "@/store/ModeStore";
import utils from "@/utils";

interface ContentWrapperProps extends HTMLAttributes<HTMLDivElement> {
  rootClassName?: string;
  children?: ReactNode;
}

const ContentWrapper: ForwardRefRenderFunction<HTMLDivElement, ContentWrapperProps> = (
  { rootClassName = "", children, ...restProps },
  ref
) => {
  const mode = useModeStore((state) => state.mode);

  const modeClassName = `content-wrapper-${mode}`;

  const mainClassName = utils.formatClassName("content-wrapper", modeClassName, rootClassName);

  return (
    <main ref={ref} {...restProps} className={mainClassName}>
      {children}
    </main>
  );
};

export default forwardRef(ContentWrapper);
