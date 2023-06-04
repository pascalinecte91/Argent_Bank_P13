import { useDispatch, useSelector } from 'react-redux';
import { getLoggedOut } from 'redux/reducer/loginReducer.js';
import { useNavigate } from 'react-router-dom';
import { updateDataProfile } from 'redux/reducer/userReducer.js';
import React from 'react';

const CardName = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const token = useSelector((state) => state.login.token);
    let firstName = useSelector((state) => state.profile.firstName);
    let lastName = useSelector((state) => state.profile.lastName);

    const handleSubmit = (e) => {
        e.preventDefault();
        e.target[0].value = "";
        e.target[1].value = "";
        updateDataProfile(firstName, lastName, token).then((data) => {
            if (data !== "error") {
                dispatch(updateDataProfile(data));
            }
            else {
                dispatch(getLoggedOut());
                navigate("/login");
            }
        });
    };

    React.useEffect(() => {
        editForm(false);
    });

    const editForm = (edit) => {
        if (edit) {
            document.querySelectorAll(".edit").forEach((element) => {
                element.classList.remove("d-none");
            });
            document.querySelectorAll(".view").forEach((element) => {
                element.classList.add("d-none");
            });
        }
        else {
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
            <div className="edit" >
            <form onSubmit={handleSubmit} id="form">
                <div className="form-group">
                    <div className="input-wrapper">
                        <input type="text" id="firstName" onChange={(e) => e.target.value ? firstName = e.target.value : firstName} placeholder={firstName} />
                    </div>
                    <div className="input-wrapper">
                        <input type="text" id="lastName" onChange={(e) => e.target.value ? lastName = e.target.value : lastName} placeholder={lastName} />
                    </div>
                </div>
            </form>
            <div className='button-group'>
                    <button type='submit' form='form' className="submit-button" onClick={() => editForm(false)}>Save</button>
                    <button onClick={() => editForm(false)}>Cancel</button>
                </div>
            
            </div>
            <h1 className='view'>Welcome back<br />{firstName} {lastName} !</h1>
            <button className="view edit-button" onClick={() => editForm(true)}>Edit Name</button>
        </div>
    );
}

export default CardName;