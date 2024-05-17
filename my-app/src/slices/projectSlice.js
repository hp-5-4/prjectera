import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    projectData: null,
    loading: false,
    error: null
};

const projectSlice = createSlice({
    name: "project",
    initialState,
    reducers: {
        setProjectData(state, action) {
            state.projectData = action.payload;
        },
        setLoading(state, action) {
            state.loading = action.payload;
        },
        setError(state, action) {
            state.error = action.payload;
        }
    }
});

export const { setProjectData, setLoading, setError } = projectSlice.actions;

export default projectSlice.reducer;
