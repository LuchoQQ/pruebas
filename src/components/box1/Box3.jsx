import * as React from "react";

const SvgComponent = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 300 300"
        shapeRendering="geometricPrecision"
        textRendering="geometricPrecision"
        {...props}
        style={{ position: "absolute", top: "0px", left: "0px" }}
    >
        <path
            d="M99.534 269.45c10.814-5.407 173.025 2.704 172.124-9.011S170.727 38.75 168.925 39.652q-1.803.9-102.734 81.105 188.345 45.96 188.345 48.663c0 2.704-179.333 58.576-180.234 58.576s142.385 62.181 142.385 54.972q0-7.21-173.025-227.997"
            fill="none"
            stroke={`rgba(${props.color})`}
            strokeWidth={1.5}
        />
    </svg>
);

export default SvgComponent;
