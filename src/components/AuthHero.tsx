import React from "react";
import { useEffect } from "react";
interface Props{
}
const AuthHero: React.FC<Props> = (props) => {

    console.log("AuthHero rendering");
    useEffect(() => {
        console.log("AuthHero Rendering for thr first time");
    },[]);

  return (
     
    <div className="bg-black w-1/2 h-screen text-white">
        Logo will go here
        
    </div>
);
};

AuthHero.defaultProps = {
}

export default AuthHero;