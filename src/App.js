import db from "./firebase";
import "./App.css";
import useDocument from "./hooks/hooks";
import { doc } from "firebase/firestore";
import { useState } from "react";
import Progress from "./Progress";
function App() {
   /*  const [loading, data, error] = useDocument(
        doc(db, "users", "HbOtTgCOdUm5WdRz0VaG")
    );
    const [donnes, setDonnes] = useState(5); */

    return (
        <div className='App'>
            <>
              {/*   <button onClick={() => setDonnes(donnes + 1)}>increment</button>
                <h3>{donnes}</h3>
                <h1>
                    {loading
                        ? "loading..."
                        : data
                        ? `Fetched user is : ${data.name}, He's ${data.age} `
                        : "user not found "}
                </h1> */}
                <Progress value = "15" max = "100" />
            </>
        </div>
    );
}

export default App;
