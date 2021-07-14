import React from "react";
import { memo } from "react";
interface Props{
}
const NotFound: React.FC<Props> = (props) => {
  return (
        <div className="block text-center font-bold text-3xl">
            Page not found
        </div>
    
);
};

NotFound.defaultProps = {
}

export default memo(NotFound);