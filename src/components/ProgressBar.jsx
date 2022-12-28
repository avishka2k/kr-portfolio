import React from "react";

function ProgressBar(props) {
  return (
    <div>
      <div className="flex flex-col gap-2 pt-3">
        <p className=" text-sm">{props.skillName}</p>
        <div className="bg-gray rounded">
          <div className={`bg-blue h-2 ${props.percentage} rounded`}></div>
        </div>
      </div>
    </div>
  );
}

export default ProgressBar;
