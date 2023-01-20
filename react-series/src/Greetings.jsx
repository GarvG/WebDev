import React from 'react'


const time=new Date().getHours();
const css={};
let Greeting="";
if(time>=1 && time<12)
{
  Greeting="Good Morning!"
  css.color="lightGreen"
}
else if(time>=12&&time<=19)
{
  Greeting="Good Afternoon!"
  css.color="Orange"
}
else
{
  Greeting="Good Night!"
  css.color="black"
}


function Greetings() {
  return (
    <div>
         <h1>Hello Sir,<span style={css}>{Greeting}</span></h1>
    </div>
  )
}

export default Greetings