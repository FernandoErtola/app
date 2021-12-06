import React, { useState } from 'react';

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

      <div className="FormContacto d-flex justify-content-center mt-5">
        <div className="FormContacto-container">
            <h2>Datos de Contacto</h2>
            <form>
                <div className="formContainer">
                <div>
                        <label className="form-label">Nombre y Apellido</label>
                        <input type="text" className="form-control" name="name" placeholder="Juan Perez" value={form.name} onChange={getContact} required/>
                    </div>
                    <div className="formInput">
                        <label className="form-label mt-1">Email</label>
                        <input type="email" className="form-control" name="email" placeholder="juan@perez.com" value={form.email} onChange={getContact} required/>
                    </div>
                    <div className="formInput">
                        <label className="form-label mt-1">Telefono</label>
                        <input type="text" className="form-control" name="phone" placeholder="11-2345-6789" value={form.phone} onChange={getContact} required/>
                    </div>
                    <div className="formInput">
                        <label className="form-label mt-1">Direccion de entrega:</label>
                        <input type="text" className="form-control" name="address" placeholder="Balcarce 50" value={form.address} onChange={getContact} required/>
                    </div>
                </div>
            </form>
            <button className="btn btn-primary mb-5 mt-2" onClick={finishBuy} disabled={validateForm}>Finalizar Compra</button>
            </div>
        </div>
    )
}

export default FormUser;
