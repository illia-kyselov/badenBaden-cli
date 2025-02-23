import * as React from "react"
import Svg, { Path } from "react-native-svg"
const DoneAllSVG = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={40}
        height={40}
        fill="none"
        {...props}
    >
        <Path
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.667}
            d="m11.667 20 1.041 1.042m23.959-9.375L20 28.334l-1.042-1.042M3.333 20l8.334 8.334 16.666-16.667"
        />
    </Svg>
)
export default DoneAllSVG
