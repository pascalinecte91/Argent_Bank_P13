import { NavLink } from "react-router-dom";

/**
 * Composant représentant une carte de compte.
 * @param {Object} props - Les propriétés du composant.
 * @param {Object} props.dataAccount - Les données du compte.
 * @param {string} props.dataAccount.title - Le titre du compte.
 * @param {number} props.dataAccount.amount - Le montant du compte.
 * @param {string} props.dataAccount.description - La description du compte.
 * @returns {JSX.Element} Élément JSX représentant le composant.
 */

const AccountCard = ({dataAccount}) => {
  return (
      <section className="accountCard">
        <div className="accountCard__content">
          <h3 className="accountCard__title">{dataAccount.title}</h3>
          <p className="accountCard__amount">${dataAccount.amount}</p>
          <p className="accountCard__description">{dataAccount.description}</p>
        </div>
        <div className="accountCard__content">
          <NavLink to="/transactions">
          <button className="accountCard__button">View transactions</button>
          </NavLink>
        </div>
      </section>
  );
}

export default AccountCard;