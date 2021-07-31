import React from "react";
import NavbarCustom from "./../components/NavbarCustom";
import HeroSection2 from "./../components/HeroSection2";
import Footer from "./../components/Footer";
import PrivacyPolicy from "../components/PrivacyPolicy";

function PrivacyPage(props) {
  return (
    <>
      <NavbarCustom
        bg="white"
        variant="light"
        expand="md"
        logo="./img/logo.png"
      />
      <PrivacyPolicy />
      <Footer
        bg="white"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        description="A short description of what you do here"
        copyright="© 2020 Company"
        logo="./img/logo.png"
        bclogo="./img/brocorp-logo.png"
        pclogo="./img/pachyderm-logo.png"
      />
    </>
  );
}

export default PrivacyPage;
