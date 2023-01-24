import React from "react";

interface Props {
  size?: number | string;
  color?: string;
}

function SearchIcon({ size = 50, color = "#000" }: Props): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        fill={color}
        d="M21.293 22.707a1 1 0 001.414-1.414l-1.414 1.414zM17 10a7 7 0 01-7 7v2a9 9 0 009-9h-2zm-7 7a7 7 0 01-7-7H1a9 9 0 009 9v-2zm-7-7a7 7 0 017-7V1a9 9 0 00-9 9h2zm7-7a7 7 0 017 7h2a9 9 0 00-9-9v2zm4.793 13.207l6.5 6.5 1.414-1.414-6.5-6.5-1.414 1.414z"
      ></path>
    </svg>
  );
}

export default SearchIcon;
