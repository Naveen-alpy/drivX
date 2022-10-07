import { Outlet } from "react-router-dom";
import Footer_prjct from "./header-footer/footer";
import Header_prjct from "./header-footer/header";

const Template = () => {
  return (
    <>
      <Header_prjct />
      <Outlet />
      <Footer_prjct />
    </>
  );
};

export default Template;
