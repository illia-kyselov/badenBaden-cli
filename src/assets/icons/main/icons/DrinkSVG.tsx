import * as React from "react"
import Svg, { Path } from "react-native-svg"
const DrinkSVG = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={36}
        height={36}
        fill="none"
        {...props}
    >
        <Path
            stroke="#CDA568"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2.25}
            d="M13.5 24c.36 0 .637-.321 1.193-.963l5.53-6.415c2.84-3.291 4.26-4.938 3.63-6.28C23.223 9 21.031 9 16.648 9h-6.296C5.97 9 3.773 9 3.146 10.342c-.627 1.343.79 2.989 3.629 6.28l5.531 6.415c.554.642.833.963 1.193.963Zm0 0v9m-.75-24-.601-3.609a1.5 1.5 0 0 0-1.005-1.176L7.5 3m3.75 30h4.5"
        />
        <Path
            stroke="#CDA568"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2.25}
            d="M23.79 13.25A5.279 5.279 0 0 0 27.723 15 5.265 5.265 0 0 0 33 9.75c0-2.9-2.363-5.25-5.277-5.25A5.265 5.265 0 0 0 22.5 9"
        />
    </Svg>
)
export default DrinkSVG
