import { css } from "@emotion/css";
import colors from "../constants/colors";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { ButtonBase } from "@mui/material";

interface tabTypes {
  id: string;
  label: string | JSX.Element;
  path: string;
}

interface Props {
  tabsData: { id: string; label?: string | JSX.Element; path?: string }[];
  defaultItem: tabTypes;
}

function NavigationTabs({ tabsData, defaultItem }: Props): JSX.Element {
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState<string>(defaultItem.id);

  useEffect(() => {
    navigate(defaultItem.path);
  }, []);

  function handleNavigate(e: any): void {
    const { id, name } = e.currentTarget;
    navigate(name);
    setSelectedTab(id);
  }

  return (
    <div className={styles.container}>
      {tabsData.map((tab) => (
        <ButtonBase
          key={tab.id}
          onClick={handleNavigate}
          id={tab.id}
          name={tab.path}
          className={`item ${tab.id === selectedTab ? "active" : ""}`}
        >
          <p>{tab.label}</p>
        </ButtonBase>
      ))}
    </div>
  );
}

export default NavigationTabs;

const styles = {
  container: css`
    height: 55px;
    background-color: #eee;
    width: fit-content;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    cursor: pointer;
    box-shadow: 0px 2px 6px -1px #888888;
    .item {
      padding: 10px;
      font-size: 14px;
      font-weight: bold;
      color: ${colors.mainFont};
    }
    .active {
      color: #fff;
      background-color: ${colors.primary};
      box-shadow: 0px 2px 6px -1px #464646;
      border-radius: 8px;
    }
  `,
};
