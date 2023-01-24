import { useEffect } from "react";
import { css } from "@emotion/css";
const { SemiCircle } = require("progressbar.js");

interface Props {
  barColor?: string;
  textColor?: string;
  trailColor?: string;
  percentage?: number;
}

const cont: any = document.querySelector(".progress-wheel-wrapper");
const circles: any = document.getElementsByClassName("progress-wheel-wrapper");

let run = false;

function SemicircleProgressBar({
  barColor = "red",
  textColor = "red",
  trailColor = "#eee",
  percentage = 50,
}: Props): JSX.Element {
  useEffect(() => {
    if ((cont && run) || (cont && !run)) {
      cont.innerHTML = null;
      for (let i = 0; i < circles.length; i++) {
        circles[i].innerHTML = null;
      }

      const bar = new SemiCircle(".progress-wheel-wrapper", {
        strokeWidth: 10,
        color: textColor,
        trailColor,
        trailWidth: 10,
        easing: "easeInOut",
        duration: 1400,
        svgStyle: null,
        text: {
          value: "",
          alignToBottom: false,
        },

        // Set default step function for all animate calls
        step: (state: any, bar: any) => {
          bar.path.setAttribute("stroke", state.color);
          var value = Math.round(bar.value() * 100);
          if (value === 0) {
            bar.setText("");
          } else {
            bar.setText(value + "%");
          }
          bar.text.style.color = state.color;
        },
      });
      bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
      bar.text.style.fontSize = "2rem";
      bar.text.style.fontWeight = "bold";
      bar.text.style.top = "42px";
      bar.animate(percentage / 100); // Number from 0.0 to 1.0
      run = true;
    } else if (!cont && !run) {
      const bar = new SemiCircle(".progress-wheel-wrapper", {
        strokeWidth: 10,
        color: textColor,
        trailColor,
        trailWidth: 10,
        easing: "easeInOut",
        duration: 1400,
        svgStyle: null,
        text: {
          value: "",
          alignToBottom: false,
        },

        // Set default step function for all animate calls
        step: (state: any, bar: any) => {
          bar.path.setAttribute("stroke", state.color);
          var value = Math.round(bar.value() * 100);
          if (value === 0) {
            bar.setText("");
          } else {
            bar.setText(value + "%");
          }
          bar.text.style.color = state.color;
        },
      });
      bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
      bar.text.style.fontSize = "2rem";
      bar.text.style.fontWeight = "bold";
      bar.text.style.top = "42px";
      bar.animate(percentage / 100); // Number from 0.0 to 1.0
      run = true;
    } else if (!cont && run) {
      run = false;
    }
  }, [textColor, trailColor, percentage]);

  const styles = {
    container: css`
      width: fit-content;
      .progress-wheel-wrapper {
      }
      svg {
        height: 120px;
        width: 200px;
        fill: none;
        stroke: ${barColor};
        stroke-width: 10;
        stroke-linecap: round;
        -webkit-filter: drop-shadow(-3px -2px 5px ${trailColor});
        filter: drop-shadow(-3px -2px 5px ${trailColor});
      }
    `,
  };

  return (
    <div className={styles.container}>
      <div className="progress-wheel-wrapper"></div>
    </div>
  );
}

export default SemicircleProgressBar;
