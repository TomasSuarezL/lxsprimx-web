export const Triangle = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    version="1.1"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 800 800"
    height={"100%"}
    width={"100%"}
    className="triangle"
    transform="rotate(180)"
  >
    <defs>
      <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="nnneon-grad">
        <stop
          className="stop-color-1"
          stopColor="hsl(150, 7.142857142857142%, 5.490196078431373%)"
          stopOpacity="1"
          offset="0%"
        ></stop>
        <stop className="stop-color-2" stopColor="#000000" stopOpacity="1" offset="100%"></stop>
      </linearGradient>
      <filter
        id="nnneon-filter"
        x="-100%"
        y="-100%"
        width="400%"
        height="400%"
        filterUnits="objectBoundingBox"
        primitiveUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feGaussianBlur
          stdDeviation="17 8"
          x="0%"
          y="0%"
          width="100%"
          height="100%"
          in="SourceGraphic"
          edgeMode="none"
          result="blur"
        ></feGaussianBlur>
      </filter>
      <filter
        id="nnneon-filter2"
        x="-100%"
        y="-100%"
        width="400%"
        height="400%"
        filterUnits="objectBoundingBox"
        primitiveUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feGaussianBlur
          stdDeviation="17 19"
          x="0%"
          y="0%"
          width="100%"
          height="100%"
          in="SourceGraphic"
          edgeMode="none"
          result="blur"
        ></feGaussianBlur>
      </filter>
    </defs>
    <g strokeWidth="32.5" stroke="url(#nnneon-grad)" fill="none">
      <polygon points="400,146 146,654 654,654" filter="url(#nnneon-filter)"></polygon>
      <polygon
        className="ghost-1"
        points="481,146 227,654 735,654"
        filter="url(#nnneon-filter2)"
        opacity="0.75"
      ></polygon>
      <polygon
        className="ghost-2"
        points="319,146 65,654 573,654"
        filter="url(#nnneon-filter2)"
        opacity="0.75"
      ></polygon>
      <polygon points="400,146 146,654 654,654"></polygon>
    </g>
  </svg>
);

