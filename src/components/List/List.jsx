import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../Button/Button';
import ModalWindow from '../ModalWindow/ModalWndow';
import './List.css'

const List = ({dataPeople, deletePerson}) =>{
  let [showModal, setShowModal] = useState(false);
  let [buttonDel, setButtonDel] = useState(0)
  let navigat = useNavigate();

  const searchDelete = (event)=>{
    const id = event.target.id;
    setButtonDel(id)
    setShowModal(true)
  }

  const editPeople = (event)=>{
    const id = event.target.id;
    navigat(`/formEdit/${id}`)
  }

  const confirmDelete = () => {
    deletePerson(buttonDel)
    setShowModal(false)
  }

  const cancelDelete = () => {
    setShowModal(false)
  }

    return(
      <div>
     {showModal && <ModalWindow confirmDelete= {confirmDelete} cancelDelete = {cancelDelete}/>}
      <table>
      <tbody>
        <tr>
          <td>Name</td>
          <td>Surname</td>
          <td>Phone</td>
          <td>Action</td>
        </tr>
        {dataPeople.map(data =>
        <tr key={data.id}>
          <td id={data.id} key={data.id + 'n'}>{data.name.split(" ").slice(0, 1).join(" ")}</td>
          <td id={data.id} key={data.id+ 's'}>{data.name.split(" ").slice(1).join(" ")}</td>
          <td id={data.id} key={data.id+ 'p'}>{data.phone}</td>
          <td key={data.id+ 'b'}>
            <Button  id={data.id} func={searchDelete} text={'delete'}/>
            <Button  id={data.id} func={editPeople} text={'edit'}/>
          </td>
        </tr>  
        )}
      </tbody>
      </table>
      </div>
    );
}

export default List;