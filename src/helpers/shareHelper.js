import { Platform, ActionSheetIOS, Share } from "react-native";

export const handleSendPress = (item) => {
    const shareMessage = `Check out "${item.name}"!
        ${item.description}
        Rating: ${item.rating} stars`;

    if (Platform.OS === "ios") {
        ActionSheetIOS.showShareActionSheetWithOptions(
            { message: shareMessage },
            (error) => console.log("Error:", error),
            (success, method) => {
                if (success) {
                    console.log("Shared via:", method);
                } else {
                    console.log("Share dismissed");
                }
            }
        );
    } else {
        Share.share({ message: shareMessage })
            .then((result) => {
                if (result.action === Share.sharedAction) {
                    console.log("Shared successfully");
                } else if (result.action === Share.dismissedAction) {
                    console.log("Share dismissed");
                }
            })
            .catch((error) => console.log("Error:", error));
    }
};
