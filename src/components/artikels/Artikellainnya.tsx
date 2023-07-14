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
      <h3 className='sm:text-2xl text-[36px] font-bold'>Artikel Lainnya</h3>
      {articles.map((article) => (
        <React.Fragment key={article.id}>
          <Link to={`/articles/${article.id}`}>
            <p className='xl:text-[24px] text-sm my-2 sm:my-10 leading-[40px]'>
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
