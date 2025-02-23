import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import BrokeSVG from "../../assets/icons/game/BrokeSVG";
import DoneAllSVG from "../../assets/icons/game/DoneAllSVG";

export default function LevelItem({ level, onPress }) {
    let levelStyle = [styles.levelBox];
    let content = null;

    if (level.status === "open") {
        levelStyle.push(styles.levelOpen);
        content = <Text style={styles.levelNumber}>{level.id}</Text>;
    } else if (level.status === "locked") {
        levelStyle.push(styles.levelLocked);
        content = <BrokeSVG />;
    } else if (level.status === "done") {
        levelStyle.push(styles.levelDone);
        content = <DoneAllSVG />;
    }

    return (
        <TouchableOpacity
            style={levelStyle}
            onPress={() => onPress(level.id, level.status)}
        >
            {content}
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    levelBox: {
        width: 84,
        height: 84,
        alignItems: "center",
        justifyContent: "center",
    },
    levelOpen: {
        backgroundColor: "#CDA568",
    },
    levelLocked: {
        backgroundColor: "#CDA56833",
    },
    levelDone: {
        backgroundColor: "#76C253",
    },
    levelNumber: {
        fontFamily: "Montserrat",
        fontWeight: "900",
        fontSize: 22,
        color: "#000000",
    },
});
