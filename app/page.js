'use client'
import Image from "next/image";
import styles from "./page.module.css";
import Login from "./login/page";
import {signIn,signOut,useSession} from "next-auth/react";

export default function Home() {
  const {data:session}=useSession();
  console.log(session);

  if(session){
    return(
      <>
       <p>You are Logined in as {session.user.email}</p>
       <button onClick={()=>signOut()}>Logout</button>
       <img src ={session.user.image}></img>
      </>
    )
  }
  return (
   <div className={styles.page}>
    <div className="form">
       <p>Please Login in</p>
       <button onClick={()=>signIn()}>Login</button>
    </div>
    </div>
  );
}
