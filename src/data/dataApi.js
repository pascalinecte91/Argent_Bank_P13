/**
 * Connecte un utilisateur avec son email et son mot de passe
 * @param {string} email 
 * @param {string} password 
 * @returns {Promise<Object>} Une promesse qui résout les données de réponse ou rejette avec une erreur
 */
const login = async (email, password) => {
  // Envoie une requête POST à l'API pour se connecter
  const response = await fetch("http://localhost:3001/api/v1/user/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email: email, password: password }),
  });
  // Récupère les données de la réponse
  const data = await response.json();
  // Si la connexion a réussi, renvoie les données
  if (data.status === 200) {
    return data;
  } else {
    return "error";
  }
};

/**
 * Obtient le profil d'un utilisateur avec un jeton
 * @param {string} token 
 * @returns {Promise<Object>} 
 */
const getProfile = async (token) => {
  // Envoie une requête POST à l'API pour obtenir le profil
  const response = await fetch("http://localhost:3001/api/v1/user/profile", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  console.log(response);
  // Récupère les données de la réponse
  const data = await response.json();
  // Si la requête a réussi, renvoie les données du profil
  if (data.status === 200) {
    return data.body;
  } else {
    return "error";
  }
};

/**
 * Met à jour le profil d'un utilisateur avec un jeton
 * @param {string} firstName 
 * @param {string} lastName 
 * @param {string} token 
 * @returns {Promise<Object>} 
 */
const updateProfile = async (firstName, lastName, token) => {
  // Envoie une requête PUT à l'API pour mettre à jour le profil
  const response = await fetch("http://localhost:3001/api/v1/user/profile", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ firstName: firstName, lastName: lastName }),
  });
  // Récupère les données de la réponse
  const data = await response.json();
  console.log(data);
  // Si la mise à jour a réussi, renvoie les données du profil mis à jour
  if (data.status === 200) {
    return data.body;
  } else {
    throw new Error("Échec de la mise à jour du profil");
  }
};

export { login, getProfile, updateProfile };
