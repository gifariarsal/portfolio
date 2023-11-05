import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='w-full border-t border-solid border-dark font-medium text-lg dark:text-light dark:border-light sm:text-base'>
        <Layout className='!py-8 flex items-center justify-between lg:flex-col lg:!py-6'>
            <span>{new Date().getFullYear()} &copy; All Rights Reserved</span>
        </Layout>
    </footer>
  )
}

export default Footer