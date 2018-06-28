import React, { Component } from 'react'
import Cards, { Card } from 'react-swipe-deck'
 
 




class Voting extends Component {

    data = [{name:"Monk's",image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Tom%27s_Restaurant%2C_NYC.jpg/2560px-Tom%27s_Restaurant%2C_NYC.jpg", rating:"4.5"}]

    end=()=>{
        console.log('end')
    }
    left=()=>{
        console.log('swipe left')
    }
    right=()=>{
        console.log('swipe right')
    }
    render(){
        return (
            <div>
              <Cards onEnd={this.end} className='master-root'>
              {this.data.map(item =>
                <Card
                  onSwipeLeft={this.left}
                  onSwipeRight={this.right}>
                  <h2>{item.name}</h2>
                  <img src={item.image} alt={item.name}></img>
                </Card>
              )}
            </Cards>
            </div>
          )
    }
    
  }

export default Voting

