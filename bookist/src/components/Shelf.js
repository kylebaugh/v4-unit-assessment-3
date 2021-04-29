import React, {Component} from 'react'

class Shelf extends Component{
    render(){
        const mappedTiles = 
            this.props.shelf.map((element, index) => {
                    return (
                        <div>
                                <p key={element.titile} style={{display:'flex', flexDirection:'column', fontSize:'14px'}}>{element}</p>
                        </div>
                    )
            })
        return(
            <div style={{width: '15vw', height:'fit-content', display:'flex', flexDirection: 'column', backgroundColor:'whitesmoke', paddingBottom:'4vh'}}>
                <h2>Shelf:</h2>
                <div>{mappedTiles}</div>
                <button 
                    onClick={() => this.props.clearShelf()}
                    style={{width:'7.5vw', alignSelf:'center'}}
                >Clear Shelf</button>
            </div>
        )
    }
}

export default Shelf