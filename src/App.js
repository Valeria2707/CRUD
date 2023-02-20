import './App.css';
import { useEffect, useState } from 'react';
import Form from './components/Form/Form';
import List from './components/List/List';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';

function App() {
  let [data, setData] = useState([]);

  useEffect(() => {
      fetch(' https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(dataPeople => setData(dataPeople))
  }, [])

  const deletePerson = (id) =>{
    const actualOrders = data.filter(item => item.id != id);
    setData(actualOrders)
  }

  const addPeopleList = (person)=>{
    setData([...data, person])
  }


  return (
  <BrowserRouter>
    <div className="App">
      <div className='blockButton'>
       <Link to="/" className='link'>List</Link>
       <Link to="/form" className='link'>Form</Link>
      </div>
      <Routes>
        <Route path='/' element ={<List dataPeople = {data} deletePerson = {deletePerson}/>}/>
        <Route path='/form' element ={<Form  addNewPeople = {addPeopleList} peopleInformation = {data}/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
