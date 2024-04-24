import { ELang } from "@/common/enum";
import { Lang, en, vn } from "@/common/lang";
import { StateCreator, create } from "zustand";

interface LangState {
  locale: ELang;
  lang: Lang;
  setLang: (locale: ELang) => void;
}

const store: StateCreator<LangState> = (set) => ({
  locale: ELang.EN,
  lang: en,
  setLang: (locale) => {
    if (locale === ELang.EN) return set((state) => ({ ...state, locale, lang: en }));
    set((state) => ({ ...state, locale, lang: vn }));
  },
});

const useLangStore = create(store);

export default useLangStore;
