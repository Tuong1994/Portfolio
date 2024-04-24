import { FC } from "react";
import { UI } from "@/components";
import useLang from "@/hooks/useLang";
import { ELang } from "@/common/enum";
import utils from "@/utils";
import useThemeStore from "@/store/ThemeStore";

const { Space } = UI;

interface HeaderTranslateProps {}

const HeaderTranslate: FC<HeaderTranslateProps> = () => {
  const { locale, handleChangeLang } = useLang();

  const color = useThemeStore((state) => state.color);

  const colorClassName = `header-translate-${color}`;

  const enLocaleClassName = locale === ELang.EN ? "translate-locale-selected" : "";

  const vnLocaleClassName = locale === ELang.VN ? "translate-locale-selected" : "";

  const enClassName = utils.formatClassName("translate-locale", enLocaleClassName);

  const vnClassName = utils.formatClassName("translate-locale", vnLocaleClassName);

  const mainClassName = utils.formatClassName("header-translate", colorClassName);

  return (
    <Space rootClassName={mainClassName}>
      <div className={enClassName} onClick={() => handleChangeLang(ELang.EN)}>
        EN
      </div>
      <div className={vnClassName} onClick={() => handleChangeLang(ELang.VN)}>
        VN
      </div>
    </Space>
  );
};

export default HeaderTranslate;
