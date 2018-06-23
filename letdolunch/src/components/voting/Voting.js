import React, { Component } from 'react'
import Cards, { Card } from 'react-swipe-deck'
 
 




class Voting extends Component {

    data = ['German', 'Shahar', 'Cameron']

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
                  <h2>{item}</h2>
                </Card>
              )}
            </Cards>
            </div>
          )
    }
    
  }

export default Voting

