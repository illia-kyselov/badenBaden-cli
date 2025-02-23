import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

const PartySVG = ({ color = "#fff", ...props }) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={34}
        height={34}
        fill="none"
        {...props}
    >
        <G clipPath="url(#a)">
            <Path
                stroke={color}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.429}
                d="M4.979 17.316a5.003 5.003 0 0 1 3.545-.51m1.992-6.412a5.1 5.1 0 0 1-.802-3.521m6.387-5.124a11.463 11.463 0 0 0 .316 7.965M28.78 32.057 12.556 26.01a3.036 3.036 0 0 1-1.166-4.979l10.176-10.175a3.06 3.06 0 0 1 5.003 1.287l6.022 16.223a2.963 2.963 0 0 1-3.812 3.691ZM2.429 9.18a1.214 1.214 0 1 0 0-2.429 1.214 1.214 0 0 0 0 2.429Z"
            />
        </G>
        <Defs>
            <ClipPath id="a">
                <Path fill="#fff" d="M0 0h34v34H0z" />
            </ClipPath>
        </Defs>
    </Svg>
);

export default PartySVG;
