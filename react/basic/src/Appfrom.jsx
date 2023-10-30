import React , {useState} from 'react';
export default function Appfrom(){
    const [user, setUser ]=useState({name : '', email: ''});
    
    const handlerSubmit= (e) =>{
        e.preventDefault();
        console.log(user);
    } 

    const handleChange = (e) =>{
        const {name , value} = e.target;
        setUser({...user, [name] : value })
    }
    return (
        <form onSubmit={handlerSubmit}>
            <label htmlFor="name">이름 : </label>
            <input type="text" id ='name' name='name' value={user.name} 
                onChange={handleChange}
            /><br></br>
            <label htmlFor="email">이메일 : </label>
            <input type="email" id ='email' name='email'
                value={user.email} 
                onChange={handleChange}
            />
            <button>submit</button>
        </form>
    )
}