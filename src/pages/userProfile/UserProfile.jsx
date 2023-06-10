import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import dataAccount from "data/dataMockedUserAccount.js";
import CardName from "components/cardName/CardName.jsx";
import AccountCard from "components/account/AccountCard.jsx";
import { getDataProfile } from "redux/reducer/userReducer.js";
import { getProfile } from "data/dataApi.js";
import { getLoggedOut } from "redux/reducer/loginReducer.js";

const UserProfile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = useSelector((state) => state.login.token);

  React.useEffect(() => {
    const getProfileEl = async () => {
      const data = await getProfile(token);
      //console.log("data:", data);
      if (data !== "error") {
        dispatch(getDataProfile(data));
      } else {
        dispatch(getLoggedOut());
        navigate("/login");
      }
    };
    getProfileEl();
  }, [dispatch, navigate, token]);

  return (
    <section>
      <CardName />
      <aside className="account">
        {dataAccount.map((acct) => (
          <AccountCard key={acct.id} dataAccount={acct} />
        ))}
      </aside>
    </section>
  );
};

export default UserProfile;
