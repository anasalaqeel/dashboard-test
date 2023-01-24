import React from "react";
import { css } from "@emotion/css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

interface Props {
  progress?: number;
  color?: string;
  labelColor?: string;
  trailColor?: string;
}

function CircularProgress({ progress = 50, color, labelColor, trailColor }: Props): JSX.Element {
  return (
    <div className={styles.container}>
      <CircularProgressbar
        value={progress}
        styles={buildStyles({ pathColor: color, textColor: labelColor, trailColor })}
        text={`${progress}%`}
        className="circle"
      />
    </div>
  );
}

export default CircularProgress;

const styles = {
  container: css`
    .circle {
      height: 200px;
    }
  `,
};
