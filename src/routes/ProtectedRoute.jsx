// import React from "react";
// import { Navigate } from "react-router-dom";

// function ProtectedRoute({ children }) {
//     const { user } = 
//         JSON.parse(localStorage.getItem("auth"));
//         return auth.account ? <>{children}</> : <Navigate to="/login/" />;

// }

// export default ProtectedRoute;

import React from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
    try {
        const auth = localStorage.getItem("auth");
        
        if (!auth) {
            return <Navigate to="/login/" />;
        }

        const { user } = JSON.parse(auth);

        if (!user) {
            return <Navigate to="/login/" />;
        }

        return <>{children}</>;
    } catch (error) {
        // If there's any error parsing the auth data, redirect to login
        localStorage.removeItem("auth"); // Clear potentially corrupt data
        return <Navigate to="/login/" />;
    }
}

export default ProtectedRoute;