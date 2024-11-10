import React from 'react'
import SignupForm from '../../Components/SignupForm/SignupForm'
import { ImageHolder } from '../../utils/utils'
import "./SignUp.css"


export default function Signup() {
  return (
    <div>
         <div className="SignupPage">
            <div className="BannerContainer">
               <img src={ImageHolder()} alt="Banner" />


            </div>
            <div className="Formcontainer" style={{
            backgroundImage: `url(${ImageHolder()})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
        }}>

                <SignupForm/>
            </div>
        </div>
      
    </div>
  )
}
