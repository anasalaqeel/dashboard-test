import { css } from "@emotion/css";
import colors from "../constants/colors";
import CollapseableCard from "./collapseableCard";

interface Props {}

function Initiatives(props: Props) {
  return (
    <div className={styles.container}>
      <div className="card-container">
        <CollapseableCard
          progress={46}
          progressBarColor="#ffb757"
          progresstrailColor={colors.average}
        />
      </div>
      <div className="card-container">
        <CollapseableCard
          progress={90}
          progressBarColor="#51a55e"
          progresstrailColor={colors.good}
        />
      </div>
      <div className="card-container">
        <CollapseableCard
          progress={13}
          progressBarColor="#ff4649"
          progresstrailColor={colors.weak}
        />
      </div>
      <div className="card-container">
        <CollapseableCard
          progress={46}
          progressBarColor="#ffb757"
          progresstrailColor={colors.average}
        />
      </div>
      <div className="card-container">
        <CollapseableCard
          progress={90}
          progressBarColor="#51a55e"
          progresstrailColor={colors.good}
        />
      </div>
      <div className="card-container">
        <CollapseableCard
          progress={13}
          progressBarColor="#ff4649"
          progresstrailColor={colors.weak}
        />
      </div>
      <div className="card-container">
        <CollapseableCard
          progress={90}
          progressBarColor="#51a55e"
          progresstrailColor={colors.good}
        />
      </div>
      <div className="card-container">
        <CollapseableCard
          progress={13}
          progressBarColor="#ff4649"
          progresstrailColor={colors.weak}
        />
      </div>
    </div>
  );
}

export default Initiatives;

const styles = {
  container: css`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    padding: 30px;
    .card-container {
      margin-left: 30px;
      margin-bottom: 30px;
    }
  `,
};
