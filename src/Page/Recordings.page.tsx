import React, { memo } from "react";
interface Props{
}
const Recordings: React.FC<Props> = (props) => {
  return (
    <div>
        this is recording page
    </div>
);
};

Recordings.defaultProps = {
}

export default memo(Recordings);