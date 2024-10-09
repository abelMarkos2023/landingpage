import React, { useState,createContext,useContext } from 'react';
import { createRoot } from 'react-dom/client';

const languages = ['JavaScript', 'Python'];


 const MyContext = createContext({lang:'javaScript'})


function App() {
  // implement Context here so can be used in child components


  
const [lang,setLang] = useState(languages[0])


const changeLang = () => {
setLang(prev => prev === languages[0] ? languages[1] : languages[0]);
}

  return (
  <MyContext.Provider value={{lang,changeLang}}>
   <MainSection />
  </MyContext.Provider>
   
  );
}

function MainSection() {

const {lang,changeLang} = useContext(MyContext)
  return (
    <div>
      <p id="favoriteLanguage">favorite programing language: {lang}</p>
      <button id="changeFavorite" onClick={changeLang}>toggle language</button>    </div>
  )
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);