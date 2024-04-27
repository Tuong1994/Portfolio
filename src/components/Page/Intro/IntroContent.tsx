import { FC } from "react";
import { UI } from "@/components";
import { ThemeColor } from "@/store/ThemeStore";
import { linkId } from "@/common/constant";
import useLang from "@/hooks/useLang";

const { ABOUT } = linkId;

const { Typography, Navigating, Space, Button, Divider, TypingText } = UI;

const { Paragraph } = Typography;

const { NavLink } = Navigating;

interface IntroContentProps {
  color: ThemeColor;
}

const IntroContent: FC<IntroContentProps> = ({ color }) => {
  const { lang } = useLang();

  const texts = ["Frontend Developer", "Backend Developer", "Fullstack Developer"];

  return (
    <div className="intro-content">
      <Space align="middle">
        <Paragraph weight={600} size={25}>
          {lang.intro.greeting}
        </Paragraph>
        <span className="content-name">Nhâm Bổn Tường</span>
      </Space>
      <TypingText textColor={color} textList={texts} textWeight={600} />
      <Paragraph size={20}>{lang.intro.content}</Paragraph>
      <Divider />
      <NavLink id={ABOUT} rootClassName="content-action">
        <Button color={color} sizes="lg">
          {lang.intro.action}
        </Button>
      </NavLink>
    </div>
  );
};

export default IntroContent;
