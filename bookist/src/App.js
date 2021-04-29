import './App.css';
import React, {Component} from 'react'
import Header from './components/Header'
import BookList from './components/BookList'
import Shelf from './components/Shelf'
import data from './data'
import SearchBar from './components/SearchBar'

class App extends Component{
  constructor(){
    super()
    this.state = {
      books: data,
      shelf: [],
    }
    this.addToShelf = this.addToShelf.bind(this)
    this.clearShelf = this.clearShelf.bind(this)
    this.filterBooks = this.filterBooks.bind(this)
    this.reset = this.reset.bind(this)
  }


//  Gotta figure out how to filter
  filterBooks(asdf){
    console.log(asdf)
    let filteredBooks = this.state.books
   .filter((element, index) => {
     return element.title.includes(asdf)
        // console.log(element.title)

   })
   console.log(filteredBooks)
   this.setState({
     books: filteredBooks
   })
  }
             
  addToShelf(value){
    this.setState({
      shelf: [...this.state.shelf, value]
    })
  }

  clearShelf(){
    this.setState({
      shelf: []
    })
  }



  reset(){
    this.setState({
      books: data
    })
  }

  render(){
    return (
      <div className="App" style={{backgroundColor:'lightskyblue'}} >
        <section style={{display:'flex', flexDirection:'row', justifyContent:'space-evenly'}}>
          <Header />
          <SearchBar 
          books={this.state.books}
          filterBooks={this.filterBooks}
          reset={this.reset}
          />

        </section>

        <section style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly'}}>
          <BookList 
            books={this.state.books}
            addToShelf={this.addToShelf}
          /> 

          <Shelf
            shelf={this.state.shelf}
            clearShelf={this.clearShelf}
            />
        </section>

      </div>
  )}
}

export default App;
