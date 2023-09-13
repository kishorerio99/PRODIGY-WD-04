import React from 'react';
import { Stats } from '../data';
import parse from 'html-react-parser';

const stats = () => {
  return (
    <>
        {Stats.map(({no , title} ,index) => {
            return(
                <div className='stats__box' key={index}>
                    <h3 className='stats__no'>{no}</h3>
                    <p className='stats__title'>{parse(title)}</p>
                </div>
            )
        })}
    </>
  );
};

export default stats;