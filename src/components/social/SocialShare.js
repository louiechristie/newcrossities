import React from "react"
import { Twitter, Facebook, Pinterest } from "./icons"
import { FiShare2 } from "react-icons/fi"
import clsx from "clsx"

export const SocialShare = ({ url, title, media }) => {
  return (
    <div className={clsx("flex flex-col justify-center align-center mt-10")}>
      <h3 className="text-base uppercase ">Share on social media</h3>
      <button className="flex justify-center my-2 cursor-pointer ">
        <FiShare2 className="text-sm" />
      </button>

      <div
        fontWeight="bold"
        fontSize="sm"
        mt={4}
        className="flex space-x-2 text-sm font-bold text-text dark:text-dark-text"
      >
        <Twitter url={url} title={title} textStyle="link">
          Twitter
        </Twitter>
        <span>/</span>
        <Facebook url={url} quote={title}>
          Facebook
        </Facebook>
        <span>/</span>
        <Pinterest url={url} media={media}>
          Pinterest
        </Pinterest>
      </div>
    </div>
  )
}
