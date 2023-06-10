import React from 'react'

import dataAccount from 'data/dataMockedUserAccount.js';
import ArrayTransaction from 'components/arrayTransaction/ArrayTransaction.jsx';

/**
 * Composant React représentant une liste de transactions.
 */

const Transactions = () => {
    // Destructure pour extraire les 3 proprietes dans le [dataAccount]
    // ce qui me permet d utiliser les 3 var sans acceder à l objet et à ses prorpietes à chaque fois
  const { title, amount, description } = dataAccount[0]; 

  return (
    <>
        {/* 
        Schéma de déstructuration :
        +-------------------+
        |    dataAccount    |
        +-------------------+
        |       [0]         |
        +--------+----------+
                 |
       +-----------|------------+
       |           |            |
       |           |            |
  +--------v-----+  +--v---+    +---v-----+
  |    title    |  | amount |    | description |
  +-------------+  +--------+    +------------+
  |    Value    |  | Value  |    |    Value    |
  +-------------+  +--------+    +------------+
       |           |            |
       +-----------|------------+
                   |
       +-----------v-----------+
       |      Destructuring     |
       +-----------+-----------+
                   |
      +------------v------------+
      |  Variables/Identifiers   |
      +----------------------------+
      |          title             |
      |          amount            |
      |          description       |
      +----------------------------+
      */}
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
    