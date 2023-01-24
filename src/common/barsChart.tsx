import { css } from "@emotion/css";
import colors from "../constants/colors";

interface Props {
  data?: number[] | string;
  backgroundColor?: string[] | string;
  label?: string;
  labels?: string[];
}

const data: any = [
  { label: "KPIS", strengths: { normal: 9, danger: 8, warning: 8, good: 4 } },
  { label: "INITIATIVES", strengths: { normal: 6, danger: 8, warning: 7, good: 4 } },
];

function BarsChart({ backgroundColor, label, labels }: Props): JSX.Element {
  return (
    <div className={styles.container}>
      <div className="numbers-container">
        <p>10</p>
        <p>8</p>
        <p>6</p>
        <p>4</p>
        <p>2</p>
        <p>0</p>
      </div>
      <div className="bar-wrapper">
        {data.map((item: any) => (
          <div key={item.label} className="bar-container">
            <div
              className="normal border-round"
              style={{ height: `${item.strengths.normal * 10}%` }}
            >
              <div
                className="danger border-round"
                style={{ height: `${item.strengths.danger * 10}%` }}
              >
                <div
                  className="warning border-round"
                  style={{ height: `${item.strengths.warning * 10}%` }}
                >
                  <div
                    className="good border-round"
                    style={{ height: `${item.strengths.good * 10}%` }}
                  ></div>
                </div>
              </div>
            </div>
            <p className="label">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BarsChart;

const styles = {
  container: css`
    width: 100%;
    padding: 20px;
    position: absolute;
    height: 100%;
    display: flex;
    .numbers-container {
      position: absolute;
      height: calc(100% - 20px);
      display: grid;
    }
    .border-round {
      border-top-left-radius: 50px;
      border-top-right-radius: 50px;
    }
    .bar-wrapper {
      display: flex;
      width: 100%;
      margin-left: 80px;
      align-items: center;
    }
    .bar-container {
      width: fit-content;
      height: 100%;
      padding: 0 40px;
      position: relative;
      bottom: 0px;
    }
    .normal {
      position: absolute;
      height: 100%;
      width: 30px;
      bottom: 0;
      left: 0;
      background-color: ${colors.mainFont};
    }
    .danger {
      position: absolute;
      height: 60%;
      width: 30px;
      bottom: 0;
      background-color: ${colors.weak};
    }
    .warning {
      position: absolute;
      height: 80%;
      width: 30px;
      bottom: 0;
      background-color: ${colors.average};
    }
    .good {
      position: absolute;
      height: 30%;
      width: 30px;
      bottom: 0;
      background-color: ${colors.good};
    }
    .label {
      position: absolute;
      bottom: 0;
    }
  `,
};
