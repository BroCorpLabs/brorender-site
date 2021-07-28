import produce from "immer";

const generateImage = (w, h, style, p) => {
  let gi = "";

  switch (style) {
    case "init":
      gi = `${w},${h}`;

      let canvas = document.createElement("canvas"),
        d = (canvas.width = canvas.height = w),
        ctx = canvas.getContext("2d"),
        opacity;
      //   document.body.appendChild(canvas);

      ctx.translate(d / 2, d / 2);
      ctx.rotate((Math.PI * 360) / 360);
      ctx.lineWidth = Math.ceil(d / 50);
      ctx.lineCap = "square";

      for (let i = 0; i <= 360; i++) {
        ctx.save();

        ctx.rotate((Math.PI * i) / 180);
        //ctx.translate(-ctx.lineWidth/2, ctx.lineWidth/2);

        ctx.beginPath();
        ctx.moveTo(0, 0);
        opacity = (360 - i * 0.95) / 360;
        ctx.strokeStyle = "rgba(0,0,0," + opacity.toFixed(2) + ")";
        ctx.lineTo(0, d + 30);
        ctx.stroke();
        ctx.closePath();

        ctx.restore();
      }

      ctx.globalCompositeOperation = "source-out";
      ctx.beginPath();
      ctx.arc(0, 0, d / 2, 2 * Math.PI, false);
      ctx.fillStyle = "black";
      ctx.fill();

      ctx.globalCompositeOperation = "destination-out";
      ctx.beginPath();
      ctx.arc(0, 0, (d / 2) * 0.9, 2 * Math.PI, false);
      ctx.fill();

      ctx.globalCompositeOperation = "destination-over";

      ctx.rotate((180 * Math.PI) / 180);

      ctx.font = "30px Comic Sans MS";
      ctx.fillStyle = "black";
      ctx.textAlign = "center";
      ctx.fillText("Waiting...", 0, 10);

      gi = canvas.toDataURL();
      canvas = null;
      d = null;
      ctx = null;
      return gi;
    case "rendering":
      gi = `${w},${h}`;
      let canvas2 = document.createElement("canvas");
      let d2 = (canvas2.width = canvas2.height = w);
      let ctx2 = canvas2.getContext("2d");
      let opacity2;

      //   document.body.appendChild(canvas);

      ctx2.translate(d2 / 2, d2 / 2);
      ctx2.rotate((Math.PI * 360) / 360);
      ctx2.lineWidth = Math.ceil(d2 / 50);
      ctx2.lineCap = "square";

      for (let i = 0; i <= 360; i++) {
        ctx2.save();

        ctx2.rotate((Math.PI * i) / 180);
        //ctx.translate(-ctx.lineWidth/2, ctx.lineWidth/2);

        ctx2.beginPath();
        ctx2.moveTo(0, 0);
        opacity2 = (360 - i * 0.95) / 360;
        ctx2.strokeStyle = "rgba(0,0,0," + opacity2.toFixed(2) + ")";
        ctx2.lineTo(0, d2 + 30);
        ctx2.stroke();
        ctx2.closePath();

        ctx2.restore();
      }

      ctx2.globalCompositeOperation = "source-out";
      ctx2.beginPath();
      ctx2.arc(0, 0, d2 / 2, 2 * Math.PI, false);
      ctx2.fillStyle = "black";
      ctx2.fill();

      ctx2.globalCompositeOperation = "destination-out";
      ctx2.beginPath();
      ctx2.arc(0, 0, (d2 / 2) * 0.9, 2 * Math.PI, false);
      ctx2.fill();

      ctx2.globalCompositeOperation = "destination-over";

      ctx2.rotate((180 * Math.PI) / 180);

      ctx2.font = "30px Comic Sans MS";
      ctx2.fillStyle = "black";
      ctx2.textAlign = "center";
      ctx2.fillText(p, 0, 10);

      gi = canvas2.toDataURL();
      canvas2 = null;
      d2 = null;
      ctx2 = null;
      return gi;
    default:
      gi = "";
      return gi;
  }
};

