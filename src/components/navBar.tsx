import { css } from "@emotion/css";
import colors from "../constants/colors";
import HamburgerIcon from "../icons/hamburgerIcon";
import IconButton from "@mui/material/IconButton";
import Breadcumbs from "../common/breadcumbs";
import SearchIcon from "../icons/searchIcon";
import NotificationIcon from "../icons/notificationIcon";
import { Avatar } from "@mui/material";
import ArrowDownIcon from "../icons/arrowDownIcon";
import { ButtonBase } from "@mui/material";

interface Props {
  breadcrumbs?: { label?: string; path: string; icon?: JSX.Element }[];
  onDrawerOpent?: any;
}

function NavBar({ breadcrumbs = [], onDrawerOpent }: Props): JSX.Element {
  return (
    <div className={styles.container}>
      <p className="logo">Logo</p>
      <div className="breadcrumbs-container">
        <Breadcumbs data={breadcrumbs} />
      </div>
      <div className="right-features-section">
        <div className="icon-container">
          <IconButton>
            <SearchIcon color="#fff" size={25} />
          </IconButton>
        </div>
        <div className="icon-container">
          <IconButton>
            <NotificationIcon color="#fff" size={25} />
          </IconButton>
        </div>
        <div className=".icon-container avatar-container">
          <ButtonBase>
            <Avatar alt="Remy Sharp" src="/images/2.jpg" />
            <div className="icon-container">
              <ArrowDownIcon color="#fff" size={15} />
            </div>
          </ButtonBase>
        </div>
      </div>
      <div className="hamburger-icon-container">
        <IconButton onClick={onDrawerOpent} size="small">
          <HamburgerIcon size={40} color="#fff" />
        </IconButton>
      </div>
    </div>
  );
}

export default NavBar;

const styles = {
  container: css`
    background-color: ${colors.primary};
    min-height: 60px;
    padding: 10px 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    .logo {
      font-family: "Yellowtail", cursive;
      font-size: 40px;
      color: #fff;
      flex: 2;
    }
    .breadcrumbs-container {
      width: 100%;
      padding: 0 30px;
      flex: 10;
    }
    .right-features-section {
      display: flex;
      align-items: center;
    }
    .icon-container {
      margin: 0 10px;
    }
    .avatar-container {
      display: flex;
      align-items: center;
      button {
        padding: 5px;
        border-radius: 8px;
      }
    }
  `,
};
