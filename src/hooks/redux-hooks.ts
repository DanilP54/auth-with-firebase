import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '../store/slices';
import type { TypedUseSelectorHook } from 'react-redux'

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector


