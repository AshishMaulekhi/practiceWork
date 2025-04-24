import { Badge, Button, Card, Group, Image, Indicator, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import FullProjectCard from './FullProjectCard';


const ProjectCard = (props:any) => {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <>
    <Card onClick={open} w='380px' className='!bg-navyS-800 !mb-5 hover:!scale-[1.02] !transition-transform !duration-300 !ease-in-out !cursor-pointer hover:!shadow-[0_0_8px_1px_#64FFDA] !border-mintS-500 border-2 !rounded-xl' shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section className=' p-3'>
        <Image
          className='!rounded-xl !shadow-[0_0_5px_0_#64FFDA]'
          src={props.image}
          height={160}
          alt='props.image'
        />
      </Card.Section>

      <Group justify="space-between" mt="xs" mb="xs">
        <Text className='  !font-semibold !text-slate-300 flex items-center gap-2' fw={500}>{props.title}
          {props.live?<Badge variant='outline' color="pink" className='flex gap-2' rightSection={<Indicator color="red" position="middle-end" size={7} processing></Indicator>}>{props.live ? "live":""} </Badge>
        :<></>
      }
          </Text>
      </Group>

      <Group   mb="xs" className='!flex ' >
        {
          props.technologies.map((tech:any,idx:number)=>(
            idx<3 &&<Badge variant='light' key={idx} color='#64FFDA' > {tech} </Badge> 
          ))
        }
      </Group>

      <Text size="sm" c="dimmed" lineClamp={5} className='!text-justify'>
        {props.desc}
      </Text>

      <Button onClick={open} className='!bg-mintS-400  !text-lg !text-navyS-600 text font-semibold' fullWidth mt="md" radius="md">
        Show More
      </Button>
    </Card>
    <FullProjectCard opened={opened} close={close}  title={props.title} desc={props.desc} image={props.image} live={props.live} link={props.link} technologies={props.technologies}  />
    
    </>
  );
}

export default ProjectCard