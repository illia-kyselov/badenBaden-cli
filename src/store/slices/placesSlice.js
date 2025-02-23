import { createSlice } from "@reduxjs/toolkit";

function createPlace(id, name, image, description, rating, coordinates) {
    return {
        id,
        name,
        image,
        description,
        rating,
        coordinates,
    };
}

const initialState = {
    categories: [
        {
            name: "Gourmet Dining",
            places: [
                createPlace(
                    "g1",
                    "Le Jardin de France",
                    require('../../assets/locations/GourmetDining/LeJardindeFrance.png'),
                    "A Michelin-starred restaurant offering exquisite French cuisine in an elegant setting.",
                    4.5,
                    "48.7623° N, 8.2256° E"
                ),
                createPlace(
                    "g2",
                    "Maltes Hidden Kitchen",
                    require('../../assets/locations/GourmetDining/MaltesHiddenKitchen.png'),
                    "A unique restaurant where the chef creates a surprise menu based on seasonal ingredients.",
                    4.8,
                    "48.7620° N, 8.2250° E"
                ),
                createPlace(
                    "g3",
                    "Wintergarten im Brenners Park-Hotel",
                    require('../../assets/locations/GourmetDining/WintergartenimBrennersPark-Hotel.png'),
                    "Offers Mediterranean dishes with a focus on local ingredients in a luxurious atmosphere.",
                    4.8,
                    "48.7625° N, 8.2258° E"
                ),
                createPlace(
                    "g4",
                    "RIZZI The Restaurant",
                    require('../../assets/locations/GourmetDining/RIZZITheRestaurant.png'),
                    "Known for its eclectic menu combining sushi and schnitzel, set in a stylish environment with modern art.",
                    4.2,
                    "48.7627° N, 8.2259° E"
                ),
                createPlace(
                    "g5",
                    "Heine's Wine & Dine",
                    require('../../assets/locations/GourmetDining/HeinesWineDine.png'),
                    "Offers a seasonal tasting menu paired with wines in a cozy atmosphere.",
                    5.0,
                    "48.7628° N, 8.2260° E"
                ),
            ],
        },
        {
            name: "Casual Eats",
            places: [
                createPlace(
                    "c1",
                    "Weinstube Baldreit",
                    require('../../assets/locations/CasualEats/WeinstubeBaldreit.png'),
                    "A traditional wine tavern offering tasty German dishes and a variety of local wines.",
                    4.5,
                    "48.7650° N, 8.2267° E"
                ),
                createPlace(
                    "c2",
                    "Monte Christo",
                    require('../../assets/locations/CasualEats/MonteChristo.png'),
                    "A Spanish tapas bar known for its authentic dishes and lively atmosphere.",
                    4.6,
                    "48.7655° N, 8.2272° E"
                ),
                createPlace(
                    "c3",
                    "87 Mamma Lina",
                    require('../../assets/locations/CasualEats/87MammaLina.png'),
                    "An Italian restaurant offering Neapolitan pizzas and seafood dishes in a cozy setting.",
                    4.4,
                    "48.7643° N, 8.2276° E"
                ),
                createPlace(
                    "c4",
                    "Café König",
                    require('../../assets/locations/CasualEats/CaféKönig.png'),
                    "A historic café known for its pastries and traditional German breakfast options.",
                    4.5,
                    "48.7648° N, 8.2252° E"
                ),
                createPlace(
                    "c5",
                    "Trinkhalle Café Bar Garden",
                    require('../../assets/locations/CasualEats/TrinkhalleCaféBarGarden.png'),
                    "Offers light meals and drinks in a historic arcade with a beautiful garden.",
                    4.0,
                    "48.7644° N, 8.2259° E"
                ),
            ],
        },
        {
            name: "Bars & Lounges",
            places: [
                createPlace(
                    "b1",
                    "Roomers Rooftop Bar",
                    require('../../assets/locations/Bars/RoomersRooftopBar.png'),
                    "A stylish rooftop bar offering panoramic views of the city and a wide selection of cocktails.",
                    4.5,
                    "48.7641° N, 8.2268° E"
                ),
                createPlace(
                    "b2",
                    "Trinkhalle Café Bar Garden",
                    require('../../assets/locations/Bars/TrinkhalleCaféBarGarden.png'),
                    "A light bar in a beautiful garden offering coffee and cocktails.",
                    4.0,
                    "48.7644° N, 8.2259° E"
                ),
                createPlace(
                    "b3",
                    "Casino Baden-Baden Bar",
                    require('../../assets/locations/Bars/CasinoBaden-BadenBar.png'),
                    "A luxurious bar at the casino offering elegant cocktails and classic drinks.",
                    4.6,
                    "48.7652° N, 8.2234° E"
                ),
                createPlace(
                    "b4",
                    "Bärenbar",
                    require('../../assets/locations/Bars/Bärenbar.png'),
                    "A cozy bar with a selection of drinks in traditional Swiss style.",
                    4.3,
                    "48.7646° N, 8.2231° E"
                ),
                createPlace(
                    "b5",
                    "Kupferkanne",
                    require('../../assets/locations/Bars/Kupferkanne.png'),
                    "A bar with a warm atmosphere serving classic cocktails and specialized drinks.",
                    4.5,
                    "48.7642° N, 8.2260° E"
                ),
            ],
        },
        {
            name: "Local Delights",
            places: [
                createPlace(
                    "l1",
                    "Gasthaus zum Ritter",
                    require('../../assets/locations/Local/GasthauszumRitter.png'),
                    "A traditional German tavern serving local dishes such as sausages and roasted meats.",
                    4.4,
                    "48.7657° N, 8.2235° E"
                ),
                createPlace(
                    "l2",
                    "Hofbräuhaus Baden-Baden",
                    require('../../assets/locations/Local/HofbräuhausBaden-Baden.png'),
                    "An authentic Bavarian restaurant offering classic German dishes like schnitzel and pretzels.",
                    4.6,
                    "48.7633° N, 8.2250° E"
                ),
                createPlace(
                    "l3",
                    "Baden-Baden Wurstküche",
                    require('../../assets/locations/Local/Baden-BadenWurstküche.png'),
                    "A traditional German kitchen with a focus on local sausages and roasted meats.",
                    4.7,
                    "48.7645° N, 8.2258° E"
                ),
                createPlace(
                    "l4",
                    "Café de Paris",
                    require('../../assets/locations/Local/CafédeParis.png'),
                    "A French bistro offering local dishes combined with French delicacies.",
                    4.5,
                    "48.7630° N, 8.2265° E"
                ),
                createPlace(
                    "l5",
                    "Zum Adler",
                    require('../../assets/locations/Local/ZumAdler.png'),
                    "A cozy restaurant offering a variety of local dishes and desserts.",
                    4.3,
                    "48.7640° N, 8.2251° E"
                ),
            ],
        },
    ],

    selectedCategory: null,

    selectedPlace: null,

    savedPlaces: [],

    lastRandomPlaceId: null,
};

