import React from 'react';
import ActivityCard from './components/activityCard/activityCard';
import PersonalInfoCard from './components/personalInfoCard/personalInfoCard';
import Main from './pages/main';
import { applyMiddleware,createStore } from 'redux';
import { Provider } from 'react-redux';

import reducer from './state/reducers/reducer'

let store = createStore(reducer)

function App() {
  return (
        <Provider store={store}>
            <Main></Main>
        </Provider>
      

  );
}

export default App;
