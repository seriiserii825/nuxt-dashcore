import type { MenuNode } from "~/components/Menu/MenuItem.vue";

export const admin_menu: MenuNode[] = [
  {
    label: "ADMIN",
    icon: ["fas", "gear"],
    children: [
      {
        label: "Utenti",
        icon: ["faw", "fa-user"],
        children: [
          { label: "Elenco Utenti", to: "/core_users", icon: ["faw", "fa-list"] },
          { label: "Grupi", to: "/core_groups", icon: ["faw", "fw fa-users"] },
        ]
      },
      {
        label: "Menu",
        icon: ["faw", "list-alt"],
        children: [
          { label: "Pagine", to: "/core_menus", icon: ["fa", "folder-open"] },
          {
            label: "Autorizzazioni",
            to: "/core_permissions_general",
            icon: ["fa", "unlock-alt"],
          },
          {
            label: "Eccezioni",
            to: "/core_permissions_exceptions",
            icon: ["fa", "fa-asterisk"],
          },
        ],
      },
      {
        label: "Indirizzi",
        icon: ["faw", "fa-envelope"],
        children: [
          { label: "Nazioni", to: "/core_countries", icon: ["faw", "fa-globe"] },
          { label: "Province", to: "/core_provinces", icon: ["fa", "fa-map-marker"] },
          { label: "Comuni", to: "/core_cities", icon: ["fa", "fa-university"] },
        ],
      },
      {
        label: "Admin options",
        icon: ["faw", "fa-paperclip"],
        to: "/core_admin_options",
      },
    ],
  },
  {
    label: "Clienti",
    icon: ["fas", "fa-users"],
    to: "/core_customers",
  },
  {
    label: "Style guides",
    icon: ["fab", "fa-glide"],
    to: "/styleguides",
  },
];
