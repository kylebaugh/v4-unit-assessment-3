import React, {Component} from 'react'

class BookList extends Component{
    // constructor(props){
    //     super(props)
    //     // this.addToShelf = this.addToShelf.bind(this)
    // }
    render(){
        const mappedBooks = 
            this.props.books.map((element, index) => {
                    let title = element.title
                    let author = element.author
                    let img = element.img
                    
                    return(
                        <div >
                            <div style={{width: '12.5vw', height:'45vh', display:'flex', flexDirection:'column', justifyContent:'space-between', backgroundColor:'pink'}}>
                                <section>
                                    <img 
                                    style={{width:'12.5vw'}}
                                    src={img} 
                                    alt={title}
                                    onClick={() => 
                                        // console.log(title)}
                                        // console.log(this.props.addToShelf())}
                                        this.props.addToShelf(title)}
                                        />
                                </section>
                                <section>
                                    <p style={{width: '12.5vw', fontSize:'1.5vh', display:'flex', flexWrap:'wrap', flexDirection:'column', justifyItems:'flex-end'}}>Title: {title}</p>
                                    <p style={{width: '12.5vw', fontSize:'1.5vh', display:'flex', flexWrap:'wrap', flexDirection:'column', justifyItems:'flex-end'}}>Author: {author}</p>
                                </section>
                            </div>

                        </div>
                        )
            })

        return(
            <div style={{width:'70vw', display:'flex', flexDirection:'column', backgroundColor:'whitesmoke' }}>
                <h1>Available Books: </h1>
                <div 
                style={{backgroundColor:'whitesmoke', display:'flex', flexDirection:'row', flexWrap:'wrap', gap:'25px', justifyContent:'space-evenly'}} 
                >{mappedBooks}</div>
            </div>
        )
    }
}

export default BookList