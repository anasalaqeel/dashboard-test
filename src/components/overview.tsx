import { css } from "@emotion/css";
import IndicatorCard from "./indicatorCard";
import { useTranslation } from "react-i18next";
import DoughnutChart from "../common/doughnutChart";
import SemicircleProgressBar from "../common/semicircleProgressBar";
import colors from "../constants/colors";
import BarsChart from "../common/barsChart";

interface Props {}

function Overview(props: Props): JSX.Element {
  const t = useTranslation()[0];

  return (
    <div className={styles.container}>
      <div className="card-container">
        <IndicatorCard
          cardTitle={t("Overall Performance Card")}
          cardDate={t("KPIs Overview Card Date")}
          middleChart={
            <SemicircleProgressBar
              barColor="#359655"
              textColor="#359655"
              trailColor={colors.good}
              percentage={80}
            />
          }
        />
      </div>
      <div className="card-container">
        <IndicatorCard
          cardTitle={t("KPIs Overview Card")}
          leftTopChip={{ title: "AVERAGE", number: 10 }}
          leftBottomChip={{ title: "GOOD", number: 5 }}
          rightBottomChip={{ title: "WEAK", number: 3 }}
          cardDate={t("KPIs Overview Card Date")}
          middleChart={
            <DoughnutChart
              data={[10, 5, 3]}
              backgroundColor={[colors.average, colors.good, colors.weak]}
              label="Points"
            />
          }
          withChips={true}
        />
      </div>
      <div className="card-container">
        <IndicatorCard
          cardTitle={t("Initiatives Overview Card")}
          leftTopChip={{ title: "AT RISK", number: 7 }}
          leftBottomChip={{ title: "ON TRACK", number: 12 }}
          rightTopChip={{ title: "NOT STARTED", number: 10 }}
          rightBottomChip={{ title: "DELAYED", number: 15 }}
          cardDate={t("KPIs Overview Card Date")}
          middleChart={
            <DoughnutChart
              data={[7, 12, 10, 15]}
              backgroundColor={[colors.average, colors.good, colors.normal, colors.weak]}
              label="Points"
            />
          }
          withChips={true}
        />
      </div>
      <div className="card-container">
        <IndicatorCard
          cardTitle={t("Financial Card")}
          cardDate={t("KPIs Overview Card Date")}
          withTitleTag={true}
          middleChart={
            <BarsChart
              data={[7, 12, 10, 15]}
              backgroundColor={[colors.average, colors.good, colors.weak]}
              label="Points"
            />
          }
        />
      </div>
      <div className="card-container">
        <IndicatorCard
          cardTitle={t("Customer Card")}
          cardDate={t("KPIs Overview Card Date")}
          withTitleTag={true}
          middleChart={
            <BarsChart
              data={[7, 12, 10, 15]}
              backgroundColor={[colors.average, colors.good, colors.weak]}
              label="Points"
            />
          }
        />
      </div>
      <div className="card-container">
        <IndicatorCard
          cardTitle={t("Internal Processes Card")}
          cardDate={t("KPIs Overview Card Date")}
          withTitleTag={true}
          middleChart={
            <BarsChart
              data={[7, 12, 10, 15]}
              backgroundColor={[colors.average, colors.good, colors.weak]}
              label="Points"
            />
          }
        />
      </div>
      <div className="card-container">
        <IndicatorCard
          cardTitle={t("Learning and Growth Card")}
          cardDate={t("KPIs Overview Card Date")}
          withTitleTag={true}
          middleChart={
            <BarsChart
              data={[7, 12, 10, 15]}
              backgroundColor={[colors.average, colors.good, colors.weak]}
              label="Points"
            />
          }
        />
      </div>
    </div>
  );
}

export default Overview;

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
