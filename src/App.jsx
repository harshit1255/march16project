import { useState } from "react";
import "./app.css";

function App() {
  let [email, setEmail] = useState("");
  let [pass, setPass] = useState("");
  let [confirmpass, setConfirmpass] = useState("");
  const emailpattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  let emailverified = emailpattern.test(email);
  let passwordverified = pass.length>8;
  let confirmverified = pass===confirmpass && confirmpass.length>=8;
 function reset()
 {
  
  setEmail('');
  setPass('');
  setConfirmpass('');
 }
  function submit(e)
  { e.preventDefault();
    if(emailverified && passwordverified && confirmverified)
    {
      alert('user has been creatd');
      reset();
    }
    else
    {
      alert('Invalid data')
    }
    
  }
  return (
    <form onSubmit={submit}>
      <div>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className={(emailverified?'green':'red')} placeholder="email"></input>
        {emailverified ? null : <p>*invalid email format</p>}
      </div>
      <div>
        <input placeholder="password"
          type="password" value={pass}
          onChange={(e) => setPass(e.target.value)} className={(passwordverified?'green':'red')}
        ></input>
        {passwordverified?null: <p>*password must be at least 8 characters</p>}
      </div>
      <div>
        <input
          type="password" placeholder="confirm pass" value={confirmpass}
          onChange={(e) => setConfirmpass(e.target.value)} className={confirmverified?'green':'red'}
        ></input>
        {confirmverified? null : (
          <p>*password do not match</p>
        )}
        
      </div>
      <button>Signup</button>
    </form>
  );
}
export default App;
