import { css } from "@emotion/css";
import colors from "../constants/colors";

interface Props {
  isActive?: boolean;
  className?: string;
  children?: JSX.Element | JSX.Element[];
  onClick?: any;
}

function Card({ isActive, className, children, ...props }: Props): JSX.Element {
  return (
    <div
      className={`${styles.container} ${isActive ? styles.active : ""} ${className || ""}`}
      {...props}
    >
      {children}
    </div>
  );
}

export default Card;

const styles = {
  container: css`
    min-height: 300px;
    min-width: 300px;
    width: fit-content;
    border-radius: 15px;
    margin: 0 auto;
    background: #ffffff;
    --box-shadow-color: #00000026;
    box-shadow: 0px 0px 14px 0px var(--box-shadow-color);
  `,
  active: css`
    position: relative;
    ::after {
      content: "";
      position: absolute;
      height: calc(100% - 4px);
      width: calc(100% - 4px);
      top: -2px;
      left: -2px;
      border: 4px solid ${colors.primary};
    }
  `,
};
