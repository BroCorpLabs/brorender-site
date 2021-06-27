import React, { useEffect, useState } from "react";
import Cookies from "universal-cookie";
import { v4 as uuidv4 } from "uuid";

import NavbarCustom from "./../components/NavbarCustom";
import HeroSection from "./../components/HeroSection";
import TestimonialsSection from "./../components/TestimonialsSection";
import Footer from "./../components/Footer";

const serverIp = process.env.REACT_APP_RENDER_SERVER_IP || "brorender.site/api";
const uploadEndpoint =
  process.env.REACT_APP_RENDER_SERVER_ROUTE || "/uploadBlend";

function GetBCid() {
  const cookies = new Cookies();
  var BCid = cookies.get("BCid");
  if (BCid == undefined) {
    BCid = CreateBCid(cookies);
  }
  console.log("used bcid " + BCid);
  return BCid;
}

function CreateBCid(cookies) {
  var newBCid = uuidv4();
  cookies.set("BCid", newBCid, { path: "/" });
  return newBCid;
}

function StartPollingForDownload(setDownloadLink){
  setTimeout(() => {

    // make get request
    // check if file exists
    // if exists set
    // else retry
    httpGetAsync("http://www.reddit.com", (response)=> {
      if(response)
      {
        console.log("response looks like: " + response);
        var i = "$DYNAMICURLHERE$" // probably need to reuse the video url we polled here
        setDownloadLink("http://brorender:brocorpbrocorpbrocorp@15.207.161.3/zips/"+i+".zip");
      } else {
        StartPollingForDownload(setDownloadLink);
      }
    });
    
  }, 2000);
}

async function httpGetAsync(theUrl, callback)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4) //  && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous 
    xmlHttp.send(null);
}

function IndexPage(props) {
  var myDropzone;
  var [isWaitingForDownload, setWaitingForDownload] = useState(false);
  var [downloadLink, setDownloadLink] = useState("");

  useEffect(() => {
    var Dropzone = window.Dropzone;
    if (Dropzone.instances.length > 0)
      Dropzone.instances.forEach((dz) => dz.destroy());

    myDropzone = new Dropzone("form#blendDropzone", {
      url: "https://" + serverIp + uploadEndpoint,
    });

    myDropzone.options.blendDropzone = {
      init: function () {
        myDropzone.on("addedfile", function (file) {
          console.log("Added file." + file);
          setWaitingForDownload(true);
          StartPollingForDownload(setDownloadLink);
        });

        myDropzone.on("sending", function (file, xhr, formData) {
          formData.append("BCid", GetBCid());
        });

        myDropzone.on("success", function (file, resp) {
          console.log("success" + resp);
          // set unique siteId here
        });
      },
    };

    myDropzone.options.blendDropzone.init();
  }, []);

  // The recommended way from within the init configuration:

  console.log("rendering the boy once")
  return (
    <>
      <NavbarCustom
        bg="white"
        variant="light"
        expand="md"
        logo="./img/logo.png"
      />
      <div
        style={{
          border: "5px grey dashed",
          borderRadius: "10px",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "2em",
          width: "80vw",
          backgroundImage: "url(img/dragdrop-header.gif)",
          backgroundSize: "80%",
          backgroundPosition: "center",
          minHeight: "75vh",
        }}
      >
        <form id="blendDropzone">
          <HeroSection
            bg="white"
            textColor="dark"
            size="md"
            bgImage=""
            bgImageOpacity={1}
            title={isWaitingForDownload == true ?"" : "Upload a .blend file to begin"}
            // subtitle="Upload a .blend file to begin"
            buttonText="Get Started"
            buttonColor="primary"
            buttonPath="/pricing"
            onClick={() => {
              myDropzone.hiddenFileInput.click();
            }}
          />
          {isWaitingForDownload == true && <div style={{textAlign:"center"}}>{downloadLink == "" ? "Your download will appear here when ready." : downloadLink}</div>}
        </form>
      </div>

      {/* <form action={process.env.RENDER_SERVER_ROUTE}
      className="dropzone"
      id="blendDropzone"
      style={{boxShadow:"15 black",borderRadius:"10px",marginLeft:"auto", marginRight:"auto", width:"80vw",backgroundImage: "url(img/dragdrop-header.gif)",backgroundSize: "80%", backgroundPosition: "center"}}> */}

      {/* </form> */}

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
        logo="./img/logo.png"
      />
    </>
  );
}

export default IndexPage;
