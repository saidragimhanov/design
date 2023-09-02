export const Input = (props)=>{
    const {handleInput}=props

    return(
        <input className="" onChange={(e) => handleInput(e.target.value)}/>
    )  
 }