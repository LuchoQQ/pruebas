import * as React from "react";

const SvgComponent1 = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 300 300"
        shapeRendering="geometricPrecision"
        textRendering="geometricPrecision"
        {...props}
        style={{
            position: "absolute",
            top: "0px",
            left: "0px",
            transform: `rotate(${props.rotate}deg) translate(-10px, -10px)`,
            filter: `drop-shadow(0px 0px 4px rgba(${props.color}))`,
        }}
    >
        <path
            d={props.d}
            fill="none"
            stroke={`rgba(${props.color})`}
            strokeWidth={props.strokeWidth}
        />
    </svg>
);

export default SvgComponent1;
