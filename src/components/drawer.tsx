import React from "react";
import { css } from "@emotion/css";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import colors from "../constants/colors";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { useNavigate } from "react-router-dom";

interface Props {
  open?: any;
  onClose?: any;
}

function AppDrawer({ open, onClose }: Props): JSX.Element {
  const navigate = useNavigate();

  function handleNavigate() {
    window.location.href = "/";
  }

  return (
    <div className={styles.container}>
      <Drawer open={open} onClose={onClose} direction="right" className="bla bla bla">
        <div className="logo">
          <p>Logo</p>
        </div>
        <List>
          <ListItem disablePadding>
            <ListItemButton onClick={handleNavigate}>
              <ListItemIcon>
                <DashboardIcon />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
}

export default AppDrawer;

const styles = {
  container: css`
    .logo {
      font-family: "Yellowtail", cursive;
      font-size: 40px;
      background-color: ${colors.primary};
      color: #fff;
      text-align: center;
      padding: 30px 0;
    }
  `,
};
