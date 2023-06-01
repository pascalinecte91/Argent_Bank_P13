

const Accounts = ({dataAccount}) => {
    return (
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">{dataAccount.title}</h3>
            <p className="account-amount">${dataAccount.amount}</p>
            <p className="account-amount-description">{dataAccount.description}</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
    );
}

export default Accounts;