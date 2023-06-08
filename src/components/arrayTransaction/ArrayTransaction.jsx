import React, { useState } from 'react';

/**
 * Composant représentant un tableau de transactions.
 * @returns {JSX.Element} Élément JSX représentant le composant.
 */

const ArrayTransaction = () => {
    // Définition du state pour le tableau de transactions
  const [itemArray, setItemArray] = useState([
    {
        id: 1,
        date: "20 juin 2022",
        description: 'Golden Sun Bakery',
        amount: "$ 5.00",
        balance: '$ 2082.79',
        transactionType: "electronic",
        category: "food",
        notes: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        isOpen: false
      },
      {
        id: 2,
        date: '21 juin 2022',
        description: 'Golden Sun Bakery',
        amount: '$ 10.00',
        balance: '$ 2087.79',
        transactionType: "electronic",
        category: "food",
        notes: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        isOpen: false
      },
      {
        id: 3,
        date: '22 juin 2022',
        description: 'Golden Sun Bakery',
        amount: '$ 30.00',
        balance: '$ 2117.79',
        transactionType: "electronic",
        category: "food",
        notes: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        isOpen: false
      },
      {
        id: 4,
        date: '23 juin 2022',
        description: 'Golden Sun Bakery',
        amount: '$ 40.00',
        balance: '$ 2147.79',
        transactionType: "electronic",
        category: "food",
        notes: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        isOpen: false
      },
      {
        id: 5,
        date: '24 juin 2022',
        description: 'Golden Sun Bakery',
        amount: '$ 50.00',
        balance: '$ 2187.79',
        transactionType: "flower",
        category: "flower",
        notes: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        isOpen: false
      },
    
  ]);

   /**
   * Fonction pour basculer la valeur de `isOpen` pour une transaction donnée.
   * @param {number} id - L'ID de la transaction.
   */
  
  const toggle = (id) => {
    const changedItems = itemArray.map((item) =>
      item.id === id ? { ...item, isOpen: !item.isOpen } : item
    );
    setItemArray(changedItems);
  };

  return (
    <>
      <section className="table">
        <table className="table__content">
          <thead>
            <tr className="table__items">
              <th></th>
              <th>DATE</th>
              <th>DESCRIPTION</th>
              <th>AMOUNT</th>
              <th>BALANCE</th>
            </tr>
          </thead>
          <tbody>
            {itemArray.map((item) => (
              <React.Fragment key={item.id}>
                <tr className={`table__row ${item.isOpen ? 'open' : ''}`}>
                  <td>
                    <p className="table__chevron" onClick={() => toggle(item.id)}>
                      {item.isOpen ? (
                        <i className="fa fa-chevron-up"></i>
                      ) : (
                        <i className="fa fa-chevron-down"></i>
                      )}
                    </p>
                  </td>
                  <td>{item.date}</td>
                  <td>{item.description}</td>
                  <td>{item.amount}</td>
                  <td>{item.balance}</td>
                </tr>
                {item.isOpen && (
                  <tr className="table__details">
                    <td colSpan="5">
                      <div className="table__details">
                        <p>Transaction Type: {item.transactionType} </p>
                        <p>Category: {item.category} <i className=" fa fa-pencil pencil-icon" /></p>
                        <p>Notes: {item.notes} <i className=" fa fa-pencil pencil-icon" /></p>
                      </div>
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </section>
    </>
  );
};

export default ArrayTransaction;
