import React, { useContext } from 'react';
import './App.css';
import { DarkModeConText, DarkModeProvider } from './basic/context/DarkModeContext';
// import { DarkModeConText } from './basic/context/DarkModeContext';
// import { DarkModeContext, DarkModeProvider } from './context/DarkModeContext';

export default function AppTheme() {
  return (
    <DarkModeProvider>
      <Header />
      <Main />
      <Footer />
    </DarkModeProvider>
  );
}

function Header() {
  return <header className='header'>Header</header>;
}

function Main() {
  return (
    <main>Main
      <Profile />
      <Products />
    </main>
  );
}

function Profile() {
  return (
    <div>
      Profile
      <User />
    </div>
  );
}

function User() {
  return <div>User</div>;
}

function Products() {
  return (
    <div>
      Products<ProductDetail/>
    </div>
  );
}

function ProductDetail() {
const {DarkMode, toggleDarkMode} = useContext(DarkModeConText);
console.log(DarkMode)
  return (
    <div>
    ProDuct Detail
    <p>DarkMode : <span>{DarkMode === true ? '켜짐': '꺼짐'}</span> </p>
    <button onClick={()=> toggleDarkMode()}>Toggle</button>
    <ToggleButton theme={DarkMode} mode={toggleDarkMode}/>
    </div>
  );
}

function ToggleButton({theme , mode }){
    return(
        <>
            <div>토글 {theme.toString()}</div>
            <div className={`moveButton ${theme}`} onClick={()=>mode()}>
                <span></span>
            </div>
        </>
    )
}

function Footer() {
  return <footer className='footer'>Footer</footer>;
}
