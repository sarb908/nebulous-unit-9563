import React from 'react'
import {Routes , Route} from 'react-router-dom'
import Client from '../ManagePages/Client'
import Role from '../ManagePages/Role'
import Task from '../ManagePages/Task'
import Expence_categ from '../ManagePages/Expence_categ'
import ManageNavbar from '../ManagePages/ManageNavbar'
import AddClient from '../ManagePages/AddClient'
import AddContact from '../ManagePages/AddContact'

const Manage = () => {
  return (
    <>
    <ManageNavbar />
    <Routes>
        <Route path='/client'element={<Client />}/>
        <Route path='/task' element={<Task />}/>
        <Route path='/expence_categ' element={<Expence_categ />}/>
        <Route path='/role' element={<Role />}/>
        <Route path='/client/new' element={<AddClient />}/>
        <Route path='/contact/new' element={<AddContact />} />
    </Routes>
    </>
  )
}

export default Manage