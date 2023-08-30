import React from 'react';
import AppHeader from '../header/app-header/app-header';
import Main from '../main/main';
import data from '../../utils/data';
import Popup from '../popup/popup';

function App() {

  const handleClosePopup = () => {
    console.log('close');
  }

  return (
    <div className="page">
      <AppHeader />
      <Main data={data}/>
      <Popup handleClose={handleClosePopup}>
        TEXT
      </Popup>
    </div>
  );
}

export default App;
