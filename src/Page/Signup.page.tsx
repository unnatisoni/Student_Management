import React from "react";
import { memo } from "react";
import { Link } from "react-router-dom";
interface Props{
}
const Signup: React.FC<Props> = (props) => {
  return (
    <div className="flex flex-row justify-between">
    <div>
        This is Signup page 
        <Link to="./Login"><span className="text-blue-700">Login page</span></Link>
    </div>
    </div>
);
};

Signup.defaultProps = {
}

export default memo(Signup);