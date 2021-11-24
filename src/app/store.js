import { configureStore } from '@reduxjs/toolkit';

import { cosunoApi } from '../services/cosunoApi';

export default configureStore({
  reducer: {
    [cosunoApi.reducerPath]: cosunoApi.reducer,
  },
});