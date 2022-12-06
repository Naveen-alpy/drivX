import { Outlet } from "react-router-dom";
import FooterPrjct from "./header-footer/footer";
import HeaderPrjct from "./header-footer/header";

const NoBannerTemplate = () => {
  return (
    <>
      <HeaderPrjct noBannerClass="no-banner" />
      <section className="header_height">
        <Outlet />
      </section>
      <FooterPrjct />
    </>
  );
};

export default NoBannerTemplate;
