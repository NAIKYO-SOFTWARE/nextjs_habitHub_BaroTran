'use client';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface WorkList {
    id: number;
    title: string;
    icon: string;
    bgColor: string;
    isChecked: boolean;
}
interface Checked {
    id: number;
    isChecked: boolean;
}
const initialState: { data: WorkList[] } = {
    data: [],
};

const workListSlide = createSlice({
    name: 'workList',
    initialState,
    reducers: {
        addWorkList: (state, action: PayloadAction<WorkList>) => {
            const workList = {
                id: action.payload.id,
                title: action.payload.title,
                icon: action.payload.icon,
                bgColor: action.payload.bgColor,
                isChecked: action.payload.isChecked,
            };
            state.data = [...state.data, workList];
        },
        changeChecked: (state, action: PayloadAction<Checked>) => {
            const updateData = state.data.map((work) => {
                return work.id === action.payload.id
                    ? { ...work, isChecked: action.payload.isChecked }
                    : work;
            });
            state.data = updateData;
            console.log(state.data);
        },
    },
});

const { actions, reducer } = workListSlide;
export const { addWorkList, changeChecked } = actions;
export default reducer;
