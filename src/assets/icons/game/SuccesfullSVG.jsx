import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SuccesfullSVG = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={88}
        height={88}
        fill="none"
        {...props}
    >
        <Path
            stroke="#CDA568"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={7.333}
            d="m25.667 44 2.291 2.292m52.709-20.625L44 62.334l-2.292-2.292M7.333 44l18.334 18.334 36.666-36.667"
        />
    </Svg>
)
export default SuccesfullSVG
