import '../index.css';
import Accordion from './Accordion';
import { useState } from 'react';
// import { Vector } from "../assets/img/icon/index";

function Paq() {
  const [list] = useState([
    {
      question: <>Lorem ipsum dolor sit amet, consectetur adipiscing elit ?</>,
      answer:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis, repellendus.',
    },
    {
      question: <>Lorem ipsum dolor sit amet, consectetur adipiscing elit ?</>,
      answer:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis, repellendus.',
    },
    {
      question: <>Lorem ipsum dolor sit amet, consectetur adipiscing elit ?</>,
      answer:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis, repellendus.',
    },
    {
      question: <>Lorem ipsum dolor sit amet, consectetur adipiscing elit ?</>,
      answer:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis, repellendus.',
    },
    {
      question: <>Lorem ipsum dolor sit amet, consectetur adipiscing elit ?</>,
      answer:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis quam cum dicta sint dignissimos amet harum rerum cumque officiis cupiditate',
    },
  ]);

  return (
    <div className='mb-5 max-w-7xl  mx-auto p-10 flex justify-center items-center'>
      <div className='list'>
        {list.map((item, key) => (
          <Accordion
            key={key}
            datas={{
              ...item,
              question: item.question.props.children.toString(),
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default Paq;
