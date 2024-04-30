import { FC } from "react";
import { UI } from "@/components";
import { HiHeart } from "react-icons/hi2";
import useThemeStore from "@/store/ThemeStore";
import utils from "@/utils";

const { Typography, Space } = UI;

const { Paragraph } = Typography;

interface BackgroundProps {}

const Background: FC<BackgroundProps> = () => {
  const color = useThemeStore((state) => state.color);

  const colorClassName = `background-${color}`;

  const mainClassName = utils.formatClassName("background", colorClassName);

  return (
    <div className={mainClassName}>
      <Space align="middle" justify="center" rootClassName="background-content">
        <Paragraph size={40}>I</Paragraph>
        <HiHeart size={40} />
        <Paragraph size={60} weight={600} rootClassName="content-mark">
          Coding
        </Paragraph>
      </Space>
    </div>
  );
};

export default Background;
