'use client'
const Login=()=>{
    return(
        <>
        <div className="loginpage">
            <h1>This is the Login Page</h1>
            <p>Pls SignIn</p>
            <button onClick={()=>SignIn()}>SignIn</button>
            <p>You are Signed in.</p>
            <button onClick={()=>SignOut()}>SignOut</button>   
        </div>
        </>
    )
}
export default Login;