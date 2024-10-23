import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface Character {
    name: string;
    image: string;
    wizard: boolean;
    house: string | null;
}

interface CharacterState {
    characters: Character[];
    loading: boolean;
    error: string | null;
}

const initialState: CharacterState = {
    characters: [],
    loading: false,
    error: null,
};

export const fetchCharacters = createAsyncThunk('characters/fetchCharacters', async () => {
    const response = await axios.get('https://hp-api.onrender.com/api/characters');
    return response.data;
});

const characterSlice = createSlice({
    name: 'characters',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCharacters.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchCharacters.fulfilled, (state, action) => {
                state.loading = false;
                state.characters = action.payload;
            })
            .addCase(fetchCharacters.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Falha ao carregar personagens';
            });
    },
});

export default characterSlice.reducer;
