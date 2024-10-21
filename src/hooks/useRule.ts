import { FormRule } from "@/components/Control/type";
import {
  EMAIL_REGEX,
  PHONE_REGEX,
  REPLACE_MAX_NUM_REGEX,
  REPLACE_MIN_NUM_REGEX,
  WHITE_SPACE_REGEX,
} from "@/common/regex";
import useLang from "./useLang";

const useRule = () => {
  const { lang } = useLang();

  const common = (): FormRule[] => {
    return [{ required: true, message: lang.common.rule.required }];
  };

  const minNumber = (min: number) => {
    return [{ min, message: lang.common.rule.required }];
  };

  const email = (): FormRule[] => {
    return [
      { required: true, message: lang.common.rule.required },
      { whiteSpace: true, pattern: WHITE_SPACE_REGEX, message: lang.common.rule.whiteSpace },
      { email: true, pattern: EMAIL_REGEX, message: lang.common.rule.email },
    ];
  };

  const password = (min = 6, max = 20): FormRule[] => {
    return [
      { required: true, message: lang.common.rule.required },
      { whiteSpace: true, pattern: WHITE_SPACE_REGEX, message: lang.common.rule.whiteSpace },
      {
        minLength: min,
        message: lang.common.rule.minLength.replace(REPLACE_MIN_NUM_REGEX, String(min)),
      },
      {
        maxLength: max,
        message: lang.common.rule.maxLength.replace(REPLACE_MAX_NUM_REGEX, String(max)),
      },
    ];
  };

  const phone = (): FormRule[] => {
    return [
      { required: true, message: lang.common.rule.required },
      { whiteSpace: true, pattern: WHITE_SPACE_REGEX, message: lang.common.rule.whiteSpace },
      { phone: true, pattern: PHONE_REGEX, message: lang.common.rule.phone },
    ];
  };

  const match = (match: string): FormRule[] => {
    return [
      { required: true, message: lang.common.rule.required },
      { validate: (value) => value === match || lang.common.rule.confirmPassword },
    ];
  };

  return { common, minNumber, email, password, phone, match };
};

export default useRule;
