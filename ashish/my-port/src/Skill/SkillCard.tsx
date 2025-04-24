import { Avatar } from '@mantine/core'


const SkillBadge=(skills:any)=>(
    skills.map((skill:any, index:number)=><div key={index} className="flex gap-2 border border-textColor rounded-2xl items-center py-1 px-2  mb-1">
        <Avatar className="!w-[20px]  " size='sm' variant='transparent'  src={`Icons/${skill}.png`} />
        <div className="text-navyS-100 text-xl font-medium  ">{skill}</div>
   </div>)
)

const SkillCard = (props:any) => {
  return (
    <div className='w-[48.5%] rounded-2xl shadow-[0_0_10px_0_#64FFDA50] border border-mintS-500 p-5'>
         <div className='text-3xl text-navyS-100 text-center font-bold'>{props.title}</div>
         <div className='flex gap-3 justify-center mt-4  flex-wrap'>
         {SkillBadge(props.skills)}

            
         </div>
    </div>
  )
}

export default SkillCard