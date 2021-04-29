import React, {Component} from 'react'

class SearchBar extends Component{
    constructor(props){
        super(props)
            this.state = {
                input: ''
            }
            this.handleClick = this.handleClick.bind(this)
            this.clearSearch = this.clearSearch.bind(this)
    }

    handleChange(e){
        this.setState({
            input: e
        })
    }

    handleClick(){
        this.props.filterBooks(this.state.input)
    }

    clearSearch(){
        this.props.reset()
        console.log(this.props.books)
    }


    render(){
        return(
            <div style={{width:'15vw', alignSelf:'center', display:'flex', flexDirection:'column'}}>
                <section>
                    <input 
                    style={{width:'14.4vw', marginBottom:'1.1vh'}} 
                    onChange={(e) => this.handleChange(e.target.value)}
                    placeholder={'Search Here'}
                    >
                    </input>
                </section>
                <section style={{display:'flex', justifyContent:'space-between'}}>
                    <button onClick={() => this.handleClick()}>Search</button>
                    <button onClick={() => this.clearSearch()}>Clear</button>
                </section>
            </div>
        )
    }
}

export default SearchBar