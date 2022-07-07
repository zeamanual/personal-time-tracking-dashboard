import React from 'react';
import ActivityCard from './components/activityCard/activityCard';
import PersonalInfoCard from './components/personalInfoCard/personalInfoCard';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <PersonalInfoCard></PersonalInfoCard>
        <ActivityCard></ActivityCard>
      </header>
    </div>
  );
}

export default App;
