'use client';
import { FormEvent, useState, ChangeEvent } from 'react';
import createUser from '@/actions/createUser';
import './page.css';
import { NewUserType } from '@/types';

export default function Users() {

    const [formData, setFormData] = useState<NewUserType>({
        name: '',
        username: '',
        email: '',
        phone: '',
        website: '',
        company: '',
        suite: '',
        zipcode: '',
        street: '',
        city: '',
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: value,
        }));
    };

    const handleOnSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        //Validation formData

        //Send data
        const response = await createUser(formData);

        //Handeling response to show success or error message
    }

    return (
        <form onSubmit={handleOnSubmit} className="flex flex-col gap-10 items-center">
            <div className="flex flex-col gap-3">
                <div className="flex flex-row gap-3">
                    <input type="text" id='name' placeholder="Name" value={formData.name} onChange={handleChange} required className="input-style"></input>
                    <input type="text" id='username' placeholder="Uesr Name" value={formData.username} onChange={handleChange} required className="input-style"></input>
                </div>
                <div className="flex flex-row gap-3">
                    <input type="email" id='email' placeholder="E-mail" value={formData.email} onChange={handleChange} required className="input-style"></input>
                    <input type="number" id='phone' placeholder="Phone" value={formData.phone} onChange={handleChange} required className="input-style"></input>
                </div>
            </div>

            <div className="flex flex-col gap-3">
                <div className="flex flex-row gap-3">
                    <input type="number" id='suite' placeholder="Suite" value={formData.suite} onChange={handleChange} className="input-style"></input>
                    <input type="text" id='street' required placeholder="Street Name" value={formData.street} onChange={handleChange} className="input-style"></input>
                </div>
                <div className="flex flex-row gap-3">
                    <input type="text" id='zipcode' required placeholder="ZipCode" value={formData.zipcode} onChange={handleChange} className="input-style"></input>
                    <input type="text" id='city' required placeholder="City" value={formData.city} onChange={handleChange} className="input-style"></input>
                </div>
            </div>

            <div className="flex flex-col gap-3">
                <div className="flex flex-row gap-3">
                    <input type="text" id='company' placeholder="Company" value={formData.company} onChange={handleChange} className="input-style"></input>
                    <input type="text" id='website' placeholder="Website" value={formData.website} onChange={handleChange} className="input-style"></input>
                </div>
            </div>

            <button type="submit" className="w-96">Create</button>
        </form>
    )
}
