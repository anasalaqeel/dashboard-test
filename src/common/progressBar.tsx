import { css } from "@emotion/css";

interface Props {
  progress?: number;
  color?: string;
  trailColor?: string;
}

function ProgressBar({ progress, color = "red", trailColor = "#00000014" }: Props) {
  const styles = {
    container: css`
      width: 100%;
      height: 35px;
      background-color: ${trailColor};
      border-radius: 50px;
      overflow: hidden;

      padding: 5px;
      .inner-progress-bar {
        min-width: 25%;
        height: 25px;
        border-radius: 50px;
        background-color: ${color};
      }
      .precentage-text {
        width: fit-content;
        margin-left: auto;
        font-size: 20px;
        font-weight: bold;
        margin-right: 10px;
        padding: 0 10px;

        color: #fff;
      }
    `,
  };

  return (
    <div className={styles.container}>
      <div className="inner-progress-bar" style={{ width: `${progress}%` }}>
        <p className="precentage-text">{progress}%</p>
      </div>
    </div>
  );
}

export default ProgressBar;
