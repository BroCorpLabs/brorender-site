import React from "react";
import NavbarCustom from "./../components/NavbarCustom";
import HeroSection2 from "./../components/HeroSection2";
import Footer from "./../components/Footer";

function DashPage(props) {
  return (
    <>
      <NavbarCustom
        bg="white"
        variant="light"
        expand="md"
        logo="https://uploads.divjoy.com/logo.svg"
      />
      <HeroSection2
        bg="white"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title="Your landing page title here"
        subtitle="This landing page is perfect for showing off your awesome product and driving people to sign up for a paid plan."
        image="https://uploads.divjoy.com/undraw-japan_ubgk.svg"
        buttonText="Get Started"
        buttonColor="primary"
        buttonPath="/pricing"
      />
      <Footer
        bg="white"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        description="A short description of what you do here"
        copyright="© 2020 Company"
        logo="https://uploads.divjoy.com/logo.svg"
      />
    </>
  );
}

export default DashPage;
