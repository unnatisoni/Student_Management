import {FC, memo} from "react";
import { Link } from "react-router-dom";

interface Props{
}
const Dashboard: React.FC<Props> = (props) => {
  return (
    <div>
        this is dashboard page
        <Link to="/recordings"><span className="text-blue-700">Lecture recording</span></Link>
    </div>
);
};

Dashboard.defaultProps = {
}

export default memo(Dashboard);