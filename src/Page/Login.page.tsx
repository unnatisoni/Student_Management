import {FC, memo} from "react";
import { Link } from "react-router-dom";
import AuthHero from "../components/AuthHero";
interface Props{
}
const Login: React.FC<Props> = (props) => {
  return (
  
        <div>
        This is login page
        Don't have a account <Link to="./Signup"><span className="text-blue-700">Signup page</span></Link>
        <Link to="/dashboard"><span className="text-blue-700">Dashboard Page</span></Link>
    </div>

    
);
};

Login.defaultProps = {
}

export default memo(Login);