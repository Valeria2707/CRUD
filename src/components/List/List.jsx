import React from 'react';
import Button from '../Button/Button';
import './List.css'

const List = ({dataPeople, deletePerson}) =>{
  const searchDelete = (event)=>{
    const id = event.target.id;
    deletePerson(id)
  }

    return(
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
          <td key={data.id+ 'b'}><Button  id={data.id} func={searchDelete} text={'delete'}/></td>
        </tr>
        )}
      </tbody>
      </table>
    );
}

export default List;