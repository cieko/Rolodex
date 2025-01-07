// import { Component } from 'react';

import { useEffect, useState } from 'react';

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

import './App.css';

const App = () => {
  const [searchField, setSearchField] = useState('')
  const [monsters, setMonsters] = useState([])

  const [filteredMonsters, setFilteredMonsters] = useState(monsters)

  const onSearchChange = (e) => {
    const searchString = e.target.value.toLocaleLowerCase();
    // const filteredMonsters = this.state.monsters.filter(monster => monster.name.toLocaleLowerCase().includes(searchString));

    setSearchField(searchString);
  }

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((monsters) => {
        setMonsters(monsters)
      })
      .catch((error) => console.error(error))
  }, [])

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    setFilteredMonsters(newFilteredMonsters)
  }, [monsters, searchField])

  return (
    <div className="App">
      <h1 className='app-title'>Monster Rolodex</h1>
      <SearchBox onChangeHandler={onSearchChange} placeholder={'Search monsters'} className={'monsters-search-box'} />
      <CardList monsters={filteredMonsters} />
    </div>
  )
}

// class App extends Component {

//   constructor() {
//     super();

//     this.state = {
//       monsters: [],
//       searchField: ''
//     }
//   }

//   componentDidMount() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then((res) => res.json())
//       .then((monsters) => {
//         this.setState(() => {
//           return {
//             monsters
//           }
//         })
//       })
//       .catch((error) => console.error(error))
//   }

//   onSearchChange = (e) => {
//     const searchString = e.target.value.toLocaleLowerCase();
//     // const filteredMonsters = this.state.monsters.filter(monster => monster.name.toLocaleLowerCase().includes(searchString));

//     this.setState(() => {
//       return { searchField: searchString }
//     })
//   }

//   render() {

//     const { monsters, searchField } = this.state;
//     const { onSearchChange } = this;
//     const filteredMonsters = monsters.filter(monster => monster.name.toLocaleLowerCase().includes(searchField));

//     return (
//       <div className="App">
//         <h1 className='app-title'>Monster Rolodex</h1>
//         <SearchBox onChangeHandler={onSearchChange} placeholder={'Search monsters'} className={'monsters-search-box'} />
//         <CardList monsters={filteredMonsters} />
//       </div>
//     )
//   }
// }

export default App;
