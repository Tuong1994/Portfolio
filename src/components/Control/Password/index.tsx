import {
  InputHTMLAttributes,
  CSSProperties,
  ReactNode,
  ForwardRefRenderFunction,
  ChangeEvent,
  useContext,
  useState,
  useRef,
  useEffect,
  forwardRef,
  useCallback,
} from "react";
import { HiEye, HiEyeSlash, HiXCircle } from "react-icons/hi2";
import { useFormContext } from "react-hook-form";
import { ControlColor, ControlShape, InputValue } from "../type";
import { ComponentSize } from "@/common/type";
import FormContext from "../Form/FormContext";
import FormItemContext from "../Form/FormItemContext";
import useLayout from "@/components/UI/Layout/useLayout";
import utils from "@/utils";

export interface InputPasswordProps extends InputHTMLAttributes<HTMLInputElement> {
  rootClassName?: string;
  labelClassName?: string;
  inputClassName?: string;
  rootStyle?: CSSProperties;
  labelStyle?: CSSProperties;
  label?: ReactNode | ReactNode[];
  addonBefore?: ReactNode | ReactNode[];
  addonAfter?: ReactNode | ReactNode[];
  sizes?: ComponentSize;
  color?: ControlColor;
  shape?: ControlShape;
  required?: boolean;
  optional?: boolean;
  hasClear?: boolean;
  onChangeInput?: (text: string) => void;
}

const InputPassword: ForwardRefRenderFunction<HTMLInputElement, InputPasswordProps> = (
  {
    rootClassName = "",
    labelClassName = "",
    inputClassName = "",
    rootStyle,
    labelStyle,
    label,
    addonBefore,
    addonAfter,
    value = "",
    sizes = "md",
    color = "blue",
    shape = "square",
    placeholder = "Enter information...",
    disabled,
    required,
    optional,
    hasClear = true,
    onBlur,
    onChangeInput,
    ...restProps
  },
  ref
) => {
  const rhfMethods = useFormContext();

  const { layoutValue } = useLayout();

  const { layoutTheme: theme } = layoutValue;

  const { color: rhfColor, sizes: rhfSizes, shape: rhfShape } = useContext(FormContext);

  const { isRhf, rhfName, rhfError, rhfValue, rhfDisabled } = useContext(FormItemContext);

  const [inputValue, setInputValue] = useState<InputValue>(value);

  const [isPassword, setIsPassword] = useState<boolean>(true);

  const [touched, setTouched] = useState<boolean>(false);

  const inputRef = useRef<HTMLDivElement>(null);

  const controlDisabled = rhfDisabled ? rhfDisabled : disabled;

  const controlColor = isRhf ? rhfColor : color;

  const controlSize = isRhf ? rhfSizes : sizes;

  const controlShape = isRhf ? rhfShape : shape;

  const showClearIcon = hasClear && inputValue && !controlDisabled;

  const showOptional = required ? false : optional;

  const themClassName = `input-${theme}`;

  const sizeClassName = `input-${controlSize}`;

  const colorClassName = `input-${controlColor}`;

  const shapeClassName = `input-${controlShape}`;

  const disabledClassName = controlDisabled ? "input-disabled" : "";

  const errorClassName = rhfError ? "input-error" : "";

  const mainClassName = utils.formatClassName(
    "input",
    colorClassName,
    sizeClassName,
    shapeClassName,
    errorClassName,
    themClassName,
    rootClassName,
    disabledClassName
  );

  const controlLabelClassName = utils.formatClassName("input-label", labelClassName);

  const controlInputClassName = utils.formatClassName("control-box", inputClassName);

  const triggerValidation = useCallback(() => {
    if (touched && !rhfValue) rhfMethods.trigger(rhfName);
    else if (touched && rhfValue) rhfMethods.trigger(rhfName);
  }, [touched, rhfMethods, rhfName, rhfValue]);

  // Trigger validation
  useEffect(() => {
    if (!isRhf) return;
    triggerValidation();
  }, [isRhf, triggerValidation]);

  // Focus input when error is trigger
  useEffect(() => {
    if (rhfError) inputRef.current?.click();
  }, [rhfError]);

  // Set default value
  useEffect(() => {
    if (isRhf) return setInputValue(rhfValue);
    setInputValue(value);
  }, [value, isRhf, rhfValue]);

  const iconSize = () => {
    if (controlSize === "sm") return 14;
    if (controlSize === "md") return 16;
    if (controlSize === "lg") return 18;
  };

  const handleSwitchType = () => setIsPassword(!isPassword);

  const handleFocus = () => setTouched(true);

  const handleBlur = () => setTouched(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    if (isRhf) rhfMethods.setValue(rhfName, value);
    onChangeInput?.(value);
  };

  const handleClearInput = () => {
    setInputValue("");
    if (isRhf) rhfMethods.setValue(rhfName, "");
    onChangeInput?.("");
  };

  return (
    <div style={rootStyle} className={mainClassName}>
      <label>
        {label && (
          <div style={labelStyle} className={controlLabelClassName}>
            {required && <span className="label-required">*</span>}
            <span>{label}</span>
            {showOptional && <span className="label-optional">(Optional)</span>}
          </div>
        )}

        <div ref={inputRef} className="input-group">
          {addonBefore && <div className="group-addon group-addon-before">{addonBefore}</div>}

          <div className="group-control">
            <input
              ref={ref}
              {...restProps}
              value={inputValue}
              disabled={controlDisabled}
              placeholder={placeholder}
              type={isPassword ? "password" : "text"}
              className={controlInputClassName}
              onChange={handleChange}
              onBlur={handleBlur}
              onFocus={handleFocus}
            />
            {showClearIcon && (
              <div className="control-action" onClick={handleClearInput}>
                <HiXCircle size={iconSize()} />
              </div>
            )}
            <div className="control-action" onClick={handleSwitchType}>
              {isPassword ? <HiEye size={iconSize()} /> : <HiEyeSlash size={iconSize()} />}
            </div>
          </div>

          {addonAfter && <div className="group-addon group-addon-after">{addonAfter}</div>}
        </div>
      </label>
    </div>
  );
};

export default forwardRef(InputPassword);