import * as React from "react"
import Svg, { Path } from "react-native-svg"
const BookmarkSVG = ({ color = "#020407", ...props }) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={22}
        height={22}
        fill="none"
        {...props}
    >
        <Path
            fill={color}
            d="m11 16.5-3.85 1.65c-.611.26-1.192.21-1.742-.148-.55-.36-.825-.867-.825-1.525V4.583c0-.504.18-.935.54-1.294a1.77 1.77 0 0 1 1.294-.539h9.166c.504 0 .936.18 1.296.539.359.36.538.79.538 1.294v11.894c0 .657-.275 1.165-.825 1.524-.55.36-1.13.41-1.742.149L11 16.5Zm0-2.017 4.583 1.971V4.584H6.417v11.87L11 14.484Zm0-9.9H6.417h9.166H11Z"
        />
    </Svg>
)
export default BookmarkSVG
