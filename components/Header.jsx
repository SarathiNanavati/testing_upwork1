import React, { useState } from "react";
import s from "./header.module.scss";

const topHeaderMenu = [
  {
    name: "Contact Us",
    link: "#",
  },
  {
    name: "Student Login",
    link: "#",
  },
  {
    name: "My Cart",
    link: "#",
  },
];

const menu = [
  {
    name: "PRODUCTS",
    link: "#",
    subMenu: [
      {
        name: "PRODUCTS 1",
        link: "#",
      },
      {
        name: "PRODUCTS 2",
        link: "#",
      },
      {
        name: "PRODUCTS 3",
        link: "#",
      },
    ],
  },
  {
    name: "SUBSCRIPTIONS",
    link: "#",
  },
  {
    name: "REVIEWS",
    link: "#",
  },
  {
    name: "DEMOS",
    link: "#",
  },

  {
    name: "WHY US ",
    link: "#",
    subMenu: [
      {
        name: "WHY US  1",
        link: "#",
      },
      {
        name: "WHY US  2",
        link: "#",
      },
      {
        name: "WHY US  3",
        link: "#",
      },
    ],
  },
  {
    name: "RESOURCES",
    link: "#",
    subMenu: [
      {
        name: "RESOURCES 1",
        link: "#",
      },
      {
        name: "RESOURCES 2",
        link: "#",
      },
      {
        name: "RESOURCES 3",
        link: "#",
      },
    ],
  },
];

const Header = () => {
  const [isShown, setIsShown] = useState(true);
  const [selectedMenuIndex, setSelectedMenuIndex] = useState(null);

  return (
    <div>
      <div className={s.topHeader}>
        <div className={s.socialLinks}>
          {topHeaderMenu &&
            topHeaderMenu.length > 0 &&
            topHeaderMenu.map((topHeaderMenuItem, topHeaderMenuItemIndex) => {
              return (
                <a key={topHeaderMenuItemIndex} href={topHeaderMenu.link}>
                  <span>{topHeaderMenuItem.name}</span>
                </a>
              );
            })}
        </div>
      </div>
      <div className={s.mainHeader}>
        <div className={s.logo}>
          <img src='https://www.yaegercpareview.com/assets/img/yaeger/logo_green-gray.png' alt='' />
        </div>
        <div className={s.navBar}>
          {menu &&
            menu.length > 0 &&
            menu.map((menuItem, menuItemIndex) => {
              return (
                <div
                  className={s.menuItem}
                  key={menuItemIndex}
                  onMouseEnter={() => {
                    setIsShown(true);
                    setSelectedMenuIndex(menuItemIndex);
                  }}
                  onMouseLeave={(e) => {
                    setIsShown(false);
                    setSelectedMenuIndex(null);
                  }}>
                  <a href={menuItem.link}>{menuItem.name}</a>
                  {isShown &&
                    menuItem.subMenu &&
                    menuItem.subMenu.length > 0 &&
                    selectedMenuIndex === menuItemIndex && (
                      <ul className={`${s.submenu} ${isShown && s.showSubMenu}`}>
                        {menuItem.subMenu.map((subMenuItem, subMenuItemIndex) => {
                          return (
                            <li key={subMenuItemIndex}>
                              <a href={subMenuItem.link}>{subMenuItem.name}</a>
                            </li>
                          );
                        })}
                      </ul>
                    )}
                </div>
              );
            })}
        </div>
        <div className={s.cart}>
          <svg xmlns='http://www.w3.org/2000/svg' height='30' viewBox='0 96 960 960' width='30'>
            <path d='M286.788 975Q257 975 236 953.788q-21-21.213-21-51Q215 873 236.212 852q21.213-21 51-21Q317 831 338 852.212q21 21.213 21 51Q359 933 337.788 954q-21.213 21-51 21Zm400 0Q657 975 636 953.788q-21-21.213-21-51Q615 873 636.212 852q21.213-21 51-21Q717 831 738 852.212q21 21.213 21 51Q759 933 737.788 954q-21.213 21-51 21ZM235 315l110 228h288l125-228H235Zm-30-60h589.074q22.964 0 34.945 21Q841 297 829 318L694 561q-11 19-28.559 30.5Q647.881 603 627 603H324l-56 104h491v60H277q-42 0-60.5-28t.5-63l64-118-152-322H51v-60h117l37 79Zm140 288h288-288Z' />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Header;
