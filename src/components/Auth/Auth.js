import React, {useState} from 'react';
import './Auth.css';

const Auth = (props) => {
    console.log(props); //do this to see what is being passed through when coding
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [login, setLogin] = useState(true);

    const title = () => {
        return login ? 'Login' : 'Signup'
        // if login is true, return login. If login is false, return signup
    }

    const button = () => {
        return !login ? 'Already registered? Login' : 'Not registered? Signup'
    }

    const buttonTwo = () => {
        return login ? 'Login' : 'Signup'
    }

    const loginToggle = (event) =>{
        // takes in an event so we can stop page from reloading on form submission
        event.preventDefault();

        setLogin(!login);
        // set login to the opposite of its curren tvalue

        setEmail('');
        setPassword('');
        setFirstName('');
        setLastName('');
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        let reqBody = login ? 
        {
            email: email,
            password: password
        }: {
            firstName : firstName,
            lastName : lastName,
            email: email,
            password: password
        }

        let url = login ? 'http://localhost:4000/user/login':'http://localhost:4000/user/register';
        console.log(url);

        fetch(url, {
            method: 'POST',
            body: JSON.stringify(reqBody),
            headers: new Headers({
                'Content-Type': 'application/json',
            })
        })
            .then(response => response.json())
            .then(json=> props.updateLocalStorage(json.token))
            .catch(err => console.log(err))


    }

    const signupFields = () => !login ?

    (<div>
        <label htmlFor='firstName'>First Name</label>
        <br/>
        <input type='text' id='firstName' value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
        <br/>
        <label htmlFor='lastName'>Last Name</label>
        <br/>
        <input type='text' id='lastName' value={lastName} onChange={(e) => setLastName(e.target.value)}/>
    </div>) :null;
    //if login in false, we want to show the additional fields. if login is true,, show nothing(null)

    return(
        <div>
            <form>
                <h1>{title()}</h1>
                {signupFields()}
                <label htmlFor='email'>Email:</label>
                <br/>
                <input type='text' id='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                <br />
                <label htmlFor='password'>Password:</label>
                <br />
                <input type='password' id='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
                <br/>
                <button type='submit' onClick={handleSubmit}>{buttonTwo()}</button>
                <br/>
                <button onClick={loginToggle}>{button()}</button>
            </form>
        </div>
    )
}

export default Auth;

/*
-if we take out onChange handler, the value is locked because the value is an empty string
-the onChange handler takes in an anonymous function that will set the state of our variacles to what we type in th einput
two-way binding: this is essentially a circuit. the data comes in and changes the state variable via setEmail/setPassword, and the state variable is tied to the input field via the value attribute
*/