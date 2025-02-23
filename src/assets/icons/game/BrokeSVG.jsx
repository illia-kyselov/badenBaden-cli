import * as React from "react"
import Svg, { Path } from "react-native-svg"
const BrokeSVG = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={32}
        height={32}
        fill="none"
        {...props}
    >
        <Path
            stroke="#000"
            strokeLinecap="round"
            strokeWidth={2}
            d="M8 13.333v-2.667c0-.454.037-.898.11-1.333m15.89 4v-2.667a8 8 0 0 0-14-5.291m4.667 23.958h-4c-3.771 0-5.658 0-6.828-1.172-1.172-1.17-1.172-3.057-1.172-6.828 0-3.77 0-5.657 1.172-6.828 1.17-1.172 3.057-1.172 6.828-1.172h10.666c3.771 0 5.658 0 6.828 1.172 1.172 1.17 1.172 3.057 1.172 6.828 0 3.77 0 5.658-1.172 6.828-1.17 1.172-3.057 1.172-6.828 1.172H20"
        />
    </Svg>
)
export default BrokeSVG
