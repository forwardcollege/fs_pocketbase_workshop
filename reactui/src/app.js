import React from 'react';
import { MantineProvider } from '@mantine/core';
import { ModalsProvider } from '@mantine/modals';
import { NotificationsProvider } from '@mantine/notifications';
import { BrowserRouter, Route, Navigate, Routes, useLocation } from "react-router-dom";

import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage'

const App = () => {
    return (
    <MantineProvider>
        <NotificationsProvider position='top-right' limit={3}>
            <ModalsProvider>
                <BrowserRouter>
                    <Routes>

                        <Route exact path="/login" element={LoginPage} />
                        <Route exact path="/signup" element={SignUpPage} />

                        <Route exact path="/" element={HomePage} />

                        
                    </Routes>
                </BrowserRouter>
            </ModalsProvider>
        </NotificationsProvider>
    </MantineProvider>
    );
}

export default App;
