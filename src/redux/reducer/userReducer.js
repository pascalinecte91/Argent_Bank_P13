import { createSlice } from "@reduxjs/toolkit";

/**
 * @function userReducer
 * @description Crée un slice Redux pour gérer les données du profil utilisateur
 * @returns {Object} Le slice Redux créé
 */
export const userReducer = createSlice({
    // Définit le nom du slice
    name: "profile",
    initialState: {
      id: "", 
      email: "", 
      firstName: "", 
      lastName: "", 
      createdAt: "", 
      updatedAt: "" 
    },
    // Définit les reducers pour modifier l'état du slice
    reducers: {
      /**
       * @function getDataProfile
       * @description Récupère les données du profil utilisateur à partir d'une action
       * @param {Object} state - L'état actuel du slice
       * @param {Object} action - L'action contenant les données du profil utilisateur
       */
      getDataProfile: (state, action) => {
        // Met à jour l'état avec les données de l'action
        state.id = action.payload.id;
        state.email = action.payload.email;
        state.firstName = action.payload.firstName;
        state.lastName = action.payload.lastName;
        state.createdAt = action.payload.createdAt;
        state.updatedAt = action.payload.updatedAt;
        // Stocke le prénom et le nom de l'utilisateur dans le localStorage
        localStorage.setItem("firstName", action.payload.firstName);
        localStorage.setItem("lastName", action.payload.lastName);
      },
      /**
       * @function updateDataProfile
       * @description Met à jour les données du profil utilisateur à partir d'une action
       * @param {Object} state - L'état actuel du slice
       * @param {Object} action - L'action contenant les données mises à jour du profil utilisateur
       */
      updateDataProfile: (state, action) => {
        // Met à jour l'état avec les données mises à jour de l'action
        state.firstName = action.payload.firstName;
        state.lastName = action.payload.lastName;
        state.updatedAt = action.payload.updatedAt;
        // Met à jour le prénom et le nom de l'utilisateur dans le localStorage
        localStorage.setItem("firstName", action.payload.firstName);
        localStorage.setItem("lastName", action.payload.lastName);
      },
      /**
       * @function deleteDataProfile
       * @description Supprime les données du profil utilisateur dans le store et dans le localStorage
       * @param {Object} state - L'état actuel du slice
       */
      deleteDataProfile: (state) => {
        console.log(state);
        // Réinitialise l'état à ses valeurs initiales (vide)
        state.id = "";
        state.email = "";
        state.firstName = "";
        state.lastName = "";
        state.createdAt = "";
        state.updatedAt = "";
        // Supprime le firstName et lastName de l'utilisateur dans le localStorage
        localStorage.removeItem("firstName");
        localStorage.removeItem("lastName");
      }
    }
  });
  
// le premier export permet d’exporter le slice Redux lui-même, 
// tandis que le second export permet d’exporter les actions créées par ce slice 
// pour être utilisées dans d’autres parties de l’application
  export const { getDataProfile, updateDataProfile, deleteDataProfile } = userReducer.actions;
  export default userReducer.reducer;
  