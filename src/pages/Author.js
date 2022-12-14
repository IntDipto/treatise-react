import React from 'react'
import AuthorPost from '../components/author/AuthorPost'
import Subscribe from '../components/home/Subscribe'
import useTitleHook from '../Hooks/useTitleHook'

function Author() {
  useTitleHook('Authors')
  return (
    <div className='mt-20 sm:mt-32'>
        <AuthorPost></AuthorPost>
        <Subscribe></Subscribe>
    </div>
  )
}

export default Author