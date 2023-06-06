import { NavLink, useNavigate } from "react-router-dom";
import argentBankLogo from "assets/argentBankLogo.png";
import { useDispatch, useSelector } from "react-redux";
import { getLoggedOut } from "redux/reducer/loginReducer.js";


const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLogged = useSelector((state) => state.login.connected);
  let firstName = useSelector((state) => state.profile.firstName);
  let lastName = useSelector((state) => state.profile.lastName);

  console.log(firstName, lastName);

  if (localStorage.getItem("token") && !firstName) {
    firstName = localStorage.getItem("firstName");
  }

  const logout = () => {
    dispatch(getLoggedOut());
    navigate("/");
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
