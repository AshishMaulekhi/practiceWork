import { useDisclosure } from '@mantine/hooks';
import { Drawer, Button, Burger} from '@mantine/core';
import { IconHexagonLetterC, IconX } from '@tabler/icons-react';
import { navlinks } from './Header';


function SideBar() {
  
  const [opened, { toggle}] = useDisclosure(false);
  //overlayProps={{ backgroundOpacity: 0.5, blur: 4 }}
  return (
    <>
     
      <Drawer.Root className='md:!hidden !-z-10' size='30%' color='#0A192F'  position='right' opened={opened}  onClose={toggle}>
        <Drawer.Overlay className='!-z-0'/>
        <Drawer.Content className='!-z-0' bg='#0A192F' >
        
          <Drawer.Body className='mt-8 flex flex-col gap-5'>
            {navlinks(true)}
          </Drawer.Body>
        </Drawer.Content>
      </Drawer.Root>

      <Burger color='#69FFD6'  className='md:hidden !z-10 text-mintS-500' opened={opened} onClick={toggle} />

    </>
  );
}
export default SideBar