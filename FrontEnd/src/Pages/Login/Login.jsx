import React,{useState,useEffect} from 'react'
import LoginForm from '../../Components/LoginForm/LoginForm'
import "./Login.css"
import { ImageHolder } from '../../utils/utils'


export default function Login() {
  return (
    <div>
        <div className="LoginPage">
            <div className="BannerContainer">
               <img src={ImageHolder()} alt="Banner" />


            </div>
            <div className="Formcontainer" style={{
            backgroundImage: `url(${ImageHolder()})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
        }}>

                <LoginForm/>
            </div>
        </div>
      
    </div>
  )
}
