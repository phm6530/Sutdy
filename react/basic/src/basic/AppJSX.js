import './App.css';

function App() {
  const name = '현민';
  const list = ['a','b','c','dd'];
  return (
    <>
      <h1 className='test'>hi</h1>
      <h2>hi1</h2>
      {name}태그3
       <ul>
          {
            list.map((item) => {return <li>{item}</li>})
          }
       </ul>
       <img src="/favicon.ico" alt="" />
    </>
  );
}

export default AppJSX;
