import { useEffect } from "react";
import { css } from "@emotion/css";
import Input from "@mui/joy/Input";
import Textarea from "@mui/joy/Textarea";
import BasicSelect from "../common/basicSelect";
import Button from "@mui/material/Button";
import ScrollableTabs from "../common/ScrollableTabs";
import colors from "../constants/colors";
import { useOutletContext } from "react-router-dom";
import { IconButton } from "@mui/material";
import HomeIcon from "../icons/homeIcon";

function AddKpis(): JSX.Element {
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
        label: "Add KPI",
        path: "/addkpis",
      },
    ];
    setBreadcrumbs(breadcrumbsData);
  }, [setBreadcrumbs]);

  return (
    <div className={styles.container}>
      <div className="submitForm">
        <h1 className="title"> link to organaization and stratigy</h1>
        <div className="table-style">
          <table>
            <thead>
              <tr>
                <th>Orgnaization</th>
                <th>stratigy</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  database<span>marketing and communication</span>
                </td>
                <td>
                  stratagy<span>Stratgy Name Example 1 </span>
                </td>
              </tr>
              <tr>
                <td>
                  depatrment<span>Depatrment Name Example 1 </span>
                </td>
                <td>
                  objective<span>Objective Name Example 1</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="information-box-container">
          <h1 className="title"> Basic Information</h1>
          <div className="information-box">
            <div className="english-side">
              <h4> English </h4>
              <h5>name</h5>
              <Input placeholder="Type in here…" size="md" variant="outlined" />
              <h5>Description</h5>
              <Textarea placeholder="Type in here…" minRows={2} maxRows={4} />
            </div>
            <div className="arabic-side">
              <h4>عربي </h4>
              <h5>إسم مؤشر الأداء الرئيسية</h5>
              <Input placeholder="أدخل إسم مؤشر الأداء الرئيسية" size="md" variant="outlined" />
              <h5>الوصف</h5>
              <Textarea placeholder="أدخل الوصف" minRows={2} maxRows={4} />
            </div>
          </div>
        </div>
        <div className="measurement-box-container">
          <h1 className="title">Measurement Setting</h1>
          <div className="measurement-box">
            <div className="measurment-leftBox">
              <h5>Measurement units</h5>
              <BasicSelect />
              <h5>period level</h5>
              <ScrollableTabs />
            </div>
            <div className="measurment-rightBox">
              <h5>Data and Collection Tamplet</h5>
              <BasicSelect />
            </div>
          </div>
        </div>
        <div>
          <h1 className="title">Owner</h1>
          <h5>Owner</h5>
          <BasicSelect />
        </div>
      </div>
      <div className="submitSide">
        <div className="submitBox">
          <ul>
            <li>link to organaization and stratigy</li>
            <li>Basic Information</li>
            <li>Measurement Setting</li>
            <li>Owner</li>
          </ul>
          <div className="button">
            <Button fullWidth variant="contained">
              submit
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddKpis;

const styles = {
  container: css`
    display: flex;
    justify-content: center;
    height: 100vh;
    width: 100%;
    flex-direction: row;
    overflow: scroll-behavior;
    color: ${colors.mainFont};
    h4 {
      color: ${colors.primary};
      font-family: "Montserrat", sans-serif;
      font-size: 20px;
      font-weight: 500;
      margin: 0;
    }
    h5 {
      margin: 8px 0;
      font-family: "Montserrat", sans-serif;
    }
    .submitForm {
      padding: 15px 30px;
      width: 100%;
      .table-style {
        border: 1px solid #c9c9c9;
        border-radius: 8px;
        overflow: hidden;
      }
      table {
        span {
          padding: 0 20px;
          font-weight: 300;
          font-family: "Montserrat", sans-serif;
          color: ${colors.primary};
        }
        align-items: center;
        width: 100%;
        overflow: hidden;
        border-collapse: collapse;
      }

      td:first-child {
        border-right: 1px solid #c9c9c9;
      }
      td {
        height: 50px;
        text-align: center;
        background: #fff;
        font-family: "Montserrat", sans-serif;
        font-weight: 500;
        border-top: 1px solid #c9c9c9;
      }
      th {
        font-family: "Montserrat", sans-serif;
        background: #eae7ee;
        color: #636363;
        height: 50px;
        font-size: 20px;
      }
      .information-box-container {
        margin: 50px 0;
      }
      .title {
        text-align: left;
        font-size: 20px;
        margin: 8px 0 25px 0;
        font-family: "Montserrat", sans-serif;
      }
      .information-box {
        display: flex;
        width: 100%;
        justify-content: space-between;
        flex-direction: row;
      }
      .english-side {
        text-align: left;
        direction: ltr;
        width: 40%;
      }
      .arabic-side {
        width: 40%;
        text-align: right;
        direction: rtl;
      }
    }
    .measurement-box-container {
      margin: 50px 0;
    }
    .measurement-box {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      text-align: left;
      select {
        margin: 0 15px;
      }
      width: 100%;
    }
    .measurment-leftBox {
      width: 40%;
      direction: ltr;
    }
    .measurment-rightBox {
      direction: rtl;
      width: 40%;
    }
    .submitSide {
      background-color: #eae7ee;
      width: 40%;
      padding: 50px;
    }
    .submitBox {
      background-color: #fff;
      width: 100%;
      border-radius: 15px;
      padding: 20px 0;
      font-weight: bold;
      ul {
        list-style-type: none;
      }
      li {
        margin: 10px 0;
        font-family: "Montserrat", sans-serif;
        font-size: light;
      }
    }
    .button {
      display: flex;
      justify-content: center;
      margin: 0 20%;
    }
    .JoyInput-root,
    .JoyTextarea-root {
      border-color: #b1b1b1;
    }
  `,
};
