import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import dataAccount from "data/dataMockedUserAccount.js";
import CardName from "components/cardName/CardName.jsx";
import AccountCard from "components/account/AccountCard.jsx";
import { getDataProfile } from "redux/reducer/userReducer.js";
import { getProfile } from "data/dataApi.js";
import { getLoggedOut, stayLogged } from "redux/reducer/loginReducer.js";

const UserProfile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = useSelector((state) => state.login.token);

  useEffect(() => {
    // On verifie d'abord si le token est stocké dans le localStorage avec : 
    // localStorage.getItem('token')

    const storedToken = localStorage.getItem('token');
    if (storedToken) {// Si le token est dispo, 
      // le stocker à nouveau dans le loginReducer pour maintenir la connexion de l'utilisateur
      dispatch(stayLogged(storedToken));
    } else {
      // Si le token n'est pas dispo = soit le user n'est pas connecté, soit token supprimé
      dispatch(getLoggedOut());
      // alors  on redirige vers la page login
      navigate("/login");
    }

    const getProfileData = async () => {
      // la function utilise le token pour recuperer les donnees du profil
      const data = await getProfile(token);
      if (data !== "error") {
        // Si pas d'erreur =  les stocker dans le userReducer
        dispatch(getDataProfile(data));
      } else {
        // Sinon = déconnexion du user et le rediriger vers la page de connexion
        // token peut etre invalide ou a expiré !
        dispatch(getLoggedOut());
        navigate("/login");
      }
    };

    if (token) {
      // Si le token est dispo, on appelle la FN pour obtenir les données de profil
      getProfileData();
    }
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
