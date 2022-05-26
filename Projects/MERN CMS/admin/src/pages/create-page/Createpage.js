import React, { useContext, useState } from 'react'
import './createpage.scss';
import { PageContext } from '../../context/pageContext/PageContext';
import { createPage } from '../../context/pageContext/apiCalls';

export default function Createpage() {

  const { dispatch } = useContext(PageContext);

  const [page, setPage] = useState({});

  const handleChange = (e) =>{
    const value = e.target.value;
    setPage({...page, [e.target.name] : value })
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createPage(page, dispatch);
  };

  return (
    <div className='p-create-page'>
      <section>
          <div className='wp-create-page'>
              <input className='page-name' type='text' placeholder='Page Name' name='pagename' onChange={handleChange} />
              <input className='page-url' type='text' placeholder='Page Url' name='url' onChange={handleChange} />
          </div>
          <div className='create-area'>
              <button className='btn' onClick={handleSubmit}>Create Page</button>
          </div>
      </section>
    </div>
  )
}