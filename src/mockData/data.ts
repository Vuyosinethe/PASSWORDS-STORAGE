export interface NavbarMenuItem {
  id: number;
  name: string;
  link: string;
}

export const NavbarMenu: NavbarMenuItem[] = [
  {
    id: 1,
    name: "Home",
    link: "/home"
  },
  {
    id: 2,
    name: "About",
    link: "/about"
  },
  {
    id: 3,
    name: "Contact",
    link: "/contact"
  },
]

export const Dropdownlinks: NavbarMenuItem[] = [
  {
    id: 1,
    name: "Profile",
    link: "/profile"
  },
  {
    id: 2,
    name: "Settings",
    link: "/settings"
  },
  {
    id: 3,
    name: "Logout",
    link: "/logout"
  },
]
