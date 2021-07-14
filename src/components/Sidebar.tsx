import React from "react";
import { memo } from "react";
interface Props{
}
const Sidebar: React.FC<Props> = (props) => {
  return (
    <div className="bg-gray-400 h-screen w-1/5">
        sidebar component
    </div>
);
};

Sidebar.defaultProps = {
}

export default memo(Sidebar);