import React from 'react';
import { Link } from 'react-router-dom';

const Artikellainnya = () => {
  const articles = [
    {
      id: 1,
      title:
        '3 Metode Pembelajaran PAUD dan Manfaatnya untuk Perkembangan Anak',
    },
    {
      id: 2,
      title:
        '3 Metode Pembelajaran PAUD dan Manfaatnya untuk Perkembangan Anak',
    },
    {
      id: 3,
      title:
        '3 Metode Pembelajaran PAUD dan Manfaatnya untuk Perkembangan Anak',
    },
  ];

  return (
    <div className='mx-0 sm:mx-10'>
      <h3 className=' sm:text-[36px] text-[28px] mt-5 sm-mt-0 font-bold'>
        Artikel Lainnya
      </h3>

      {articles.map((article) => (
        <React.Fragment key={article.id}>
          <Link to={`/articles/${article.id}`}>
            <p className='sm:text-[24px] text-[18px] my-2 sm:my-5 sm:leading-[40px] hover:bg-slate-400 sm:rounded-lg hover:text-white '>
              {article.title}
            </p>
          </Link>
          <hr />
        </React.Fragment>
      ))}
    </div>
  );
};

export default Artikellainnya;
