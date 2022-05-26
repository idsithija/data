import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom';
import './home.scss';
import { PageContext } from '../../context/pageContext/PageContext';
import { getPages } from '../../context/pageContext/apiCalls';

export default function Home() {
  
  const {pages, dispatch} = useContext(PageContext);

  useEffect(()=>{
    getPages(dispatch);
  }, [dispatch]);

  
  return (
    <div className='p-home'>
      <section>
        <div className='create-page'>
          <Link to='/create-page' className='btn'>
            Create Page
          </Link>
        </div>
        <div className='page-list'>
          <ul>
            <li>Page Name</li>
            <li>Url</li>
            <li>View</li>
            <li>Edit</li>
          </ul>
          {pages.map((value) => { return <div key={value._id} className='page-details'>
            <div className='page-data'>
              <div className='data'><span>{value.pagename}</span></div>
              <div className='data'><span>{value.url}</span></div>
              <div className='data'>
                <a className='btn' href='https://www.google.com/' target='_blank' alt='page-url' rel="noreferrer">View Page</a>
              </div>
              <div className='data'>
                <Link className='btn' to={{ pathname: "/edit-page/" + value._id }}>Edit Page</Link>
              </div>
            </div>
          </div> })}
        </div>
      </section>
    </div>
  )
}