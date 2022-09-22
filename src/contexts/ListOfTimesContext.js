import React from "react";

const defaultValue = {
    listOfTimes: [],
    handleAddTime: () => { },
    handleDeleteTime: () => { },
    handlePlus2Time: () => { },
    handleDNFTime: () => { },
    handleDeleteAllTimes: () => { },
}

export default React.createContext(defaultValue);