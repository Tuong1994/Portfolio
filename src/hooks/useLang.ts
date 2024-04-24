import { ELang } from "@/common/enum";
import useLangStore from "@/store/LangStore";

const useLang = () => {
  const [locale, lang, setLang] = useLangStore((state) => [state.locale, state.lang, state.setLang]);
  const handleChangeLang = (locale: ELang) => setLang(locale);
  return { locale, lang, handleChangeLang };
};

export default useLang;
