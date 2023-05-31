import { Accordion } from "./components/Accordion";

const roadMap = [
  {
    heading: "Learn HTML",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab voluptates doloribus porro officiis, aperiam veniam magnam esse harum tempora molestiae at architecto libero incidunt ratione, asperiores iusto, blanditiis omnis praesentium odio temporibus reprehenderit facere adipisci recusandae dolorem? Placeat quisquam non illo quia modi, distinctio voluptatem praesentium excepturi, enim corrupti perspiciatis?",
  },
  {
    heading: "Learn CSS",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab voluptates doloribus porro officiis, aperiam veniam magnam esse harum tempora molestiae at architecto libero incidunt ratione, asperiores iusto, blanditiis omnis praesentium odio temporibus reprehenderit facere adipisci recusandae dolorem? Placeat quisquam non illo quia modi, distinctio voluptatem praesentium excepturi, enim corrupti perspiciatis?",
  },
  {
    heading: "Learn Typescript",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab voluptates doloribus porro officiis, aperiam veniam magnam esse harum tempora molestiae at architecto libero incidunt ratione, asperiores iusto, blanditiis omnis praesentium odio temporibus reprehenderit facere adipisci recusandae dolorem? Placeat quisquam non illo quia modi, distinctio voluptatem praesentium excepturi, enim corrupti perspiciatis?",
  },
  {
    heading: "Learn React",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab voluptates doloribus porro officiis, aperiam veniam magnam esse harum tempora molestiae at architecto libero incidunt ratione, asperiores iusto, blanditiis omnis praesentium odio temporibus reprehenderit facere adipisci recusandae dolorem? Placeat quisquam non illo quia modi, distinctio voluptatem praesentium excepturi, enim corrupti perspiciatis?",
  },
];

const App = () => {
  return (
    <div className="inline">
      <Accordion.Root className="container" type="single" defaultFirstOpen>
        {roadMap.map(({ heading, content }, idx) => (
          <Accordion.Item key={idx} heading={heading}>
            {content}
          </Accordion.Item>
        ))}
      </Accordion.Root>

      <Accordion.Root
        className="container"
        type="single"
        collapsible
        defaultFirstOpen
      >
        {roadMap.map(({ heading, content }, idx) => (
          <Accordion.Item key={idx} heading={heading}>
            {content}
          </Accordion.Item>
        ))}
      </Accordion.Root>

      <Accordion.Root className="container" type="multiple" defaultFirstOpen>
        {roadMap.map(({ heading, content }, idx) => (
          <Accordion.Item key={idx} heading={heading}>
            {content}
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </div>
  );
};

export default App;
