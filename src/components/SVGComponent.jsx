import React from "react";

export const SVGComponent = ({ opacity, color, background }, props) => {
    return (
        <>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 300 300"
                shapeRendering="geometricPrecision"
                textRendering="geometricPrecision"
                height={512}
                width={512}
            >
                <path
                    d="m59.257 106.357 96.985-73.94 5.761 88.344 36.49-91.224 11.522 140.196-90.263 72.979-59.535-72.979 117.15 64.337q-117.15 27.847-117.15 24.966t65.297-115.23l-75.86-14.403L176.407 150l-117.15-43.643Z"
                    fill="none"
                    stroke="#cd0e00"
                    strokeWidth={2}
                />
                <path
                    d="M236.902 112.118 75.581 160.131l44.171-81.621 57.615 108.507-127.713 26.887 137.315 13.444-79.7-57.615-91.223-71.058 201.651-32.648-77.78 103.706"
                    fill="none"
                    stroke="#7a0b03"
                    strokeWidth={0.4}
                />
                <path
                    d="M129.835 89.072 75.58 154.37l100.826 54.734 46.092-1.92Q99.587 227.348 98.627 227.348c-.96 0-55.694-48.973-55.694-49.933q0-.96 174.764-33.609l-116.19-91.223-42.25 59.535 127.712 63.377-15.363-128.673"
                    fill="none"
                    stroke="#5f0b05"
                    strokeWidth={1}
                    strokeMiterlimit={2}
                />
            </svg>
            {/* <svg
                baseProfile="full"
                height={512}
                viewBox="-0.5 -0.5 1 1"
                width={512}
                xmlns="http://www.w3.org/2000/svg"
                {...props}
                style={{
                    opacity: opacity,
                }}
            >
                <g
                    fill={color}
                    fillOpacity={background}
                    stroke={color}
                    strokeLinejoin="round"
                    strokeWidth={0.005}
                >
                    <path d="m0 .388-.145-.492.517.059z" />
                    <path d="m0-.414.372.369-.517-.059z" />
                    <path d="m0 .388-.403-.34.258-.152z" />
                    <path d="m0-.414-.145.31-.258.153zM0 .388l.372-.433-.195.171z" />
                    <path d="m0-.414.177.54.195-.171z" />
                    <path d="M0 .388.177.126-.403.05z" />
                    <path d="M0-.414-.403.05l.58.077z" />
                </g>
            </svg> */}
        </>
    );
};