export const jobReducer = (state, action) => {
  switch (action.type) {
    case "tileList":
      console.log(action.payload);
      return produce(state, (draft) => {
        const w = action.payload.endX - action.payload.startX;
        const h = action.payload.endY - action.payload.startY;
        if (
          !state.jobs.some(
            (eachJobId) => eachJobId.jobId === action.payload.jobId
          )
        ) {
          draft["jobs"].push({
            jobId: action.payload.jobId,
            frames: [
              {
                frame: action.payload.frame,
                tiles: [
                  {
                    startX: action.payload.startX,
                    startY: action.payload.startY,
                    endX: action.payload.endX,
                    endY: action.payload.endY,
                    locX: action.payload.locX,
                    locY: action.payload.locY,
                    image: generateImage(w, h, "init"),
                  },
                ],
              },
            ],
          });
        } else {
          let selectedJobIndex;
          state.jobs.forEach((eachJob) => {
            if (eachJob["jobId"] === action.payload.jobId) {
              selectedJobIndex = state.jobs.indexOf(eachJob);
            }
          });
          let selectedFrameIndex;
          state.jobs[selectedJobIndex]["frames"].forEach((eachFrame) => {
            if (eachFrame["frame"] === action.payload.frame) {
              selectedFrameIndex =
                state.jobs[selectedJobIndex]["frames"].indexOf(eachFrame);
            }
          });
          if (selectedFrameIndex === undefined) {
            draft["jobs"][selectedJobIndex]["frames"].push({
              frame: action.payload.frame,
              tiles: [
                {
                  startX: action.payload.startX,
                  startY: action.payload.startY,
                  endX: action.payload.endX,
                  endY: action.payload.endY,
                  locX: action.payload.locX,
                  locY: action.payload.locY,
                  image: generateImage(w, h, "init"),
                },
              ],
            });
          } else {
            draft["jobs"][selectedJobIndex]["frames"][selectedFrameIndex][
              "tiles"
            ].push({
              startX: action.payload.startX,
              startY: action.payload.startY,
              endX: action.payload.endX,
              endY: action.payload.endY,
              locX: action.payload.locX,
              locY: action.payload.locY,
              image: generateImage(w, h, "init"),
            });
          }
        }
      });

    case "tileMeta":
      console.log(action.payload);
      return produce(state, (draft) => {
        const w = action.payload.endX - action.payload.startX;
        const h = action.payload.endY - action.payload.startY;
        let selectedJobIndex;
        state.jobs.forEach((eachJob) => {
          if (eachJob["jobId"] === action.payload.jobId) {
            selectedJobIndex = state.jobs.indexOf(eachJob);
          }
        });
        let selectedFrameIndex;
        state.jobs[selectedJobIndex]["frames"].forEach((eachFrame) => {
          if (eachFrame["frame"] === action.payload.frame) {
            selectedFrameIndex =
              state.jobs[selectedJobIndex]["frames"].indexOf(eachFrame);
          }
        });
        let selectedTileIndex;
        state.jobs[selectedJobIndex]["frames"][selectedFrameIndex][
          "tiles"
        ].forEach((eachTile) => {
          if (
            eachTile["locX"] === action.payload.locX &&
            eachTile["locY"] === action.payload.locY
          ) {
            selectedTileIndex =
              state.jobs[selectedJobIndex]["frames"][selectedFrameIndex][
                "tiles"
              ].indexOf(eachTile);
          }
        });
        draft.jobs[selectedJobIndex]["frames"][selectedFrameIndex]["tiles"][
          selectedTileIndex
        ]["image"] = generateImage(w, h, "rendering", action.payload.progress);
      });
    case "tile":
      console.log(action.payload);
      return produce(state, (draft) => {
        const w = action.payload.endX - action.payload.startX;
        const h = action.payload.endY - action.payload.startY;
        let selectedJobIndex;
        state.jobs.forEach((eachJob) => {
          if (eachJob["jobId"] === action.payload.jobId) {
            selectedJobIndex = state.jobs.indexOf(eachJob);
          }
        });
        let selectedFrameIndex;
        state.jobs[selectedJobIndex]["frames"].forEach((eachFrame) => {
          if (eachFrame["frame"] === action.payload.frame) {
            selectedFrameIndex =
              state.jobs[selectedJobIndex]["frames"].indexOf(eachFrame);
          }
        });
        let selectedTileIndex;
        state.jobs[selectedJobIndex]["frames"][selectedFrameIndex][
          "tiles"
        ].forEach((eachTile) => {
          if (
            eachTile["locX"] === action.payload.locX &&
            eachTile["locY"] === action.payload.locY
          ) {
            selectedTileIndex =
              state.jobs[selectedJobIndex]["frames"][selectedFrameIndex][
                "tiles"
              ].indexOf(eachTile);
          }
        });
        draft.jobs[selectedJobIndex]["frames"][selectedFrameIndex]["tiles"][
          selectedTileIndex
        ]["image"] = `data:image/png;base64,${action.payload.tileImg}`;
      });
    default:
      console.log("undefined");
  }
};
