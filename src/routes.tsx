import { Routes, Route } from 'react-router-dom';

import { Login } from './Login';
import { Dashboard } from './Dashboard';
import { SignUp } from './Signup';

export default function MainRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/signup" element={<SignUp />} />
        </Routes>
    )
}