import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Button from '../Button/Button';

const FormEdit = (editPersonSave) =>{
    const {id} = useParams();
    let navigate = useNavigate();
    let [name, setName] = useState('')
    let [surname, setSurname] = useState('')
    let [phone, setPhone] = useState('');

    useEffect(() => {
            let people = (JSON.parse(localStorage.getItem('people')));
            let res = people.filter(item => item.id === +id);
            setName(res[0].name.split(' ').at(0))
            setSurname(res[0].name.split(' ').at(1))
            setPhone(res[0].phone)
    }, [])

    const addEditPerson = ()=>{
        const newName = document.querySelector('.name').value 
        const newSurname = document.querySelector('.surname').value 
        const newPhone = document.querySelector('.phone').value 

        const checkName = /^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/u;
        const checkSurname = /^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/u;
        const checkPhone = /^\d{9,30}$/;

        const failPhone = document.querySelector('.phone');
        const failName = document.querySelector('.name');
        const failSurname = document.querySelector('.surname');

        failPhone.classList.remove('Error');
        failName.classList.remove('Error');
        failSurname.classList.remove('Error');

        if (checkName.test(newName) === false) {
            failName.classList.add('Error');
        }
        else if (checkPhone.test(newPhone) === false) {
            failPhone.classList.add('Error');
        }
        else if (checkSurname.test(newSurname) === false) {
            failSurname.classList.add('Error');
        }
        else{
            const editPeople = {
                id: +id,
                name: name + ' ' + surname,
                phone: phone,
            }
            console.log(editPeople);
            const editPeopleSave = editPersonSave.editPersonSave
            editPeopleSave(editPeople)
            navigate('/')
        }
    }

    const getValueName = (event)=>{
        setName(event.target.value)
    }

    const getValueSurname = (event)=>{
        setSurname(event.target.value)
    }

    const getValuePhone = (event)=>{
        setPhone(event.target.value)
    }

    return(
        <div className='form'>
            <input type={'text'} name={'name'} placeholder={'name'} className={'name'} value = {name} onChange = {getValueName}/>
            <input type={'text'} name={'surname'} placeholder={'surname'} className={'surname'} value={surname} onChange = {getValueSurname}/>
            <input type={'text'} name={'phone'}placeholder={'phone'} className={'phone'} value={phone} onChange = {getValuePhone}/>
            <div className='blockButton'>
            <Button text={'save'} func = {addEditPerson}/>
            <Link to="/" className='link'>Cancel</Link>
           </div>
        </div>
    );
}

export default FormEdit;