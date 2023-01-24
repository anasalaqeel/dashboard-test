import React from "react";
import { css } from "@emotion/css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Card from "../common/card";
import colors from "../constants/colors";

interface chipTypes {
  title: string;
  number: number | string;
}

interface Props {
  cardTitle: string;
  cardDate: string;
  leftTopChip?: chipTypes;
  leftBottomChip?: chipTypes;
  rightTopChip?: chipTypes;
  rightBottomChip?: chipTypes;
  middleChart?: JSX.Element;
  withChips?: boolean;
  withTitleTag?: boolean;
}

function IndicatorCard({
  cardTitle,
  cardDate,
  leftTopChip,
  leftBottomChip,
  rightTopChip,
  rightBottomChip,
  middleChart,
  withChips,
  withTitleTag,
}: Props) {
  return (
    <Card className={styles.container}>
      <div className="heading-container">
        <div className="title-tag-container">
          {withTitleTag && <p className="tag">Prespective</p>}
          <h3>{cardTitle}</h3>
        </div>
        <p>{cardDate}</p>
      </div>
      {withChips ? (
        <div className="content-container">
          <div className="left-column">
            {leftTopChip && (
              <div className="chip left-top">
                <div className="chip-heading">
                  <p>*</p>
                  <h5>{leftTopChip.title}</h5>
                </div>
                <h3>{leftTopChip.number}</h3>
              </div>
            )}
            {leftBottomChip && (
              <div className="chip left-bottom">
                <div className="chip-heading">
                  <p>*</p>
                  <h5>{leftBottomChip.title}</h5>
                </div>
                <h3>{leftBottomChip.number}</h3>
              </div>
            )}
          </div>
          <div className="right-column">
            {rightTopChip && (
              <div className="chip right-top">
                <div className="chip-heading">
                  <p>*</p>
                  <h5>{rightTopChip.title}</h5>
                </div>
                <h3>{rightTopChip.number}</h3>
              </div>
            )}
            {rightBottomChip && (
              <div className="chip right-bottom">
                <div className="chip-heading">
                  <p>*</p>
                  <h5>{rightBottomChip.title}</h5>
                </div>
                <h3>{rightBottomChip.number}</h3>
              </div>
            )}
          </div>
          <div className="middle-column">{middleChart}</div>
        </div>
      ) : (
        <div className="content-container">{middleChart}</div>
      )}
    </Card>
  );
}

export default IndicatorCard;

const styles = {
  container: css`
    overflow: hidden;
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 400px;
    .tag {
      background-color: #bdbdbd;
      color: #2e3355 !important;
      font-weight: bold;
      padding: 5px 10px;
      margin-bottom: 5px;
      width: fit-content;
      border-radius: 15px;
    }
    .heading-container {
      padding: 20px;
      background-color: ${colors.secondary};
      height: 80px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      p {
        color: ${colors.mainFont};
      }
    }
    .content-container {
      flex: 1;
      width: 100%;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .left-column {
      position: absolute;
      height: 100%;
      width: 30%;
      padding-left: 20px;
      padding-top: 20px;
      padding-bottom: 20px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      left: 0;
    }
    .right-column {
      position: absolute;
      height: 100%;
      width: 30%;
      right: 0;
      top: 0;
      padding-right: 20px;
      padding-top: 20px;
      padding-bottom: 20px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-end;
    }
    .middle-column {
      width: 40%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .chip {
      h3 {
        opacity: 0.7;
        text-align: center;
      }
      border-radius: 8px;
      padding: 5px;
      width: fit-content;
    }
    .chip-heading {
      display: flex;
      p {
        font-size: 18px;
        opacity: 0.7;
      }
      h5 {
        margin-left: 5px;
        font-size: 15px;
        opacity: 0.7;
        text-align: center;
      }
    }
    .left-top {
      background-color: ${colors.average};
      position: absolute;
      top: 20px;
    }
    .left-bottom {
      background-color: ${colors.good};
      position: absolute;
      bottom: 20px;
    }
    .right-top {
      background-color: ${colors.normal};
      position: absolute;
      top: 20px;
    }
    .right-bottom {
      background-color: ${colors.weak};
      position: absolute;
      bottom: 20px;
    }
  `,
};
