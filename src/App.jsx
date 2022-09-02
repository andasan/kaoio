import { useState, useEffect } from "react";
import "./App.css";
function App() {
  const [user, setUser] = useState(null);

  let faceio;
  useEffect(() => {
    faceio = new faceIO(import.meta.env.PUBLIC_ID);
  }, []);

  const handleSignIn = async () => {
    try {
      const response = await faceio.enroll({
        locale: "auto",
        payload: {
          email: import.meta.env.EMAIL,
          pin: import.meta.env.PIN
        }
      });

      console.log(`
        Unique Facial ID: ${response.facialId}
        Enrollment Date: ${response.timestamp}
        Gender: ${response.details.gender}
        Age Approximation: ${response.details.age}`
      );
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogIn = async () => {
    try {
      const response = await faceio.authenticate({ locale: "auto" });

      if(!!response.facialId){
        setUser(response)
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section>
      <h1>KAOIO</h1>
      {user ? (
        <>
          You are logged in!
        </>
      ) : (
        <>
          <button onClick={handleSignIn}>Sign-in</button>
          <button onClick={handleLogIn}>Log-in</button>
        </>
      )}
    </section>
  );
}

export default App;