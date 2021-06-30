import React, { useEffect, useState, useCallback } from "react";
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

function IndexPage(props) {
  var myDropzone;
  var [isWaitingForDownload, setWaitingForDownload] = useState(false);
  var [downloadLink, setDownloadLink] = useState("");
  var [userDownloadLink, setUserDownloadLink] = useState("");
  var [userDownloadFilename, setUserDownloadFilename] = useState("");

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

          var headers = new Headers();

          headers.append(
            "Authorization",
            "Basic " + btoa("brorender" + ":" + "brocorpbrocorpbrocorp")
          );

          var fileUrl =
            "https://brorender.site/zips/" + JSON.parse(resp)[0] + ".zip";
          setUserDownloadLink(
            "https://brorender:brocorpbrocorpbrocorp@brorender.site/zips/" +
              JSON.parse(resp)[0] +
              ".zip"
          );
          setUserDownloadFilename(JSON.parse(resp)[0] + ".zip");

          const loadZipFromServer = async (fileUrl) => {
            let response = await fetch(fileUrl, {
              headers: headers,
              credentials: "same-origin",
            });
            console.log(response.status);
            if (response.status === 404) {
              console.log(response);
              setTimeout(() => {
                loadZipFromServer(fileUrl);
              }, 2000);
            } else if (response.status == 200) {
              console.log("Success!");
              setWaitingForDownload(false);
              setDownloadLink(fileUrl);
              console.log(response);
            }
          };

          setWaitingForDownload(true);
          setDownloadLink(fileUrl);
          loadZipFromServer(fileUrl);

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
        <form
          id="blendDropzone"
          style={{
            border: "5px grey dashed",
            borderRadius: "10px",
            minHeight: "75vh",
            width: "80vw",
            padding: "20px",
          }}
        >
          <HeroSection
            bg="white"
            textColor="dark"
            size="md"
            bgImage=""
            bgImageOpacity={1}
            title={downloadLink != "" ? "" : "Upload a .blend file to begin"}
            // subtitle="Upload a .blend file to begin"
            buttonText="Get Started"
            buttonColor="primary"
            buttonPath="/pricing"
            onClick={() => {
              myDropzone.hiddenFileInput.click();
            }}
          />
          {downloadLink != "" && (
            <div style={{ textAlign: "center" }}>
              {isWaitingForDownload == true ? (
                "Your download will appear here when ready."
              ) : (
                <a href={userDownloadLink} download={userDownloadFilename}>
                  <button type="button">Download</button>
                </a>
              )}
            </div>
          )}
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
