import * as React from "react"
import Svg, { Path } from "react-native-svg"
const QuestionSVG = (props) => (
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
            strokeWidth={5.5}
            d="M38.339 9.68a7.992 7.992 0 0 1 11.322 0l3.7 3.707a8.013 8.013 0 0 0 5.665 2.347h5.24a7.994 7.994 0 0 1 8.004 8l-.004 5.24c0 2.127.844 4.162 2.347 5.665l3.703 3.704a7.992 7.992 0 0 1 0 11.319l-3.703 3.7a8.013 8.013 0 0 0-2.347 5.664v5.24a7.992 7.992 0 0 1-8 8.004l-5.24-.003a8.006 8.006 0 0 0-5.665 2.347l-3.703 3.703a7.994 7.994 0 0 1-11.32 0l-3.699-3.703a7.993 7.993 0 0 0-5.665-2.347h-5.24a7.993 7.993 0 0 1-8.004-8l.004-5.24a8.006 8.006 0 0 0-2.347-5.666l-3.703-3.703a7.993 7.993 0 0 1 0-11.319l3.703-3.7a8.013 8.013 0 0 0 2.347-5.665v-5.24a7.992 7.992 0 0 1 7.997-8.004l5.24.004a8.006 8.006 0 0 0 5.664-2.347L38.34 9.68Z"
        />
        <Path
            stroke="#CDA568"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={5.5}
            d="M36.667 33a7.333 7.333 0 1 1 13.504 3.96C47.978 40.37 44 43.62 44 47.667V49.5m-.03 12.834h.034"
        />
    </Svg>
)
export default QuestionSVG
