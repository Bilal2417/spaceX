// types.ts
export interface Rocket {
    id: string;
    name: string;
    description: string;
    flickr_images: string[];
}

export interface RocketState {
    details: Rocket | null;
}

export interface RootState {
    rocketSlice: RocketState;
}
