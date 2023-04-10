import React from 'react';
import { Routes, Route } from "react-router-dom";
import Profile from '../pages/profile/Profile';


const AppRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path="/profile/:userId" element={<Profile />}/>
            </Routes>
        </div>
    );
};

export default AppRoutes;