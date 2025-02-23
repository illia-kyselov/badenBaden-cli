import * as React from "react"
import Svg, { Path } from "react-native-svg"
const RejectSVG = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={88}
        height={88}
        fill="none"
        {...props}
    >
        <Path
            fill="#CDA568"
            d="M29.74 58.26a1.833 1.833 0 0 1 0-2.593L41.408 44 29.74 32.333a1.834 1.834 0 0 1 2.593-2.593L44 41.408 55.667 29.74a1.834 1.834 0 0 1 2.593 2.593L46.592 44 58.26 55.667a1.834 1.834 0 0 1-2.593 2.593L44 46.592 32.333 58.26a1.833 1.833 0 0 1-2.593 0Z"
        />
        <Path
            fill="#CDA568"
            fillRule="evenodd"
            d="M44 80.666c20.25 0 36.667-16.415 36.667-36.666C80.667 23.749 64.25 7.333 44 7.333S7.333 23.749 7.333 44C7.333 64.25 23.75 80.666 44 80.666ZM44 77c18.225 0 33-14.775 33-33 0-18.226-14.775-33-33-33S11 25.774 11 44c0 18.225 14.775 33 33 33Z"
            clipRule="evenodd"
        />
    </Svg>
)
export default RejectSVG
