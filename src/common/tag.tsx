import { css } from "@emotion/css";
import colors from "../constants/colors";

interface Props {
  text?: string;
  containerClass?: string;
}

function Tag({ text, containerClass }: Props): JSX.Element {
  return (
    <div className={styles.container + " " + containerClass}>
      <span>{text}</span>
    </div>
  );
}

export default Tag;

const styles = {
  container: css`
    min-height: 30px;
    min-width: 40px;
    background-color: #00315c;
    border-radius: 30px;
    width: fit-content;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    font-size: 15px;
  `,
};
