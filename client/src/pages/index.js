import React from "react";
import NavbarCustom from "./../components/NavbarCustom";
import HeroSection from "./../components/HeroSection";
import TestimonialsSection from "./../components/TestimonialsSection";
import Footer from "./../components/Footer";

function IndexPage(props) {
  return (
    <>
      <NavbarCustom
        bg="white"
        variant="light"
        expand="md"
        logo="https://uploads.divjoy.com/logo.svg"
      />
      <form action="/file-upload"
      className="dropzone"
      id="my-awesome-dropzone"
      style={{boxShadow:"15 black",borderRadius:"10px",marginLeft:"auto", marginRight:"auto", width:"80vw",backgroundImage: "url(img/dragdrop-header.gif)",backgroundSize: "80%", backgroundPosition: "center"}}>
        <HeroSection
        bg="white"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title="Upload a .blend file to begin"
        // subtitle="Upload a .blend file to begin"
        buttonText="Get Started"
        buttonColor="primary"
        buttonPath="/pricing"
      />

      </form>

      
      <TestimonialsSection
        bg="white"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title="Here's what people are saying"
        subtitle=""
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

export default IndexPage;
