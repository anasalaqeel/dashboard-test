import { useState } from "react";
import { css } from "@emotion/css";
import colors from "../constants/colors";
import Card from "../common/card";
import ProgressBar from "../common/progressBar";
import Collapse from "@mui/material/Collapse";
import CircularProgress from "../common/circularProgress";

interface Props {
  progress?: number;
  progressBarColor?: string;
  progressBarTextColor?: string;
  progresstrailColor?: string;
  titleIcon?: JSX.Element;
  progressType?: "bar" | "circle";
}

function CollapseableCard({
  progress = 50,
  progressBarColor = colors.warning,
  progresstrailColor = colors.weak,
  titleIcon,
  progressType = "bar",
  progressBarTextColor,
}: Props) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  function handleCardClick(): void {
    setIsOpen(!isOpen);
  }

  return (
    <Card onClick={handleCardClick} className={styles.container}>
      <div className="heading-container">
        <div className="icon-container">{titleIcon}</div>
        <h3>Title</h3>
        <p className="dot">.</p>
        <p>Q4/2021</p>
      </div>
      <div className="content-container">
        <div className="content-titel">
          <p>Actual Progress</p>
        </div>
        {progressType === "circle" ? (
          <div className="circle-bar-container">
            <CircularProgress
              progress={progress}
              color={progressBarColor}
              trailColor={progresstrailColor}
              labelColor={progressBarTextColor}
            />
          </div>
        ) : (
          <ProgressBar
            progress={progress}
            color={progressBarColor}
            trailColor={progresstrailColor}
          />
        )}
        <div className="couple">
          <div className="left-item">
            <h4>50%</h4>
            <p>Planned Progress</p>
          </div>
          <div className="right-item">
            <h4>5%</h4>
            <p>Variance</p>
          </div>
        </div>
      </div>
      <Collapse in={isOpen} className="collapse">
        <div className="details">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </div>
      </Collapse>
    </Card>
  );
}

export default CollapseableCard;

const styles = {
  container: css`
    cursor: pointer;
    overflow: hidden;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 400px;
    text-align: center;
    color: #505050;
    min-height: 0;
    .circle-bar-container {
    }
    .icon-container {
      display: flex;
      align-items: center;
      padding: 5px;
    }
    .heading-container {
      padding: 20px;
      background-color: ${colors.secondary};
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      width: fit-content;
      margin-top: 10px;
      border-radius: 50px;
    }
    .dot {
      font-size: 30px;
      margin: 0 8px;
      margin-bottom: 15px;
      font-weight: bold;
    }
    .content-container {
      flex: 1;
      width: 100%;
      position: relative;
      padding: 30px;
    }
    .content-titel {
      font-size: 18px;
      margin-bottom: 15px;
    }
    .couple {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 15px;
    }
    .left-item,
    .right-item {
      margin: 10px;
    }
    .accordion-summary {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: -30px;
    }
    .collapse {
      position: relative;
      background-color: #eee;
      padding: 0 25px;
    }
    .details {
      max-width: 350px;
      padding: 10px;
    }
  `,
};
