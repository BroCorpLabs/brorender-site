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

function StartPollingForDownload(urlToPoll, setWaitingForDownload){
  setTimeout(() => {
    httpGetAsync(urlToPoll, (response)=> {
      if(response)
      {
        // case: done polling for zip and its present
        setWaitingForDownload(false);
      } else {
        // case: zip is not present, poll again
        StartPollingForDownload(urlToPoll, setWaitingForDownload);
      }
    });
  }, 10000); // 10 second gap between polls, async
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
        });

        myDropzone.on("sending", function (file, xhr, formData) {
          formData.append("BCid", GetBCid());
        });

        myDropzone.on("success", function (file, resp) {
          console.log("success" + resp);
          setWaitingForDownload(true);

          var fileUrl = "http://brorender:brocorpbrocorpbrocorp@15.207.161.3/zips/" + resp[0] + ".zip";
          setDownloadLink(fileUrl);
          StartPollingForDownload(fileUrl, setWaitingForDownload);
          // set unique siteId here
        });
      },
    };

    myDropzone.options.blendDropzone.init();
  }, []);

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
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "2em",
          backgroundImage: "url(img/dragdrop-header.gif)",
          backgroundSize: "80%",
          backgroundPosition: "center",
        }}
      >
        <form id="blendDropzone"
        style={{
          border: "5px grey dashed",
          borderRadius: "10px",
          minHeight: "75vh",
          width: "80vw",
          padding: "20px",
        }}>
          <HeroSection
            bg="white"
            textColor="dark"
            size="md"
            bgImage=""
            bgImageOpacity={1}
            title={(downloadLink != "") ? "" : "Upload a .blend file to begin"}
            // subtitle="Upload a .blend file to begin"
            buttonText="Get Started"
            buttonColor="primary"
            buttonPath="/pricing"
            onClick={() => {
              myDropzone.hiddenFileInput.click();
            }}
          />
          {(downloadLink != "") && 
            <div style={{textAlign:"center"}}>
              {isWaitingForDownload == true ? "Your download will appear here when ready." : downloadLink}
            </div>
          }
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
