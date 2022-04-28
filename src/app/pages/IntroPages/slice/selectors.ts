import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from '.';

const selectSlice = (state: RootState) => state.introSlice || initialState;

export const selectIntroSlice = createSelector([selectSlice], state => state);
