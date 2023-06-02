const AccountCard = ({dataAccount}) => {
  return (
      <section className="accountCard">
        <div className="accountCard__content">
          <h3 className="accountCard__title">{dataAccount.title}</h3>
          <p className="accountCard__amount">${dataAccount.amount}</p>
          <p className="accountCard__description">{dataAccount.description}</p>
        </div>
        <div className="accountCard__content">
          <button className="accountCard__button">View transactions</button>
        </div>
      </section>
  );
}

export default AccountCard;