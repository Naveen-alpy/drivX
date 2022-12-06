export const menuItems = [
  {
    title: "Login",
    url: "",
    submenu: [
      { title: "Student", url: "https://app.thedriverx.com/#/login" },
      { title: "Instructor", url: "https://app.thedriverx.com/#/login" },
    ],
  },
  {
    title: "Sign Up",
    url: "",
    submenu: [
      { title: "Student", url: "https://app.thedriverx.com/#/signup" },
      { title: "Instructor", url: "https://app.thedriverx.com/#/signup" },
    ],
  },
];

const menuReturn = (menuItem) => {
  return `<ul><li>${menuItem.title}${
    menuItem.submenu.length > 0 ? menuReturn(menuItem.submenu) : null
  }</li></ul>`;
};

menuReturn(menuItems);
