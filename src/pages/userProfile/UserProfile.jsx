import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import dataAccount from "data/dataMockedUserAccount.js";
import CardName from "components/cardName/CardName.jsx";
import AccountCard from "components/account/AccountCard.jsx";
import { getDataProfile } from "redux/reducer/userReducer.js";
import { getProfile } from "data/dataApi.js";
import { getLoggedOut, stayLogged } from "redux/reducer/loginReducer.js";

/**
 * Composant du profil utilisateur
 * @returns {JSX.Element} Élément JSX représentant le profil utilisateur
 */

const UserProfile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = useSelector((state) => state.login.token);

  useEffect(() => {
     /**
     * Vérifie si l'utilisateur est connecté et récupère les données de profil
     * avec l'action :localStorage.getItem('token')
     */
    const storedToken = localStorage.getItem('token');
    //cette ligne recupere le token stocké dans le localStorage

    if (storedToken) {// Si 1 token est trouvé donc pas null, 
      // le code sera executé et le token sera stocké dans le loginreducer 
      //avec l'action (stayLogged(storedToken)
      dispatch(stayLogged(storedToken));
    } else {
      // Si pas de token l user sera deconnecté avec l'action getLoggedOut
      dispatch(getLoggedOut());
      // et redirigé vers la page login
      navigate("/login");
    }

    const getProfileData = async () => {
      // fn definit pur recuperer les donnees user en utilisant le token
      const data = await getProfile(token);
      if (data !== "error") {
        // Si pas d'erreur =  les donnees seront stockees dans le userReducer
        // en utilisant la fn getDataProfile(data)
        dispatch(getDataProfile(data));
      } else {
        // Sinon = déconnexion du user et le rediriger vers la page de connexion
        // token peut etre invalide ou a expiré !
        dispatch(getLoggedOut());
        navigate("/login");
      }
    };

    if (token) {
      // Si le token est dispo donc pas null , on appelle la FN pour obtenir les données de profil
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
