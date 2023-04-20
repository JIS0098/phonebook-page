import React from 'react'
import SearchBox from './SearchBox'
import ContactItem from './ContactItem'

const ContactList = () => {
  return (
    <div className='right-layout'>
        <SearchBox/>
        <ContactItem/>
    </div>
  )
}

export default ContactList