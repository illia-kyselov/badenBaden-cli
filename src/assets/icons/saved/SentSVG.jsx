import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SentSVG = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={22}
        height={22}
        fill="none"
        {...props}
    >
        <Path
            fill="#fff"
            d="M18.641 2.953 3.551 7.984a.32.32 0 0 0-.026.6l5.546 2.377a.184.184 0 0 0 .18-.02l5.437-3.884c.168-.12.376.088.256.256L11.06 12.75a.182.182 0 0 0-.019.179l2.376 5.545a.32.32 0 0 0 .6-.023l5.031-15.092a.32.32 0 0 0-.407-.406Z"
        />
    </Svg>
)
export default SentSVG
