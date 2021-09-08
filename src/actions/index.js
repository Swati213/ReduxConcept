export const incNum=(num)=>{
    return{
        type:"INCREMENT",
        payload:num
    }
}
export const decNum=()=>{
    return{
        type:"DECREMENT"
    }
}

export const multNumber =(num)=>{
    return{type:"MULT",payload: num}
   }
export const divideNumber =()=>{
    return{type:"DIVIDE"}
   }
