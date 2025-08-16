import { useRef } from 'react';
function App() {
  const userRef = useRef('');
  const passwordRef = useRef('');

  const handleForm = (event) => {
    event.preventDefault();
    const user = document.querySelector('#user').value;
    const password = document.querySelector('#password').value;
    console.log(user, password);
  };

  const handleFormRef = (event) => {
    event.preventDefault();
    const user = userRef.current.value;
    const password = passwordRef.current.value;
    console.log('handle Ref', user, password);
  };
  return (
    <>
      <h1>Uncontrolled Components in React JS</h1>
      <p>
        uncontrolled components let you get the value in input fields and forms
        by using /manipulating DOM
      </p>
      <hr />
      <h3>Making uncontrolled component using query selector</h3>
      <form action="" method="post" onSubmit={handleForm}>
        <input type="text" placeholder="Enter your name" id="userRef" />
        <br />
        <br />
        <input
          type="password"
          placeholder="Enter password here.."
          id="passwordRef"
        />
        <br />
        <br />
        <button>Submit</button>
      </form>
      <hr />
      <h3>Making uncontrolled component using useRef Hook</h3>
      <form action="" method="post" onSubmit={handleFormRef}>
        <input
          type="text"
          ref={userRef}
          placeholder="Enter your name"
          id="user"
        />
        <br />
        <br />
        <input
          type="password"
          ref={passwordRef}
          placeholder="Enter password here.."
          id="password"
        />
        <br />
        <br />
        <button>Submit</button>
      </form>
    </>
  );
}
export default App;
