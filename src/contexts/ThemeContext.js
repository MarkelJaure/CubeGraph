import React from "react";

const defaultValue = {
    theme: 'light',
    setTheme: () => { }
}

export default React.createContext(defaultValue);