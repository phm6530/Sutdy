import './App.css';
import Profile from './components/Profile';
import Avatar from './components/Avatar';


function AppProfile() {
  const test = function(e){ console.log(e); alert('click'); };
  return (
    <>  
    <button onClick={test}>button</button>
    <form onSubmit={test}></form>
     <Avatar image='/logo192.png'/>
      <Profile
        image='/logo192.png'
        name='hyunmi444n'
        title='FE-Engineer'
        isNew
      />
    <Profile
        image='/logo192.png'
        name='hyunmin'
        title='FE-Engineer'
        isNew
      />

    <Profile  
        image='/logo192.png'
        name='hyunmin'
        title='FE-Engineer'
      />
    </>
  );
}

export default AppProfile;
