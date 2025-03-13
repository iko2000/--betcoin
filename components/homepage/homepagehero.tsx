'use client'
import React from 'react'
import InfiniteMenu from '../reactbits/gridmenu';
export default function Homepagehero() {

    const items = [
        {
          image: 'https://picsum.photos/300/300?grayscale',
          link: 'https://google.com/',
          title: 'Item 1',
          description: 'This is pretty cool, right?'
        },
        {
          image: 'https://picsum.photos/400/400?grayscale',
          link: 'https://google.com/',
          title: 'Item 2',
          description: 'This is pretty cool, right?'
        },
        {
          image: 'https://picsum.photos/500/500?grayscale',
          link: 'https://google.com/',
          title: 'Item 3',
          description: 'This is pretty cool, right?'
        },
        {
          image: 'https://picsum.photos/600/600?grayscale',
          link: 'https://google.com/',
          title: 'Item 4',
          description: 'This is pretty cool, right?'
        }
      ];
      
  return (
    <section className='h-screen w-full'>
        <InfiniteMenu items={items}/>
    </section>
  )
}
