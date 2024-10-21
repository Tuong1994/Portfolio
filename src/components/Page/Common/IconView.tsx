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
  borderWidth?: number;
  iconName?: string;
  hasHover?: boolean;
  src?: ImageProps["src"];
  imageProps?: ImageProps;
  nameProps?: ParagraphProps;
}

const IconView: ForwardRefRenderFunction<HTMLDivElement, IconViewProps> = ({
  src,
  iconWidth = 80,
  iconHeight = 80,
  borderWidth = 20,
  hasHover = true,
  iconName,
  imageProps,
  nameProps,
  ...restProps
}) => {
  const color = useThemeStore((state) => state.color);

  const imageDefaultProps: ImageProps = {
    src,
    imgWidth: iconWidth / 1.5,
    imgHeight: iconHeight / 1.5,
    ...imageProps,
  };

  const nameDefaultProps: ParagraphProps = {
    rootClassName: "icon-view-name",
    align: "center",
    weight: 600,
    ...nameProps,
  };

  const iconStyle: CSSProperties = {
    width: `${iconWidth + borderWidth}px`,
    height: `${iconHeight + borderWidth}px`,
  };

  const innerCircleStyle: CSSProperties = {
    width: `${iconWidth}px`,
    height: `${iconHeight}px`,
  };

  const colorClassName = `icon-view-${color}`;

  const hoverClassName = hasHover ? "icon-view-hover" : "";

  const iconClassName = utils.formatClassName("icon-view", hoverClassName, colorClassName);

  return (
    <Row justify="center" {...restProps}>
      <Col>
        <div style={iconStyle} className={iconClassName}>
          <Image {...imageDefaultProps} />
          <div style={innerCircleStyle} className="icon-view-circle" />
        </div>
        {iconName && <Paragraph {...nameDefaultProps}>{iconName}</Paragraph>}
      </Col>
    </Row>
  );
};

export default IconView;
