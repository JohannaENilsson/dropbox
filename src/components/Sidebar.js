import React, { useState } from "react";
import { Link } from "react-router-dom";

import UploadFile from "../actions/UploadFile";
import AddNewFolder from "../actions/AddNewFolder";

export default function Sidebar({ token, getFiles, shouldStarListShow, returnFromStarList }) {
  const [addFolderPopUp, setAddFolderPopUp] = useState(false);

  const handleAddFolder = () => {
    setAddFolderPopUp(true);
  };

  function clickShowStarred() {
    shouldStarListShow("show some stars")
  }

  return (
    <div>
      <div>
        <h2 className="sidebarTitle">Menu</h2>
        <ul className="ulMenuContainer">
          <li>
            <Link to={"/home"} className="homeLinkSidebar" onClick={() => returnFromStarList()}>
              Home
            </Link>
          </li>
          <li>
            <UploadFile token={token} getFiles={getFiles} />
          </li>
          <li>
            <AddNewFolder token={token} onClick={handleAddFolder} getFiles={getFiles}/>
          </li>
          <li
          className="showStarsP"
          onClick={clickShowStarred}>
          Show starred list
          </li>
        </ul>
      </div>
    </div>
  );
}
