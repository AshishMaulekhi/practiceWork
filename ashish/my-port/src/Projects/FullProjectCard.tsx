import { Badge, Button, Group, Image, Indicator, Modal, ScrollArea, Text } from '@mantine/core'


const FullProjectCard = (props:any) => {
   

  return (
    <div>
      <Modal.Root size="70%" scrollAreaComponent={ScrollArea.Autosize} opened={props.opened} onClose={props.close}>
        <Modal.Overlay />
        <Modal.Content className='!rounded-3xl'>
          <Modal.Header className=' !bg-navyS-800 !border-navyS-800 !border-2 !border-b-0  !roudned-tl-3xl !rounded-tr-3xl'>
            <Modal.Title className='!text-3xl !text-navyS-100 !font-bold'>{props.title}
                {props.live?<Badge variant='outline' color="pink" className='!flex !gap-2' rightSection={<Indicator color="red" position="middle-end" size={7} processing></Indicator>}>{props.live ? "live":""} </Badge>
                       :<></>}
            </Modal.Title>
            <Modal.CloseButton size='md' iconSize='30px' className=' !bg-navyS-800 !text-red-500 !cursor-pointer' />
          </Modal.Header>
          <Modal.Body pt='md' className=' !bg-navyS-800  !border-navyS-800 !border-2 !border-t-0  !roudned-bl-3xl !rounded-br-3xl' >

               <Image
                        
                         className='!rounded-xl !shadow-[0_0_5px_0_#64FFDA]'
                         src={props.image}
                         height={160}
                         alt='props.image'
               />
               <Group   mb="xs" className='!flex ' >
                       {
                         props.technologies.map((tech:any,idx:number)=>(
                           <Badge variant='light' size='md ' mt='md' className='!w-[130px]' key={idx} color='#64FFDA' > {tech} </Badge> 
                         ))
                       }
               </Group>
               <Text size="lg" c="dimmed" lineClamp={5} className='!text-justify'>
                  {props.desc}
               </Text>
               <Group>
                  <a className='!w-[48%]' target='_blank ' href={props.github}>
                     <Button className='!bg-mintS-300  !text-lg !text-navyS-600 text font-semibold' fullWidth mt="md" radius="md">
                       View Code
                     </Button>
                  </a>
                  <a className='!w-[48%]' target='_blank ' href={props.link}>
                  <Button variant='outline' className='!bg-navyS-800  !text-lg !text-mintS-600 text font-semibold' fullWidth mt="md" radius="md">
                      View Live App
                  </Button>
                  </a>
               </Group>

          </Modal.Body>
        </Modal.Content>
      </Modal.Root>
    </div>
  )
}

export default FullProjectCard