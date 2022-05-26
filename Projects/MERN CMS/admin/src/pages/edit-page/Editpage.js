import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import './editpage.scss';

export default function Editpage() {

    let id = useParams({});
    console.log(id.pageId)

    //Active Class Tabs
    useEffect(() => {
            let  i;
            let item = document.querySelectorAll('.wp-block-list .item')
            let blockList = document.querySelectorAll('.block');
            item[0].classList.add('active');

            let checkClass = document.querySelector('.item.active');
            var getValue = checkClass.getAttribute('data-block')

            let blockValue = document.querySelector('.block[data-block='+ getValue +']');
            for (i = 0; i < blockList.length; i++){
                blockList[i].classList.remove('active');
            }

            blockValue.classList.add('active');

            item.forEach(navItem => {
                navItem.addEventListener('click', function(){
                    for (i = 0; i < item.length; i++){
                        item[i].classList.remove('active');
                    }
                    this.classList.add('active');

                    let itemValue = this.getAttribute('data-block');

                    let blockValue = document.querySelector('.block[data-block='+ itemValue +']');
                    for (i = 0; i < blockList.length; i++){
                        blockList[i].classList.remove('active');
                    }

                    blockValue.classList.add('active');
                });
            });
    }, []);

    let Created = false;

  return (
    <div className='p-edit-page'>
        <section className='block-list'>
            <div className='wp-block-list'>
                <ul>
                    <li className='item' data-block='heroBlock'>Hero Block</li>
                    <li className='item' data-block='servicesBlock'>Services Block</li>
                    <li className='item' data-block='portgolioBlock'>Portfolio Block</li>
                    <li className='item' data-block='uiBlock'>Ui Block</li>
                </ul>
            </div>
        </section>
        <section className='block s-hero' data-block='heroBlock'>
            <div className='title'>
                <h1>Hero Block</h1>
            </div>
            <div className='s-details'>
                <input type='text' placeholder='Hero Title' />
                <textarea type='text' placeholder='Hero Description' />
                <input type='text' placeholder='Hero Button Name' />
            </div>
            <div className='save-area'>
            {Created ?
                <button className='btn'>Update Block</button>
                :
                <button className='btn'>Save Block</button>
            }
            </div>
        </section>
        <section className='block s-service' data-block='servicesBlock'>
            <div className='title'>
                <h1>Services Block</h1>
            </div>
            <div className='s-details'>
                <input type='text' placeholder='Hero Sub Title' />
                <input type='text' placeholder='Hero Title' />
                <textarea type='text' placeholder='Hero Description' />

                <div className='block-list-item'>
                    <h2>Item 01</h2>
                    <div className='item-list-details'>
                        <input type='file' />
                        <input type='text' placeholder='Hero Sub Title' />
                        <input type='text' placeholder='Hero Title' />
                    </div>
                </div>
                <div className='block-list-item'>
                    <h2>Item 02</h2>
                    <div className='item-list-details'>
                        <input type='file' />
                        <input type='text' placeholder='Hero Sub Title' />
                        <input type='text' placeholder='Hero Title' />
                    </div>
                </div>
                <div className='block-list-item'>
                    <h2>Item 03</h2>
                    <div className='item-list-details'>
                        <input type='file' />
                        <input type='text' placeholder='Hero Sub Title' />
                        <input type='text' placeholder='Hero Title' />
                    </div>
                </div>
                <div className='block-list-item'>
                    <h2>Item 04</h2>
                    <div className='item-list-details'>
                        <input type='file' />
                        <input type='text' placeholder='Hero Sub Title' />
                        <input type='text' placeholder='Hero Title' />
                    </div>
                </div>
                <div className='block-list-item'>
                    <h2>Item 05</h2>
                    <div className='item-list-details'>
                        <input type='file' />
                        <input type='text' placeholder='Hero Sub Title' />
                        <input type='text' placeholder='Hero Title' />
                    </div>
                </div>
                <div className='block-list-item'>
                    <h2>Item 06</h2>
                    <div className='item-list-details'>
                        <input type='file' />
                        <input type='text' placeholder='Hero Sub Title' />
                        <input type='text' placeholder='Hero Title' />
                    </div>
                </div>
            </div>
            <div className='save-area'>
            {Created ?
                <button className='btn'>Update Block</button>
                :
                <button className='btn'>Save Block</button>
            }
            </div>
        </section>
        <section className='block s-portgolio' data-block='portgolioBlock'>
            <div className='title'>
                <h1>Portfolio Block</h1>
            </div>
            <div className='s-details'>
                <input type='text' placeholder='Hero Sub Title' />
                <input type='text' placeholder='Hero Title' />
                <textarea type='text' placeholder='Hero Description' />
                <input type='text' placeholder='Hero Button Name' />

                <div className='block-list-item'>
                    <h2>Item 01</h2>
                    <div className='item-list-details'>
                        <input type='file' />
                    </div>
                </div>
                <div className='block-list-item'>
                    <h2>Item 02</h2>
                    <div className='item-list-details'>
                        <input type='file' />

                    </div>
                </div>
                <div className='block-list-item'>
                    <h2>Item 03</h2>
                    <div className='item-list-details'>
                        <input type='file' />
                    </div>
                </div>
            </div>
            <div className='save-area'>
            {Created ?
                <button className='btn'>Update Block</button>
                :
                <button className='btn'>Save Block</button>
            }
            </div>
        </section>
        <section className='block s-ui' data-block='uiBlock'>
            <div className='title'>
                <h1>Ui Block</h1>
            </div>
            <div className='s-details'>
                <input type='text' placeholder='Hero Sub Title' />
                <input type='text' placeholder='Hero Title' />

                <div className='block-list-item'>
                    <h2>Item 01</h2>
                    <div className='item-list-details'>
                        <input type='file' />
                    </div>
                </div>
                <div className='block-list-item'>
                    <h2>Item 02</h2>
                    <div className='item-list-details'>
                        <input type='file' />

                    </div>
                </div>
                <div className='block-list-item'>
                    <h2>Item 03</h2>
                    <div className='item-list-details'>
                        <input type='file' />
                    </div>
                </div>
                <div className='block-list-item'>
                    <h2>Item 04</h2>
                    <div className='item-list-details'>
                        <input type='file' />
                    </div>
                </div>
                <div className='block-list-item'>
                    <h2>Item 05</h2>
                    <div className='item-list-details'>
                        <input type='file' />
                    </div>
                </div>
                <div className='block-list-item'>
                    <h2>Item 06</h2>
                    <div className='item-list-details'>
                        <input type='file' />
                    </div>
                </div>
                <div className='block-list-item'>
                    <h2>Item 07</h2>
                    <div className='item-list-details'>
                        <input type='file' />
                    </div>
                </div>
                <div className='block-list-item'>
                    <h2>Item 08</h2>
                    <div className='item-list-details'>
                        <input type='file' />
                    </div>
                </div>
                <div className='block-list-item'>
                    <h2>Item 09</h2>
                    <div className='item-list-details'>
                        <input type='file' />
                    </div>
                </div>
                <div className='block-list-item'>
                    <h2>Item 10</h2>
                    <div className='item-list-details'>
                        <input type='file' />
                    </div>
                </div>
                <div className='block-list-item'>
                    <h2>Item 11</h2>
                    <div className='item-list-details'>
                        <input type='file' />
                    </div>
                </div>
            </div>
            <div className='save-area'>
            {Created ?
                <button className='btn'>Update Block</button>
                :
                <button className='btn'>Save Block</button>
            }
            </div>
        </section>
    </div>
  )
}