const placesSlice = createSlice({
    name: "places",
    initialState,
    reducers: {
        setSelectedCategory(state, action) {
            state.selectedCategory = action.payload;
        },
        addToSavedPlaces(state, action) {
            const existing = state.savedPlaces.find(
                (item) => item.id === action.payload.id
            );
            if (!existing) {
                state.savedPlaces.push(action.payload);
            }
        },
        removeFromSavedPlaces(state, action) {
            state.savedPlaces = state.savedPlaces.filter(
                (item) => item.id !== action.payload
            );
        },
        getRandomPlaceByCategory(state, action) {
            const categoryName = action.payload;
            const category = state.categories.find(
                (cat) => cat.name === categoryName
            );
            if (!category) return;

            const place = getRandomPlaceWithoutRepeating(
                category.places,
                state.lastRandomPlaceId
            );

            state.selectedPlace = place;
            state.lastRandomPlaceId = place?.id ?? null;
        },
        getRandomPlaceFromRandomCategory(state) {
            const randomCategory =
                state.categories[
                Math.floor(Math.random() * state.categories.length)
                ];

            const place = getRandomPlaceWithoutRepeating(
                randomCategory.places,
                state.lastRandomPlaceId
            );

            state.selectedPlace = place;
            state.lastRandomPlaceId = place?.id ?? null;
        },
    },
});

function getRandomPlaceWithoutRepeating(placesArray, lastId) {
    if (!placesArray?.length) return null;

    if (placesArray.length === 1) {
        return placesArray[0].id === lastId ? null : placesArray[0];
    }

    let newPlace;
    do {
        newPlace = placesArray[Math.floor(Math.random() * placesArray.length)];
    } while (newPlace.id === lastId);

    return newPlace;
}

export const {
    setSelectedCategory,
    addToSavedPlaces,
    removeFromSavedPlaces,
    getRandomPlaceByCategory,
    getRandomPlaceFromRandomCategory,
} = placesSlice.actions;

export default placesSlice.reducer;
