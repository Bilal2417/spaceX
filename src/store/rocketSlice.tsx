import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Rocket {
    id: string;
    name: string;
    description: string;
    flickr_images: string[];

}

interface RocketState {
    details: Rocket | null; 
}

const initialState: RocketState = {
    details: null,
};

const rocketSlice = createSlice({
    name: "rocketSlice",
    initialState,
    reducers: {
        addDetails: (state, action: PayloadAction<Rocket>) => {
            state.details = action.payload; 
        },
    },
});

export const { addDetails } = rocketSlice.actions;
export default rocketSlice.reducer;
