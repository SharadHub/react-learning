import { useState } from "react"

export const MyForm = () => {
    const [form, setForm] = useState({
        name:"",
        email:"",
    });

    const [success, setSuccess] = useState(false);
    const [error, setError] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(prev => ({
            ...prev,
            [name]:value,
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!form.name.trim()){
            setError("Invalid name");
            setSuccess(false);
            return;
        }

        if(!form.email.includes("@")){
            setError("Invalid email");
            setSuccess(false);
            return;
        }
        console.log("Submitted data:", form);

        setError("");
        setSuccess(true);
    }
       

    return(
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            name="name"
            placeholder="Enter Your Name"
            value={form.name}
            onChange = {handleChange}
            />

            <input
            type="text"
            name="email"
            placeholder="Enter Your Email"
            value={form.email}
            onChange = {handleChange}
            />

            <button type="submit">Submit</button>

            {error && <p style={{color:"red"}}>{error}</p>}
            {success && <p style={{color:"green"}}>{success}</p>}
        </form>
    )
}