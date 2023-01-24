import { css } from "@emotion/css";
import HomeIcon from "../icons/homeIcon";
import IconButton from "@mui/material/IconButton";
import { Outlet, useOutletContext } from "react-router-dom";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import NavigationTabs from "../common/navigationTabs";

interface Props {}

interface tabsTypes {
  id: string;
  label: string | JSX.Element;
  path: string;
}

function Dashboard(props: Props): JSX.Element {
  const t = useTranslation()[0];
  const tabs: tabsTypes[] = [
    { id: "1", label: `${t("Overview Tab")}`, path: "overview" },
    { id: "3", label: `${t("KPIs Tab")}`, path: "kpis" },
    { id: "4", label: `${t("Initiatives Tab")}`, path: "initiatives" },
  ];

  const setBreadcrumbs = useOutletContext<any>()[1];

  useEffect(() => {
    const breadcrumbsData = [
      {
        label: "",
        path: "/",
        icon: (
          <IconButton>
            <HomeIcon size={30} color="#fff" />
          </IconButton>
        ),
      },
      {
        label: t("DashboardBreadcrumb"),
        path: "/",
      },
    ];
    setBreadcrumbs(breadcrumbsData);
  }, [setBreadcrumbs, t]);

  return (
    <div className={styles.container}>
      <div className="tabs-container">
        <NavigationTabs tabsData={tabs} defaultItem={tabs[1]} />
      </div>
      <Outlet />
    </div>
  );
}

export default Dashboard;

const styles = {
  container: css`
    .tabs-container {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 50px 0;
    }
  `,
};
