import React, { Fragment } from "react"
import { CgChevronDown } from "react-icons/cg"
import { Collapse } from "~/components/ui-components"
import { Menu, Transition } from "@headlessui/react"
import { MenuLink } from "./MenuLink"
import { MenuItem } from "./MenuItem"
import clsx from "clsx"

const SubmenuV = ({ menuItem }) => {
  return (
    <div className={`relative has-submenu menu-item `}>
      <Collapse
        trigger={menuItem.label}
        className="font-semibold text-mobileMenuColor dark:text-dark-mobileMenuColor"
      >
        <ul className="py-2 pl-3 menuItemGroup sub-menu">
          {menuItem.children.map((item) => (
            <MenuItem
              key={item.id}
              menuItem={item}
              orientation="V"
              className="py-2 border-b border-dashed border-opacity-20 border-light last:border-none"
            />
          ))}
        </ul>
      </Collapse>
    </div>
  )
}

const SubmenuH = ({ menuItem }) => {
  return (
    <Menu as="div" className={clsx("menu-item", "relative", "flex")}>
      <Menu.Button className={clsx(`inline-flex items-center font-semibold`)}>
        {menuItem.label}
        <CgChevronDown className={`ml-2 w-4 h-4`} aria-hidden="true" />
      </Menu.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-300"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Menu.Items
          className={clsx(
            `subMenu`,
            `absolute mt-7 origin-top-right`,
            `rounded-lg`,
            `px-5 py-3 w-56`,
            `z-50`,
            `text-subMenuColor dark:text-dark-subMenuColor font-semibold`,
            `bg-subMenuBg dark:bg-dark-subMenuBg`
          )}
        >
          <div className="relative">
            <div className="absolute c-triangle-up text-subMenuBg dark:text-dark-subMenuBg -top-5"></div>
            {menuItem.children.map((item) => (
              <Menu.Item key={item.id}>
                {({ active }) => (
                  <MenuLink
                    menuItem={item}
                    className={` hover:text-subMenuHoverColor dark:hover:text-dark-subMenuHoverColor dark:hover:opacity-80 py-2 block`}
                  />
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

export const Submenu = ({ menuItem, orientation }) => {
  return orientation === "H" ? (
    <SubmenuH menuItem={menuItem} />
  ) : (
    <SubmenuV menuItem={menuItem} />
  )
}
