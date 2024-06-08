import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import { thunk } from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';
import { persistStore } from 'redux-persist';

import rootReducer from './reducers/rootReducer';
import { injectStore } from '~/utils/httpRequest';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
export const persistor = persistStore(store);

injectStore(store);

export default store;
