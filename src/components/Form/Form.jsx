import React from 'react';
import Button from '../Button/Button';
import './Form.css';
import { Link, useNavigate } from 'react-router-dom';

const Form = ({addNewPeople, peopleInformation}) =>{
    let navigate = useNavigate();
    const saveAdd = () =>{
        const newName = document.querySelector('.name').value 
        const newSurname = document.querySelector('.surname').value 
        const newPhone = document.querySelector('.phone').value 

        const checkName = /^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/u;
        const checkSurname = /^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/u;
        const checkPhone = /^\d{9,15}$/;

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
            if(peopleInformation.length <= 0){
                const newPeople = {
                    id: 0,
                    name: newName + ' ' + newSurname,
                    phone: newPhone,
                }
                addNewPeople(newPeople)
            }
            else{
                const newPeople = {
                    id: peopleInformation[peopleInformation.length - 1].id + 1,
                    name: newName + ' ' + newSurname,
                    phone: newPhone,
                }
                addNewPeople(newPeople)
            }
            navigate('/')
        }
    }

    return(
        <div className='form'>
            <input type={'text'} name={'name'} placeholder={'name'} className={'name'}/>
            <input type={'text'} name={'surname'} placeholder={'surname'} className={'surname'}/>
            <input type={'text'} name={'phone'}placeholder={'phone'} className={'phone'}/>
            <div className='blockButton'>
            <Button text={'save'} func={saveAdd}/>
            <Link to="/" className='link'>Cancel</Link>
           </div>
        </div>
    );
}

export default Form;