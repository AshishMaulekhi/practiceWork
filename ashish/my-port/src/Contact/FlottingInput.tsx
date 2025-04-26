import { Textarea } from "@mantine/core";

const FlottingInput = (props: any) => {
   return (
     <div className="relative">
      {props.id!=="Message"?
       <input
         type="text"
         id={props.id}
         value={props.value}
         onChange={(e) => props.handleChange(props.id, e.target.value)}
         className={`"block px-2.5 pb-2.5 pt-4 w-full text-sm hover:shadow-[0_0_8px_0_#64FFDA50] text-navyS-200
         bg-navyS-800 rounded-lg border border-mintS-500 appearance-none focus:outline-none
         focus:ring-0 focus:border-mintS-500 peer  ${props.error?'border-red-500':''} "  `}
         placeholder=" "
       />:
       <textarea name={props.id} id={props.id} rows={4}
            className={`"block px-2.5 pb-2.5 hover:shadow-[0_0_8px_0_#64FFDA50] pt-4 w-full text-sm text-navyS-200
         bg-navyS-800 rounded-lg border border-mintS-500 ${props.error?'border-red-500':''} appearance-none focus:outline-none
         focus:ring-0 focus:border-mintS-500 peer"`}
         placeholder=" ">
      </textarea>}
      
       <label
         htmlFor={props.id}
         className="absolute text-sm text-navyS-200 bg-navyS-800 px-2 
         peer-focus:px-2 peer-focus:text-navyS-200 peer-placeholder-shown:scale-100 
         peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 
         peer-focus:top-1 peer-focus:scale-100 peer-focus:-translate-y-4 
         rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
       >
         {props.name}
       </label>
       {`${props.error &&<div className="text-red-500 sm-mx:text-sm xs-mx:text-xs  ml-1 mt-1"  > {props.error}</div>}`}
     </div>
   );
 };
 

export default FlottingInput