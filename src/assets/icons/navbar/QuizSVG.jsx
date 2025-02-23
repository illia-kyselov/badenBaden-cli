import * as React from "react";
import Svg, { Path } from "react-native-svg";

const QuizSVG = ({ color = "#fff", ...props }) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={34}
        height={34}
        fill="none"
        {...props}
    >
        <Path
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2.125}
            d="M14.813 3.74a3.088 3.088 0 0 1 4.374 0l1.43 1.432c.58.581 1.368.907 2.188.907h2.025a3.089 3.089 0 0 1 3.093 3.091l-.002 2.025c0 .821.326 1.608.907 2.188l1.43 1.431a3.09 3.09 0 0 1 0 4.373l-1.43 1.43a3.095 3.095 0 0 0-.907 2.189v2.024a3.088 3.088 0 0 1-3.091 3.093l-2.024-.002c-.822 0-1.608.326-2.19.907l-1.43 1.43a3.085 3.085 0 0 1-4.373 0l-1.43-1.43a3.088 3.088 0 0 0-2.188-.907H9.17a3.088 3.088 0 0 1-3.092-3.09v-2.025c0-.822-.325-1.608-.906-2.19l-1.43-1.43a3.088 3.088 0 0 1 0-4.373l1.43-1.43c.581-.58.907-1.368.907-2.188V9.17a3.088 3.088 0 0 1 3.09-3.092l2.024.001c.822 0 1.608-.326 2.189-.907l1.43-1.432Z"
        />
        <Path
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2.125}
            d="M14.167 12.75a2.834 2.834 0 1 1 5.217 1.53C18.537 15.598 17 16.853 17 18.417v.708m-.011 4.958H17"
        />
    </Svg>
);

export default QuizSVG;
