import * as React from "react";
import Svg, { Path } from "react-native-svg";

const BookmarkSVG = ({ color = "#fff", ...props }) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={34}
        height={34}
        fill="none"
        {...props}
    >
        <Path
            fill={color}
            d="m17 25.5-5.95 2.55c-.945.401-1.842.325-2.692-.23-.85-.554-1.275-1.34-1.275-2.355V7.083c0-.779.278-1.446.833-2a2.735 2.735 0 0 1 2-.833h14.167c.78 0 1.447.278 2.002.833.555.555.833 1.222.832 2v18.382c0 1.015-.425 1.8-1.275 2.355-.85.556-1.748.632-2.692.23L17 25.5Zm0-3.117 7.083 3.046V7.083H9.917V25.43L17 22.383Zm0-15.3H9.917h14.166H17Z"
        />
    </Svg>
);

export default BookmarkSVG;
