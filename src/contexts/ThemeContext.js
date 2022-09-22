import React from "react";
import { LIGHT } from "../components/lib/Constants";

const defaultValue = {
    theme: LIGHT,
    setTheme: () => { }
}

export default React.createContext(defaultValue);