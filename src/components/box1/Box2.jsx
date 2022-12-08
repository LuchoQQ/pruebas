import * as React from "react";

const SvgComponent2 = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 300 300"
        shapeRendering="geometricPrecision"
        textRendering="geometricPrecision"
        {...props}
        style={{ position: "absolute", top: "0px", left: "0px" }}
    >
        <path
            d="M150 11.715q100.03 77.501 99.129 76.6T76.104 105.437l34.244 122.56 171.223 2.703-225.293 45.058L19.33 150l233.404 11.31"
            fill="none"
            stroke={`rgba(${props.color})`}
            strokeWidth={1.5}
        />
    </svg>
);

export default SvgComponent2;
