import React from 'react'

import dataAccount from 'data/dataMockedUserAccount.js';
import ArrayTransaction from 'components/arrayTransaction/ArrayTransaction.jsx';

const Transactions = () => {
  const { title, amount, description } = dataAccount[0]; // Destructurez les propriétés du premier objet

  return (
    <>
    <section className="transaction">
      <h3 className="transaction__title">{title}</h3>
      <p className="transaction__amount">$ {amount}</p>
      <p className="transaction__desc">{description}</p>
    </section>
       <ArrayTransaction /> 
       </>
  );
};

export default Transactions;