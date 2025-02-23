import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    levels: [
        {
            id: 1,
            name: "Traditional German Dish",
            description:
                "This classic dish consists of a breaded and fried meat cutlet...",
            options: ["Schnitzel", "Wiener Würstchen", "Sauerkraut"],
            correctIndex: 0,
            status: "open",
        },
        {
            id: 2,
            name: "Classic Black Forest Cake",
            description:
                "This famous dessert from the Black Forest region consists of...",
            options: ["Schwarzwälder Kirschtorte", "Apfelstrudel", "Sachertorte"],
            correctIndex: 0,
            status: "locked",
        },
        {
            id: 3,
            name: "Traditional German Sausage",
            description:
                "This beloved sausage is made from pork, beef, or veal and seasoned...",
            options: ["Bratwurst", "Leberwurst", "Bockwurst"],
            correctIndex: 0,
            status: "locked",
        },
        {
            id: 4,
            name: "Famous German Soup",
            description:
                "This hearty soup is made from a combination of potatoes, leeks...",
            options: ["Kartoffelsuppe", "Erbsensuppe", "Borscht"],
            correctIndex: 0,
            status: "locked",
        },
    ],
};

const quizSlice = createSlice({
    name: "quiz",
    initialState,
    reducers: {
        completeLevel: (state, action) => {
            const { levelId } = action.payload;
            const currentLevel = state.levels.find((lvl) => lvl.id === levelId);
            if (currentLevel && currentLevel.status === "open") {
                currentLevel.status = "done";

                const nextLevel = state.levels.find((lvl) => lvl.id === levelId + 1);
                if (nextLevel && nextLevel.status === "locked") {
                    nextLevel.status = "open";
                }
            }
        },
    },
});

export const { completeLevel } = quizSlice.actions;
export default quizSlice.reducer;
