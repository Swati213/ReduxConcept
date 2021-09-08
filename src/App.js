import React from 'react'
 import "./App.css"
 import { useSelector,useDispatch } from 'react-redux'

 import { incNum,decNum,multNumber,divideNumber } from './actions/index'
const App = () => {
  const myState=useSelector((state)=>state.changeTheNumber)
  const myState2 = useSelector(state => state.multTheNumber)

  const dispatch = useDispatch();
  return (
    <>
    <div className="container">
      <h1>Increment/Decrement Counter</h1>
      <h4>Using React and Redux</h4>
      <div className="quantity">
        <a  className="quantity__minus" title="decrement" onClick={()=>dispatch(decNum ())}><span>-</span></a>
       <input name="quantity" type="text" className="quantity__input" value={myState} />
       <a  className="quantity__plus" title="increment" onClick={()=>dispatch(incNum (5))}><span>+</span></a>

      </div>
    </div>
    <div className="container">
  <h1>Multiplication</h1>
  <h4>Using react and redux</h4>
  <div className="quantity ">
    <a  title='Divide' className="quantity__minus" onClick={()=>dispatch(divideNumber())}><span>/</span></a>
<input type="text" className="quantity__input" name='quantity' value={myState2} />
    <a  title='Multiply' className="quantity__plus " onClick={()=>dispatch(multNumber(5))}><span>*</span></a>
  </div>
</div>

    </>
  )
}

export default App
