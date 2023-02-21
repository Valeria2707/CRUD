import './App.css';
import { useEffect, useState } from 'react';
import FormAdd from './components/Form/FormAdd';
import List from './components/List/List';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import FormEdit from './components/Form/FormEdit';

function App() {
  let [data, setData] = useState([]);

  useEffect(() => {
    if (localStorage.getItem('people')) {
      setData(JSON.parse(localStorage.getItem('people')));
    }
    else{
      fetch(' https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(dataPeople => {
        setData(dataPeople)
        addLocalStorage(dataPeople)
      })
    }
  }, [])

  const addLocalStorage = (newData) => {
    localStorage.setItem('people', JSON.stringify(newData));
  }

  const deletePerson = (id) =>{
    const actualOrders = data.filter(item => item.id != id);
    setData(actualOrders)
    addLocalStorage(actualOrders)
  }

  const editPerson = (editPeople) =>{
    const newState = data.map(obj => {
      if (obj.id === editPeople.id) {
        obj = editPeople
        return obj;
      }
      return obj;
    });
     setData(newState);
     addLocalStorage(newState)
  }

  const addPeopleList = (person)=>{
    const newList = [...data, person];
    setData(newList)
    addLocalStorage(newList)
  }

  return (
  <BrowserRouter>
    <div className="App">
      <div className='blockButton'>
       <Link to="/" className='link'>List</Link>
       <Link to="/formAdd" className='link'>Form</Link>
      </div>
      <Routes>
        <Route path='/' element ={<List dataPeople = {data} deletePerson={deletePerson}/>}/>
        <Route path='/formAdd' element ={<FormAdd  addNewPeople = {addPeopleList} peopleInformation = {data}/>}/>
        <Route path={`/formEdit/:id`} element ={<FormEdit peopleInformation = {data} editPersonSave = {editPerson}/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
