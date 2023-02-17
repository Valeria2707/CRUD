import './App.css';
import { useEffect, useState } from 'react';
import Form from './components/Form/Form';
import List from './components/List/List';
import Button from './components/Button/Button';

function App() {
  let [page, setPage] = useState('list');
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

  const chooseList = ()=>{
    setPage('list')
  }

  const chooseForm = ()=>{
    setPage('form')
  }

  return (
    <div className="App">
      <div className='blockButton'>
      <Button func={chooseList} text = {'list'}/>
      <Button func={chooseForm} text = {'Form'}/>
      </div>
      {page === 'list' ? <List dataPeople = {data} deletePerson = {deletePerson} /> :
      <Form returnPageList = {chooseList} addNewPeople = {addPeopleList} peopleInformation = {data}/>}
    </div>
  );
}

export default App;
