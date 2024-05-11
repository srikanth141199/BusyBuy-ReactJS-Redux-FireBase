import { useState } from "react"
import "./SignUp.css"
import { createUserWithEmailAndPassword, getAuth, updateProfile } from "firebase/auth";
import { db} from "../../firebaseInit";
import { addDoc, collection } from "firebase/firestore";
import { useNavigate } from "react-router-dom";


const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");

    const auth = getAuth();
    const navigate = useNavigate();

    const handleSubmit = async (evt) => {
        evt.preventDefault();
        try {
            const userDetails = await createUserWithEmailAndPassword(auth, email, password);
            const user = userDetails.user;

            await updateProfile(user, {
                displayName : name
            })

            await addDoc(collection(db, 'user'), {
                name, email
            })

            console.log('User signed up successfully!');
            console.log(user);
            navigate("/signIn")
        } catch (error) {
            console.log(error)
        }
    };

    return (
        <>
            <div className="signin">
                <form className="signin">
                    <h2>Sign Up</h2>
                    <input
                        type="text"
                        className="signininput"
                        placeholder="Enter Name"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                    />
                    <input
                        type="email"
                        className="signininput"
                        placeholder="Enter Email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                    <input
                        type="password"
                        className="signininput"
                        placeholder="Enter Password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                    <button className="signingbtn" onClick={handleSubmit}>
                        Sign Up
                    </button>
                </form>
            </div>
        </>
    )
}

export default SignUp;