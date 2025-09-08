import { FC, HTMLInputTypeAttribute } from "react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";

type TextInputFieldProps = {
  type?: HTMLInputTypeAttribute | "textarea";
  id: string;
  placeholder?: string;
  disabled: boolean;
  label?: string;
  registerProps: UseFormRegisterReturn;
  error: FieldError | undefined;
};

export const TextInputField: FC<TextInputFieldProps> = (props) => {
  return (
    <div>
      {props.label ? (
        <label
          htmlFor={props.id}
          className="block text-sm font-medium text-secondary mb-1.5 text-start"
        >
          {props.label}
        </label>
      ) : null}
      <div className="relative">
        {props.type === "textarea" ? (
          <textarea
            id={props.id}
            rows={5}
            placeholder={props.placeholder}
            disabled={props.disabled}
            className="w-full bg-[#f9fafb] px-4 py-3 border rounded-[10px] focus:border-primary outline-hidden resize-none"
            autoComplete="true"
            {...props.registerProps}
          />
        ) : (
          <input
            type={props.type || "text"}
            id={props.id}
            placeholder={props.placeholder}
            disabled={props.disabled}
            className="w-full bg-[#f9fafb] px-4 py-3 border rounded-[10px] focus:border-primary outline-hidden"
            autoComplete="true"
            {...props.registerProps}
          />
        )}

        {props.error && (
          <p className="mt-1 text-xs text-red-600 text-start!">
            {props.error.message ?? ""}
          </p>
        )}
      </div>
    </div>
  );
};
