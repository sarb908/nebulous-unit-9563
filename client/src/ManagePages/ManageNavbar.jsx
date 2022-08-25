import React from 'react'
import { Link } from 'react-router-dom'

const ManageNavbar = () => {
  return (
    <>
    <Link to='client'>Client</Link>
    <Link to='task'>Task</Link>
    <Link to='expence_categ'>Expence Category</Link>
    <Link to='role'>Role</Link>
    </>
  )
}

export default ManageNavbar