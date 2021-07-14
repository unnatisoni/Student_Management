import { stringify } from "querystring";
import React from "react";
import { memo } from "react";
import { useParams } from "react-router-dom";
interface Props{
}
const Lecture: React.FC<Props> = (props) => {
    const {lectureNumber, batchNumber} = useParams<any>();
  
  return (
    <div>
        This is lecture Page of {lectureNumber} of batch {batchNumber}

    </div>
);
};

Lecture.defaultProps = {
}

export default memo(Lecture);