import React, { useState, useEffect } from 'react';
import '../index.css';
import Accordion from './Accordion';
import { getQuestions } from '../api/question.api';
import { Question } from '../types/question.type'; 

function Paq() {
  const [questions, setQuestions] = useState<Question[]>([]); 
  useEffect(() => {
    async function fetchData() {
      const data = await getQuestions();
      setQuestions(data);
    }
    fetchData();
  }, []);

  return (
    <div className='mb-5 max-w-7xl font-andika mx-auto p-10 justify-center items-center'>
      <div className='my-5 text-center'>
        <p className='sm:text-[36px] text-[28px] '>Frequently Asked Question</p>
      </div>
      <div className='list'>
        {questions.map((item, key) => (
          <Accordion
            key={key}
            datas={{
              question: item.pertanyaan,
              answer: item.jawaban,
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default Paq;
