import React, { useState } from 'react';
import {db} from './firebase'

const FormUser = ({ createOrder }) => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: '',
        address: ''
    })

    const getContact = (e) => {
        const { name, value } = e.target;
        setForm((state) => {
            return {...state,
                [name]: value}
        })
    }

    const finishBuy = () => {
        const {name, email, phone, address} = form
        createOrder({name, email, phone, address})
    }

    const validateForm = !(
        form.name.length &&
        form.email.length &&
        form.phone.length &&
        form.address.length > 0
    )

    return (
        <div className="FormContacto">
            <h2>Datos de Contacto</h2>
            <form>
                <div className="formContainer">
                    <div className="formInput">
                        <input type="text" name="name" placeholder="Nombre y Apellido" value={form.name} onChange={getContact} required/><strong>*</strong>
                    </div>
                    <div className="formInput">
                        <input type="email" name="email" placeholder="Email" value={form.email} onChange={getContact} required/><strong>*</strong>
                    </div>
                    <div className="formInput">
                        <input type="text" name="phone" placeholder="Teléfono" value={form.phone} onChange={getContact} required/><strong>*</strong>
                    </div>
                    <div className="formInput">
                        <input type="text" name="address" placeholder="Dirección" value={form.address} onChange={getContact} required/><strong>*</strong>
                    </div>
                </div>
            </form>
            <h4>* Campos obligatorios</h4>
            <button className="btn-primary" onClick={finishBuy} disabled={validateForm}>Finalizar Compra</button>
        </div>
    )
}

export default FormUser;
