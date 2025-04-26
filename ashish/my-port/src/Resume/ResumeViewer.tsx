import { ActionIcon, Modal, ScrollArea, Tooltip, useMatches } from '@mantine/core'
import { IconArrowBigDownLineFilled } from '@tabler/icons-react';
import { Document, Page } from 'react-pdf';
import { Info } from '../About/Info';

const ResumeViewer = (props:any) => {
  const btn=useMatches({
    xs:'xs',
    sm:'sm',
    md:'md',
})
  return (
    <Modal.Root size="auto" scrollAreaComponent={ScrollArea.Autosize} opened={props.opened} onClose={props.close}centered  >
            <Modal.Overlay className='!backdrop-Opacity-85 blur-sm' />
            <Modal.Content className='!rounded-3xl'>
              <Modal.Header className=' !bg-navyS-800 !border-navyS-800 !border-2 !border-b-0  !roudned-tl-3xl !rounded-tr-3xl  xs-mx:!p-2  xs-mx:!border xs-mx:!border-b-0  '>
                <Modal.Title className='!text-3xl xs-mx:!text-2xl items-center !text-navyS-100 !font-bold'>
                  Resume   
                  <Tooltip label="download resume" position='right' offset={5}>
                     <ActionIcon component='a' href='/Resumefile.pdf' size={btn}  download={`${Info.name}_resume`} variant="outline " >
                              <IconArrowBigDownLineFilled color='#64FFDA' className='!bg-navyS-800  xs-mx:!w-[16px] !border-none !border-navyS-800'/>
                     </ActionIcon>
                  </Tooltip>
                </Modal.Title>
                <Modal.CloseButton size='md' iconSize='30px' className=' !bg-navyS-800 !text-red-500 !cursor-pointer' />
              </Modal.Header>
              <Modal.Body pt='md' className=' !bg-navyS-800  !border-navyS-800   !roudned-bl-3xl  !bg-bgColor xs-mx:!p-2 !pt-2 !border-primaryColor  !border-2 xs-mx:!border xs-mx:!border-t-0 !border-t-0 !rounded-bl-3xl !rounded-br-3xl  ' >                  
              <Document className="w-full !rounded-2xl !overflow-hidden !min-w-40 !min-h-14" file="/Resumefile.pdf" >
                <Page pageNumber={1} renderTextLayer={false} renderAnnotationLayer={false} className="w-full !min-w-40 !min-h-14 md-mx:[&>.react-pdf\_\_Page\_\_canvas]:!w-full md-mx:[&>.react-pdf\_\_Page\_\_canvas]:!h-auto"   />
              </Document>
              </Modal.Body>
            </Modal.Content>
          </Modal.Root>
  )
}

export default ResumeViewer