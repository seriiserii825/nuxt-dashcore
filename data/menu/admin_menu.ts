import type { MenuNode } from "~/components/Menu/MenuItem.vue";

export const admin_menu: MenuNode[] = [
  {
    label: "ADMIN",
    icon: ["fas", "gear"],
    children: [
      {
        label: "Utenti",
        icon: ["faw", "fa-user"],
        to: "/admin/core_users",
      },
      {
        label: "Menu",
        icon: ["faw", "list-alt"],
        children: [
          { label: "Pagine", to: "/admin/core_menus", icon: ["fa", "folder-open"] },
          { label: "Autorizzazioni", to: "/admin/core_permissions_general", icon: ["fa", "unlock-alt"] },
          { label: "Eccezioni", to: "/admin/core_permissions_exceptions", icon: ["fa", "fa-asterisk"] },
        ],
      },
      {
        label: "Indirizzi",
        icon: ["faw", "fa-envelope"],
        children: [
          { label: "Nazioni", to: "/admin/core_countries", icon: ["faw", "fa-globe"] },
          { label: "Province", to: "/admin/core_provinces", icon: ["fa", "fa-map-marker"] },
          { label: "Comuni", to: "/admin/core_cities", icon: ["fa", "fa-university"] },
        ],
      },
      {
        label: "Admin options",
        icon: ["faw", "fa-paperclip"],
        to: "/admin/core_admin_options",
      },
    ],
  },
  {
    label: "Clienti",
    icon: ["fas", "fa-users"],
    to: "/admin/core_customers",
  },
  { label: "Blog", to: "/blog", icon: ["fas", "rss"] },
  { label: "Contact", to: "/contact", icon: ["fas", "envelope"] },
];
