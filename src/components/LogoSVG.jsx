import { Flex } from "@chakra-ui/react";
import * as React from "react";

const LogoSVG = (props) => (
    <Flex ml="2rem">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 300 300"
            shapeRendering="geometricPrecision"
            textRendering="geometricPrecision"
            {...props}
            width={60}
        >
            <g
                transform="matrix(2.15086 0 0 2.15258 -168.683 -52.294)"
                fill="rgba(210,219,237,0)"
                stroke="#de3000"
                strokeWidth={3}
            >
                <path d="m212.531 120.994-26.91-15.536 26.91-15.537v31.073zM184.05 71.47l-26.91-15.537 26.91-15.536V71.47zM184.035 137.432l-26.91-15.537 26.91-15.536v31.073zM184.07 73.46v31.073l-26.911-15.536 26.91-15.537zM185.095 137.432v-31.073l26.91 15.536-26.91 15.537zM185.137 104.485V73.412l26.91 15.537-26.91 15.536zM185.14 71.511V40.438l26.91 15.537-26.91 15.536zM183.538 72.479l-26.91 15.536V56.942l26.91 15.537z" />
                <rect
                    width={70}
                    height={20}
                    rx={0}
                    ry={0}
                    transform="translate(83.378 115.254)"
                />
                <rect
                    width={70}
                    height={20}
                    rx={0}
                    ry={0}
                    transform="matrix(0 1.34215 -1 0 103.075 41.185)"
                />
            </g>
        </svg>
    </Flex>
);

export default LogoSVG;
