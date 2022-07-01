import { configureStore} from '@reduxjs/toolkit';
import carReducer from './features/carSlice'
import useReducer  from './features/userSlice';

export const store = configureStore({
    reducer: {
        counter : 'helo',
        car : carReducer ,
        user: useReducer,
    },
});