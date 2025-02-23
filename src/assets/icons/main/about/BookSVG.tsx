import * as React from "react"
import Svg, { Path } from "react-native-svg"
const BookSVG = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={34}
        height={34}
        fill="none"
        {...props}
    >
        <Path
            stroke="#fff"
            strokeWidth={2.125}
            d="M28.189 22.666h-17c-1.318 0-1.976 0-2.518.145a4.25 4.25 0 0 0-3.004 3.006"
        />
        <Path
            stroke="#fff"
            strokeLinecap="round"
            strokeWidth={2.125}
            d="M11.333 9.917h11.334m-11.334 4.958h7.084m-4.25 16.292c-4.007 0-6.011 0-7.255-1.246-1.245-1.244-1.245-3.248-1.245-7.254V11.333c0-4.006 0-6.01 1.245-7.255 1.244-1.245 3.248-1.245 7.255-1.245h5.666c4.007 0 6.011 0 7.255 1.245 1.245 1.244 1.245 3.249 1.245 7.255m-8.5 19.834c4.007 0 6.011 0 7.255-1.246 1.245-1.244 1.245-3.248 1.245-7.254V17"
        />
    </Svg>
)
export default BookSVG
