import { ChangeEventHandler, useEffect } from "react"
import { useFormContext } from "react-hook-form"

interface IInput {
  id?: string
  name?: string
  value?: any
  className?: string
  onChange?: ChangeEventHandler<HTMLInputElement>
  placeholder?: string
  hookToForm: boolean
  type?: "text" | "password" | "url" | "number"
  clasNameError?: string
  disabled?: boolean
}

function Input({
  id,
  name,
  value,
  type = "text",
  placeholder,
  hookToForm = false,
  onChange,
  className,
  clasNameError,
  disabled,
}: IInput) {
  const formContext = useFormContext()
  const isFullyHooked = name && hookToForm && formContext

  const fieldError = isFullyHooked && formContext?.formState?.errors?.[name]

  useEffect(() => {
    if (name && hookToForm) {
      formContext.setValue(name, value)
    }
  }, [value, name, formContext, hookToForm])

  return (
    <label {...(id && { htmlFor: id })} className="rounded-md text-sm h-full w-[400px]">
      <div className="relative flex items-stretch">
        <input
          {...(id && { id })}
          type={type || "text"}
          value={value}
          placeholder={placeholder}
          className={`bg-black border-gray_1 border-[2px]
          text-gray_1 font-dresden
        w-full p-2 focus:!ring-0 focus:!outline-none focus:!border-gray_1
        ${className || ""} ${hookToForm && fieldError && fieldError?.message ? clasNameError : ""}`}
          {...(!hookToForm && {
            value,
            onChange,
          })}
          {...(isFullyHooked
            ? formContext.register(name, {
                onChange: (e) => onChange && onChange(e),
              })
            : {})}
          name={name}
          disabled={disabled}
        />
      </div>

      {isFullyHooked && fieldError && fieldError?.message && (
        <p className="text-red text-[12px] pt-[5px] text-left">{fieldError?.message as string}</p>
      )}
    </label>
  )
}

export default Input
