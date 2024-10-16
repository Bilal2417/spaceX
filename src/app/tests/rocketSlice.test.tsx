import { configureStore } from '@reduxjs/toolkit';
import rocketSlice, { addDetails } from '../../store/rocketSlice'; 
import { RootState } from '../../store/types'; 
import { describe, beforeEach, it, expect } from '@jest/globals';

describe('rocketSlice', () => {
    let store: ReturnType<typeof configureStore>;

    beforeEach(() => {
        store = configureStore({ reducer: { rocketSlice } });
    });

    it('should return the initial state', () => {
        const state = store.getState() as RootState;
        expect(state.rocketSlice.details).toBeNull();
    });

    it('should handle addDetails', () => {
        const mockRocketData = {
            id: '1',
            name: 'Falcon 1',
            description: 'First rocket',
            flickr_images: ['image1.jpg', 'image2.jpg'],
        };

        store.dispatch(addDetails(mockRocketData));
        const state = store.getState() as RootState; 
        expect(state.rocketSlice.details).toEqual(mockRocketData);
    });
});
