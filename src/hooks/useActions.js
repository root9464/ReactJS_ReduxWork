/* eslint-disable object-curly-spacing */
/* eslint-disable indent */
import { bindActionCreators } from '@reduxjs/toolkit';
import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { actions } from '../store/favorites/fovarites.slice';
const rootActions = {
    ...actions,
};
export const useActions = () => {
    const dispatch = useDispatch();
    return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch]);
};
