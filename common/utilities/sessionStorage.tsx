// import { useState, useEffect } from "react";

const SessionStorage = () => {
    const Auth = sessionStorage && sessionStorage.getItem("auth")
      ? sessionStorage.getItem("auth")
        : "";
    
    const parsedToken = JSON.parse(Auth as string)
    return parsedToken.auth
}

export default SessionStorage