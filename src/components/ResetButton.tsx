import React from 'react';



const ResetButton = ({reset}: {reset: () => void}) => {
    return <button className={'resetButton'} type='button' onClick={reset}>Reset</button>
  }


  export default ResetButton