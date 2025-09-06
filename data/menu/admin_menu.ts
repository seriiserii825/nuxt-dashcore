import type { MenuNode } from "~/components/Menu/MenuItem.vue";

export const admin_menu: MenuNode[] = [
  {
    label: "Products",
    icon: ["fas", "box"],
    children: [
      {
        label: "Speakers",
        icon: ["fas", "volume-high"],
        children: [
          { label: "Opera Line", to: "/products/opera", icon: ["fas", "music"] },
          { label: "Classic Line", to: "/products/classic", icon: ["fas", "record-vinyl"] },
        ],
      },
      {
        label: "Accessories",
        icon: ["fas", "plug"],
        children: [
          { label: "Cables", to: "/products/cables", icon: ["fas", "bolt"] },
          { label: "Stands", to: "/products/stands", icon: ["fas", "grip-lines"] },
        ],
      },
    ],
  },
  {
    label: "About",
    icon: ["fas", "circle-info"],
    children: [
      { label: "Story", to: "/about/story", icon: ["fas", "book-open"] },
      { label: "Team", to: "/about/team", icon: ["fas", "users"] },
    ],
  },
  { label: "Blog", to: "/blog", icon: ["fas", "rss"] },
  { label: "Contact", to: "/contact", icon: ["fas", "envelope"] },
];
