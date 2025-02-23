export const parseCoordinates = (coordinates) => {
    if (!coordinates) return null;

    try {
        const [latStr, lonStr] = coordinates.split(", ");
        const latitude = parseFloat(latStr);
        const longitude = parseFloat(lonStr);

        if (isNaN(latitude) || isNaN(longitude)) {
            throw new Error("Invalid coordinates format");
        }

        return { latitude, longitude };
    } catch (error) {
        console.error("Error parsing coordinates:", error);
        return null;
    }
};
