import React from 'react'

const TokenButton = ({ number, handleClick }) => {
    return (
      <div className="token-button" onClick={handleClick}>
        <div className="button-number">{ number }</div>
      </div>
    )
}

// const mapStateToProps = state => {
//   console.log(this.state)
//   return{
//       // what goes here??
//   }
// }

// export default connect(mapStateToProps)(TokenButton);

export default TokenButton