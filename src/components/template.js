import { Outlet } from "react-router-dom";
import FooterPrjct from "./header-footer/footer";
import HeaderPrjct from "./header-footer/header";

const Template = () => {
  return (
    <>
      <HeaderPrjct />
      <Outlet />
      <FooterPrjct />
    </>
  );
};

export default Template;
