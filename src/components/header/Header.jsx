import { NavLink, useNavigate } from "react-router-dom";
import argentBankLogo from "assets/argentBankLogo.png";
import { useDispatch, useSelector } from "react-redux";
import { getLoggedOut } from "redux/reducer/loginReducer.js";

/**
 * Composant représentant l'en-tête de la page.
 * @returns {JSX.Element} Élément JSX représentant le composant.
 */
const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLogged = useSelector((state) => state.login.connected);
  let firstName = useSelector((state) => state.profile.firstName);

  // Si le prénom n'est pas disponible dans le state, on le récupère depuis le stockage local
  if (localStorage.getItem("token") && !firstName) {
    firstName = localStorage.getItem("firstName");
  }

  /**
   * Gère la déconnexion de l'utilisateur.
   */
  const logout = () => {
    dispatch(getLoggedOut());
    navigate("/");
    console.log(getLoggedOut);
  };

  return (
    <section className="nav">
      <NavLink to={"/"} className="nav__logo">
        <img className="nav__image" src={argentBankLogo} alt="Logo" />
      </NavLink>
      {isLogged ? (
        <div className="nav__logged">
          <NavLink to={"/user"} className="nav__button">
            <i className="fa fa-user-circle nav__icon"></i>{firstName}
          </NavLink>
          <NavLink to={"/"} onClick={logout} className="nav__link">
            <i className="fa fa-sign-out"></i>Sign Out
          </NavLink>
        </div>
      ) : (
        <div>
          <NavLink to={"/login"} className="nav__link">
            <i className="fa fa-user-circle"></i>Sign In
          </NavLink>
        </div>
      )}
    </section>
  );
};

export default Header;
