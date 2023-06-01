import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import dataAccount from "data/dataMockedUserAccount.js";
import Register from 'components/form/Register.jsx';
import Account from "components/account/Accounts.jsx";
import { getDataProfile } from 'redux/reducer/userReducer.js';
import { getProfile } from 'data/dataApi.js';

import { getLoggedOut } from 'redux/reducer/loginReducer.js';

const Profile = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const token = useSelector((state) => state.login.token);

    React.useEffect(() => {
        const getProfileEl = async () => {
            const data = await getProfile(token);
            console.log(data);
            if (data !== "error") {
                dispatch(getDataProfile(data));
            }
            else {
                dispatch(getLoggedOut());
                navigate("/signIn");
            }
        };
        getProfileEl();
    }, [dispatch, navigate, token]);

    return (
        <main className="main bg-dark">
            <Register />
            <h2 className="sr-only">Accounts</h2>
            {dataAccount.map((acct) => (
                <Account key={acct.id} dataAccount={acct} />
            ))}
        </main>
    );
}

export default Profile;