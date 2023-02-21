import React from 'react';
import Button from '../Button/Button';
import './ModalWindow.css'

const ModalWindow = ({confirmDelete, cancelDelete}) =>{
    return(
        <div className='confirmation'>
            <div className='blockDelete'>
                <p className='textDelete'>Are you sure you want to delete data?</p>
                <div className='blockBtnDelete'>
                    <Button text={'yes'} func={confirmDelete}/>
                    <Button text={'no'} func={cancelDelete}/>
                </div>
            </div>
       </div>
    )
}

export default ModalWindow;