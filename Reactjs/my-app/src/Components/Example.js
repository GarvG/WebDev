import React from 'react'

// function Example() {
//   return (
   
//     <div>
//         <h1 >GARV GARG</h1>
//     </div>
//   )
// }
const Example =(props)=>{
return (
<div>
<h1>Hello {props.name} as of now your hobby is {props.hobby}</h1>
{props.children}
</div>

)

}

export default Example