import React, { useEffect, useState } from 'react';
import AppRouter from './router/Router';
import AppLayout from './components/layout/AppLayout';
import FullLayout from './components/layout/FullLayout';
import { getCookie } from './utils/utils';
import { USER_TOKEN_COOKIES_KEY } from './constant/appConstants';
import { useDispatch, useSelector } from 'react-redux';
import { setAuthToken } from './redux/action/userAction';

const App = () => {

    const dispatch = useDispatch()
    const { authToken } = useSelector(state => state?.login)

    useEffect(() => {
        if (getCookie(USER_TOKEN_COOKIES_KEY)) {
            dispatch(setAuthToken(true))
        } else {
            dispatch(setAuthToken(false))
        }
    }, [])

    return (
        <div>
            {authToken ? (
                <AppLayout>
                    <AppRouter />
                </AppLayout>
            ) : (
                <FullLayout>
                    <AppRouter />
                </FullLayout>
            )}
        </div>
    );
};

export default App;