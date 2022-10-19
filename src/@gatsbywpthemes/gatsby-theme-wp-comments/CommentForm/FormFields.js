import React from "react"
import { inputFields } from "@gatsbywpthemes/gatsby-theme-wp-comments/src/CommentForm/inputfields"
import { Error } from "@gatsbywpthemes/gatsby-theme-wp-comments/src/CommentForm/Error"
import clsx from "clsx"

export const FormFields = ({ register, errors }) => {
  return inputFields.map((el) => {
    const Tag = el.tag
    const isTextArea = Tag === "textarea"
    return (
      <div
        className={`mb-5 ${
          isTextArea ? "w-full " : "w-full sm:w-[calc(50%-1rem)]"
        }`}
        key={el.name}
      >
        <label
          htmlFor={el.name}
          className="text-upper-spaced !text-base !font-normal  "
        >
          {el.label}
          <Tag
            {...register(el.name, {
              required: el.required,
              pattern: el.pattern,
            })}
            type={el.type}
            id={el.name}
            placeholder={el.placeholder}
            aria-required={el.required}
            className={clsx(
              "border-0 border-b-2 bg-transparent",
              " focus:outline-none focus:ring-gray-200 dark:focus:ring-opacity-20 focus:border-0 focus:border-b-2 focus:border-text dark:focus:border-dark-text",
              "w-full",
              {
                "h-[200px]": isTextArea,
              }
            )}
          />
        </label>
        {errors[el.name]?.type === "required" && <Error>Required</Error>}
        {errors[el.name]?.type === "pattern" && <Error>Invalid value</Error>}
      </div>
    )
  })
}
