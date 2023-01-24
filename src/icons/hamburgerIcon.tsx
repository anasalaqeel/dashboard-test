interface Props {
  size?: number | string;
  color?: string;
}

function HamburgerIcon({ size = 50, color = "#000" }: Props): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24">
      <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
        <g>
          <path fillRule="nonzero" d="M0 0H24V24H0z"></path>
          <path stroke={color} strokeLinecap="round" strokeWidth="2" d="M5 7L19 7"></path>
          <path stroke={color} strokeLinecap="round" strokeWidth="2" d="M5 17L19 17"></path>
          <path stroke={color} strokeLinecap="round" strokeWidth="2" d="M5 12L19 12"></path>
        </g>
      </g>
    </svg>
  );
}

export default HamburgerIcon;
