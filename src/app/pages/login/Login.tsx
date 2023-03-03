import { useState } from "react"

export const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


const handleEntrar=()=>{
    console.log(email,password)

}

      return(
        <div>
            <form action="">
                <label htmlFor="">
                    <span>Email</span>
                    <input value={email} onChange={e => setEmail(e.target.value)} />
                </label>

                <label htmlFor="">
                    <span>senha</span>
                    <input value={password} onChange={e => setPassword(e.target.value)} type="password"/>
                </label>
                <button type="button" onClick={handleEntrar}>entrar</button>
            </form>
        </div>
    );
}