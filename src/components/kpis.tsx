import { css } from "@emotion/css";
import colors from "../constants/colors";
import CollapseableCard from "./collapseableCard";
import SpeedIcon from "@mui/icons-material/Speed";

interface Props {}

function Kpis(props: Props) {
  return (
    <div className={styles.container}>
      <div className="card-container">
        <CollapseableCard
          progress={46}
          progressBarColor="#ffb757"
          progressBarTextColor="#ffb757"
          progresstrailColor={colors.average}
          titleIcon={<SpeedIcon />}
          progressType="circle"
        />
      </div>
      <div className="card-container">
        <CollapseableCard
          progress={46}
          progressBarColor="#51a55e"
          progressBarTextColor="#51a55e"
          progresstrailColor={colors.good}
          titleIcon={<SpeedIcon />}
          progressType="circle"
        />
      </div>
      <div className="card-container">
        <CollapseableCard
          progress={13}
          progressBarColor="#ff4649"
          progressBarTextColor="#ff4649"
          progresstrailColor={colors.weak}
          titleIcon={<SpeedIcon />}
          progressType="circle"
        />
      </div>
      <div className="card-container">
        <CollapseableCard
          progress={46}
          progressBarColor="#ffb757"
          progressBarTextColor="#ffb757"
          progresstrailColor={colors.average}
          titleIcon={<SpeedIcon />}
          progressType="circle"
        />
      </div>
      <div className="card-container">
        <CollapseableCard
          progress={46}
          progressBarColor="#51a55e"
          progressBarTextColor="#51a55e"
          progresstrailColor={colors.good}
          titleIcon={<SpeedIcon />}
          progressType="circle"
        />
      </div>
      <div className="card-container">
        <CollapseableCard
          progress={13}
          progressBarColor="#ff4649"
          progressBarTextColor="#ff4649"
          progresstrailColor={colors.weak}
          titleIcon={<SpeedIcon />}
          progressType="circle"
        />
      </div>
    </div>
  );
}

export default Kpis;

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
