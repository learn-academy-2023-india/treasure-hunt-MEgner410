import React from "react"

const Square = (props) => {
  return (
    <div className="grid">
      {props.board.map((value, index) => {
    <div key={index} className="square" onClick={() => props.handleClick(index)}>
      {value}
       </div>
       })}
    </div>
  )
}
    
export default Square
