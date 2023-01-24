import { css } from "@emotion/css";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Link } from "react-router-dom";

interface Props {
  data: { label?: string; path: string; icon?: JSX.Element }[];
}

function Breadcumbs({ data }: Props): JSX.Element {
  return (
    <div className={styles.container}>
      <Breadcrumbs separator="›" aria-label="breadcrumb">
        {data.map((item, index) => (
          <Link
            to={item.path}
            className={`link ${data.length - 1 === index ? "active" : ""}`}
            key={item.path}
          >
            {item.icon ? (
              <div className="item-container">
                {item.icon}
                <p>{item.label}</p>
              </div>
            ) : (
              <p>{item.label}</p>
            )}
          </Link>
        ))}
      </Breadcrumbs>
    </div>
  );
}

export default Breadcumbs;

const styles = {
  container: css`
    .link {
      display: flex;
      align-items: center;
      justify-content: center;
      color: #eeeeeecf;
      text-decoration: none;
    }
    .active {
      color: #fff;
    }
    .item-container {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .MuiBreadcrumbs-separator {
      color: #fff;
    }
  `,
};
