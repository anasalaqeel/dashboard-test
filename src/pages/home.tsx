import { css } from "@emotion/css";
import NavBar from "../components/navBar";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import AppDrawer from "../components/drawer";

type BreadcrumbsTypes = {
  label?: string;
  path: string;
  icon?: JSX.Element;
}[];

function Home(): JSX.Element {
  const [breadcrumbsData, setBreadcrumbsData] = useState<BreadcrumbsTypes>([]);
  const [open, setOpen] = useState<boolean>(false);

  function handleDrawerOpent() {
    setOpen((prev) => !prev);
  }

  return (
    <div className={styles.container}>
      <NavBar breadcrumbs={breadcrumbsData} onDrawerOpent={handleDrawerOpent} />
      <AppDrawer open={open} onClose={handleDrawerOpent} />
      <Outlet context={[breadcrumbsData, setBreadcrumbsData]} />
    </div>
  );
}

export default Home;

const styles = {
  container: css``,
};
