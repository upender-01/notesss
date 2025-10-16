import React from 'react'
import Cplus  from "../assets/c++cheatsheet.pdf" ;
import Reactbook from "../assets/reactbook.pdf" ;
import JsNotes from "../assets/JsBook.pdf";
import DOM from "../assets/DOM.pdf";
import Mernstack from "../assets/MERNSTACK.pdf"
import DSA from "../assets/Top100dsaquestions.pdf";
import Jsquestions from "../assets/Jsinterviewq.pdf";
const Notes = () => {
  let arr =[
    {name: "C++ Plus Notes " , link :Cplus},
    {name: "Reactjs" , link :Reactbook},
    {name: "Js" , link :JsNotes},
    {name  : "DOM" , link:DOM},
    {name  : "Mernstack Interview Q's" , link:Mernstack},
    {name  : "Top 100 Dsa Q's" , link:DSA},
    {name  : "JS INterview Q's" , link:Jsquestions}
  ]
  return (
    <div className='flex flex-col gap-1 items-center justify-center'>
      {arr.map((element, index)=>{
        return(<div key={index} className='flex justify-center items-center   outline-green-500 space-x-1'>
       <p className='font-bold bg-green-600 px-[0.5rem] py-[0.3rem] w-[35vw] hover:bg-pink-600 hover:text-white rounded-[3px] uppercase'>{element.name}</p>
       <a href={element.link} className=' bg-pink-600 px-[0.5rem] py-[0.3rem] hover:bg-green-600 hover:text-white font-bold rounded-[3px]'>Link</a>
    </div>);
      })};
    </div>
  )
}

export default Notes