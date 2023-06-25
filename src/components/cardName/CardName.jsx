import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateDataProfile } from 'redux/reducer/userReducer.js';
import { updateProfile } from 'data/dataApi.js';

/**
 * Composant représentant la carte du nom
 * et permet de le modifier en utilisant un formulaire
 * @returns {JSX.Element} Élément JSX représentant le composant.
 */
const CardName = () => {
  const dispatch = useDispatch();

  let firstName = useSelector((state) => state.profile.firstName) || localStorage.getItem("firstName");
  let lastName = useSelector((state) => state.profile.lastName) || localStorage.getItem("lastName");

  /**
   * Fonction de soumission du formulaire.
   * @param {Event} e - L'événement de soumission du formulaire.
   */
  const handleSubmit = async (e) => {
    e.preventDefault();
    //reinitialise la valeur du 1er et 2 eme champs à 1 string vide
    e.target[0].value = '';
    e.target[1].value = '';
    console.log(`Submitting new values: ${firstName}, ${lastName}`);

    try {
      //recup le token du localStorage avec la clé token avec methode
      const token = localStorage.getItem("token");

      // appelle fn updateProfile avec les 3 param
      const updatedProfile = await updateProfile(firstName, lastName, token);
      console.log('Profile updated:', updatedProfile);
      dispatch(updateDataProfile({
        // et met à jour avec les nouvelles valeurs
        firstName: updatedProfile.firstName,
        lastName: updatedProfile.lastName,
        updatedAt: updatedProfile.updatedAt,
      }));
    } catch (error) {
      console.error('Failed to update profile:', error);
      // Gérez l'erreur de mise à jour du profil
    }
  };

  React.useEffect(() => {
    editForm(false);
  }, []);

  /**
   * Fonction pour activer ou désactiver le formulaire d'édition.
   * @param {boolean} edit - Indique si le formulaire d'édition doit être activé ou désactivé.
   */
  
  const editForm = (edit) => {
    if (edit) {
      document.querySelectorAll(".edit").forEach((element) => {
        element.classList.remove("d-none");
      });
      document.querySelectorAll(".view").forEach((element) => {
        element.classList.add("d-none");
      });
    } else {
      document.querySelectorAll(".edit").forEach((element) => {
        element.classList.add("d-none");
      });
      document.querySelectorAll(".view").forEach((element) => {
        element.classList.remove("d-none");
      });
    }
  };

  return (
    <div className="card">
      <h1 className="edit">Welcome back</h1>
      <div className="edit">
        <form onSubmit={handleSubmit} id="form">
          <div className="form-group">
            <div className="input-wrapper">
              <input
                type="text"
                id="firstName"
                onChange={(e) => (firstName = e.target.value)}
                placeholder={firstName}
              />
            </div>
            <div className="input-wrapper">
              <input
                type="text"
                id="lastName"
                onChange={(e) => (lastName = e.target.value)}
                placeholder={lastName}
              />
            </div>
          </div>
        </form>
        <div className="button-group">
          <button
            type="submit"
            form="form"
            className="submit-button"
            onClick={() => editForm(false)}
          >
            Save
          </button>
          <button onClick={() => editForm(false)}>Cancel</button>
        </div>
      </div>
      <h1 className="view">
        Welcome back<br />
        <span className="card__name">{firstName} {lastName}</span>{" "}
      </h1>
      <button className="view edit-button" onClick={() => editForm(true)}>
        Edit Name
      </button>
    </div>
  );
};

export default CardName;
