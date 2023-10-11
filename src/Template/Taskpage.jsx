import React from 'react'
import  {FaSquare, FaTwitter} from "react-icons/fa6"
import  {FaCircle} from "react-icons/fa6"
import { FaFacebook} from 'react-icons/fa6'

function Taskpage() {
  return (
    <div className="min-h-screen p-8 bg-orange-600">
        <div className='text-white text-center' >
          <h1>LANDING PAGE TEMPLATE</h1>
          <div className='text-orange-200'>
          <h6>business</h6>
          <div className='flex '>
          
          <div className='m-8 bg-white h-fit'>
        
            <div>
             <ul className="flex gap-10  py-8 pl-20 justify-center">
                 <li className="text-black cursor-pointer font-bold">Home</li>
                 <li className="text-black cursor-pointer font-bold">About</li>
                 <li className="text-black cursor-pointer font-bold">Contant</li>
                <li><button className='btn bg-gradient-to-br from-yellow-100 h-fit p-1 rounded-lg to-yellow-500 text-black'>SIGN UP</button></li>
             </ul>
             </div>
             <div className='flex p-8 h-[500px] justify-center items-center'>

            <div className='bg-black w-1/2 rounded-r-[250px] overflow-hidden relative  h-full'>
            
            <div className='text-yellow-600 w-1/2 flex flex-row text-[3px] justify-between-center gap-[10px]'>
               <div className='flex flex-col gap-[10px]'>
                <FaSquare/>
                <FaSquare/>
                <FaSquare/>
                </div>
                <div className='flex flex-col gap-[10px]'>
                <FaSquare/>
                <FaSquare/>
                <FaSquare/>
                </div>
                <div className='flex flex-col gap-[10px]'>
                <FaSquare/>
                <FaSquare/>
                <FaSquare/>
                </div>
                <div className='flex flex-col gap-[10px]'>
                <FaSquare/>
                <FaSquare/>
                <FaSquare/>
                </div>
                <div className='flex flex-col gap-[10px]'>
                <FaSquare/>
                <FaSquare/>
                <FaSquare/>
                </div>
               </div><br/><br/>
               <div className='text-yellow-600 w-1/2 flex flex-row text-[10px] justify-between-center'>
               <div className='flex flex-col gap-[4px] ml-[100px]'>
             <FaCircle/>
                </div>
                
                <div className="relatve">
                                  <div className='flex flex-col gap-[4px] ml-[300px] bottom-0 mb-10 absolute'>
             <FaCircle/>
                </div>  
                </div>

               </div>

            <div className='text-black absolute ml-10 flex items-center gap-4 z-40 mt-10 bottom-0 left-0'>
                <FaFacebook/> <b>@success.inc</b>  <FaTwitter/><b> Success Inc</b>
                </div>
                
            <div className='bg-white flex justify-end items-center -rotate-45 -ml-[80px] rounded-r-[250px] h-[200px] w-[100%] mt-[190px]'>
               <div className="rounded-full h-[190px] overflow-hidden w-[190px] relative m-1 border-t-4 rotate-45">
                <img src="./Capture.PNG" alt=" phioo" className='' />
               </div>
            <div>
            </div>
            </div>
            
          </div>
             <div className='text-gray-400 w-1/2 flex flex-row text-[20px] justify-between-center'>
                <div className='flex flex-col gap-[2px] text-[5px]'>
                <FaSquare/>
                <FaSquare/>
                <FaSquare/>
                </div>
                <div className='flex flex-col gap-[2px] text-[5px]'>
                <FaSquare/>
                <FaSquare/>
                <FaSquare/>
                </div>
                <div className='flex flex-col gap-[2px] text-[5px]'>
                <FaSquare/>
                <FaSquare/>
                <FaSquare/>
             </div>
             <div className='text-black'>
<h1><b>GROW YOUR BUSINESS</b></h1>
<div className='text-center'>
    <h6>
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
Sequi necessitatibus esse provident nesciunt odit eaque non rem est porro quibusdam eveniet distinctio,
 commodi pariatur eius atque ad ex dignissimos odio?
    </h6>

</div>
 
        <div>
         <button className='btn bg-gradient-to-br from-yellow-100 h-fit p-1 rounded-lg to-yellow-500'><h6>READ MORE</h6></button></div><br/>
         <button className='btn bg-gradient-to-br from-yellow-100 h-fit p-1 rounded-lg to-yellow-500 text-black'><h6>JOIN US</h6></button>
         </div>
         <div className='text-black absolute mt-[300px] ml-[300] '>
            <h5>653 Allison Avenue</h5>
            <b>Parksley,Vargina</b>
         </div> 
         <div className=''>
            <div className='flex flex-row gap-[4px] text-gray-400 text-[5px]'>
         <FaSquare/>
        <FaSquare/>
          
         </div>
         <div className='flex flex-row gap-[4px] text-gray-400 text-[5px]'>
         <FaSquare/>
        <FaSquare/>
         </div>
         <div className='flex flex-row gap-[4px] text-gray-400 text-[5px]'>
         <FaSquare/>
        <FaSquare/>
         </div>
         </div>
         </div> 
             </div>
        
         </div> 
         
            </div>

          </div>
          </div>
          
          </div>
            
    

    
  )
}

export default Taskpage

  