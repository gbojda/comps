import Accordion from "../components/Accordion";


function AccordionPage() {
const items = [
  {
    id: 'asda112',
    label:'Can i use React on a project',
    content:
    'You can React on any project you want.You can React on any project you want.You can React on any project you want.You can React on any project you want.You can React on any project you want.'
  },
  {
    id:'asd88',
    label:'Can i use JavaScript on a project',
    content:
    'You can React on any project you want.You can React on any project you want.You can React on any project you want.You can React on any project you want.You can React on any project you want.'
  },
  {
    id:'8asdd',
    label:'Can i use CSS on a project',
    content:
    'You can React on any project you want.You can React on any project you want.You can React on any project you want.You can React on any project you want.You can React on any project you want.'
  },
];

  return <Accordion items={items} />;
}

export default AccordionPage;
