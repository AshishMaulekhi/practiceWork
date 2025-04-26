import { Badge, Button, Card, Group, Image, Indicator, Text, useMatches } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import FullProjectCard from './FullProjectCard';

const ProjectCard = (props: any) => {
  const [opened, { open, close }] = useDisclosure(false);

  // Use useMatches hook for responsive behavior
  const badge = useMatches({
    xsm: "sm", 
    md: "md", 
    lg: "lg"
  });
  
  const btn = useMatches({
    xs: "xs", 
    sm: "sm", 
    md: "md"
  });
//"w-[32%] lg-mx:w-[46%] md-mx:w-[48%] sm-mx:w-[90%] 
  return (
    <div 
      className="w-[32%] xl:h-[400px] lg-mx:w-[46%] md-mx:w-[48%]    xs-mx:w-[95%]"
      data-aos="fade-up" 
      data-aos-duration="800"
    >
      <Card
        data-aos="fade-right"
        data-aos-duration="1500"
        onClick={open}
        className="!bg-navyS-800 !mb-5 hover:!scale-[1.02] !transition-transform !duration-300 !ease-in-out !cursor-pointer hover:!shadow-[0_0_8px_1px_#64FFDA] !border-mintS-500 border-2 !rounded-xl"
        shadow="sm"
        padding="lg"
        radius="md"
        withBorder
      >
        <Card.Section className="p-3">
          <Image
            className="!rounded-xl !shadow-[0_0_5px_0_#64FFDA]"
            src={props.image}
            height={160}
            alt="props.image"
          />
        </Card.Section>

        <Group justify="space-between" mt="xs" mb="xs">
          <div className="!text-2xl gap-2 !font-bold !text-white flex items-center sm:!text-xl">
            {props.title}
            {props.live && (
              <Badge
                variant="outline"
                color="red"
                className="!px-1"
                rightSection={<Indicator className="!mr-0.5 !z-0" color="red" position="middle-end" size={7} processing />}
                size={badge} // Apply dynamic badge size
              >
                Live
              </Badge>
            )}
          </div>
        </Group>

        <Group mb="xs" className="!flex gap-2">
          {props.technologies.map((tech: any, idx: number) => idx < 3 && (
            <Badge variant="light" key={idx} color="#64FFDA" size={badge}> {/* Apply dynamic badge size */}
              {tech}
            </Badge>
          ))}
        </Group>

        <Text size="sm" c="dimmed" lineClamp={5} className="!text-justify">
          {props.desc}
        </Text>

        <Button 
          onClick={open} 
          className="!bg-mintS-400 !text-lg !text-navyS-600 text font-semibold" 
          fullWidth 
          mt="md" 
          radius="md"
          size={btn} // Apply dynamic button size
        >
          Show More
        </Button>
      </Card>

      <FullProjectCard 
        opened={opened} 
        close={close} 
        title={props.title} 
        desc={props.desc} 
        image={props.image} 
        live={props.live} 
        link={props.link} 
        technologies={props.technologies} 
      />
    </div>
  );
};

export default ProjectCard;
