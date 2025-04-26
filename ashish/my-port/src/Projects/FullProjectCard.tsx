import { Badge, Button, Group, Image, Indicator, Modal, ScrollArea, Text } from '@mantine/core';
import { useMatches } from '@mantine/core'; // You may need to ensure this is included if not already

const FullProjectCard = (props: any) => {
  const download = useMatches({ xs: 'xs', sm: 'sm', md: 'md', bs: 'bs', lg: 'lg', xl: 'xl' });
  const techno = useMatches({ xs: 'xs', sm: 'sm', md: 'md', bs: 'bs', lg: 'lg', xl: 'xl' });
  const btn = useMatches({ xs: 'xs', sm: 'sm', md: 'md', lg: 'lg', xl: 'xl' });

  return (
    <div>
      <Modal.Root scrollAreaComponent={ScrollArea.Autosize} size="auto" centered className="font-mono" opened={props.opened} onClose={props.close}>
        <Modal.Overlay />
        <Modal.Content className='!rounded-3xl'>
          <Modal.Header className='!bg-navyS-800 !border-navyS-800 !border-2 !border-b-0 !rounded-tl-3xl !rounded-tr-3xl'>
            <Modal.Title className='!text-3xl xs-mx:!text-2xl sm-mx:!text-xl !text-navyS-100 !font-bold'>
              {props.title}
              {props.live &&
                <Badge
                  variant='outline'
                  size={download}
                  color="pink"
                  className='!flex !gap-2'
                  rightSection={<Indicator color="red" position="middle-end" size={7} processing />}
                >
                  live
                </Badge>}
            </Modal.Title>
            <Modal.CloseButton size='md' iconSize='30px' className='!bg-navyS-800 !text-red-500 !cursor-pointer' />
          </Modal.Header>

          <Modal.Body pt='md' className='!bg-navyS-800 !border-navyS-800 !border-2 !border-t-0 !rounded-bl-3xl !rounded-br-3xl'>
            <Image
              className='!rounded-xl !shadow-[0_0_5px_0_#64FFDA]'
              src={props.image}
              height={160}
              alt='props.image'
            />

            <Group mb="xs" className='!flex flex-wrap gap-3 xs-mx:gap-2 my-3'>
              {props.technologies.map((tech: any, idx: number) => (
                <Badge
                  variant='light'
                  size={techno}
                  mt='md'
                  className='!w-auto'
                  key={idx}
                  color='#64FFDA'
                >
                  {tech}
                </Badge>
              ))}
            </Group>

            <Text size="lg" c="dimmed" lineClamp={5} className='!text-justify sm-mx:!text-base xs-mx:!text-xs'>
              {props.desc}
            </Text>

            <Group justify="space-between" mt="md" mb={3}>
              <a className='!w-[48%] sm-mx:!w-[46%] xs-mx:!w-[100%]' target='_blank ' href={props.github}>
                <Button
                  className='!bg-mintS-300 !text-lg !text-navyS-600 text font-semibold'
                  variant="outline"
                  fullWidth
                  radius="md"
                  size={btn}
                >
                  View Code
                </Button>
              </a>
              <a className='!w-[48%] sm-mx:!w-[46%] xs-mx:!w-[100%]' target='_blank ' href={props.link}>
                <Button
                  className='!bg-navyS-800 !text-lg !text-mintS-600 text font-semibold'
                  fullWidth
                  radius="md"
                  size={btn}
                >
                  View Live App
                </Button>
              </a>
            </Group>

          </Modal.Body>
        </Modal.Content>
      </Modal.Root>
    </div>
  );
};

export default FullProjectCard;
