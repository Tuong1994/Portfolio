import { CSSProperties, ForwardRefRenderFunction } from "react";
import { UI } from "@/components";
import { ImageProps } from "@/components/UI/Image";
import { GridRowProps } from "@/components/UI/Grid/Row";
import { ParagraphProps } from "@/components/UI/Typography/Paragraph";
import useThemeStore from "@/store/ThemeStore";
import utils from "@/utils";

const { Image, Typography, Grid } = UI;

const { Row, Col } = Grid;

const { Paragraph } = Typography;

interface IconViewProps extends GridRowProps {
  iconWidth?: number;
  iconHeight?: number;
  iconName?: string;
  hasHover?: boolean;
  src?: ImageProps["src"];
  imageProps?: ImageProps;
  nameProps?: ParagraphProps;
}

const IconView: ForwardRefRenderFunction<HTMLDivElement, IconViewProps> = ({
  src,
  iconWidth = 100,
  iconHeight = 100,
  hasHover = true,
  iconName,
  imageProps,
  nameProps,
  ...restProps
}) => {
  const color = useThemeStore((state) => state.color);

  const imageDefaultProps: ImageProps = {
    src,
    imgWidth: iconWidth / 2,
    imgHeight: iconHeight / 2,
    ...imageProps,
  };

  const nameDefaultProps: ParagraphProps = {
    rootClassName: "icon-view-name",
    align: "center",
    weight: 600,
    ...nameProps,
  };

  const iconStyle: CSSProperties = {
    width: `${iconWidth}px`,
    height: `${iconHeight}px`,
    borderWidth: `${iconWidth / 10 < 1 ? 1 : iconWidth / 10}px`,
  };

  const colorClassName = `icon-view-${color}`;

  const hoverClassName = hasHover ? "icon-view-hover" : "";

  const iconClassName = utils.formatClassName("icon-view", hoverClassName, colorClassName);

  return (
    <Row justify="center" {...restProps}>
      <Col>
        <div style={iconStyle} className={iconClassName}>
          <Image {...imageDefaultProps} />
        </div>
        {iconName && <Paragraph {...nameDefaultProps}>{iconName}</Paragraph>}
      </Col>
    </Row>
  );
};

export default IconView;
