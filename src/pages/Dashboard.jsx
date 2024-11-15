import React from 'react'
import { useSelector } from 'react-redux'
import {Outlet} from 'react-router-dom'
import Sidebar from '../components/core/Dashboard/Sidebar'

const Dashboard = () => {

  const {loading: authloading} = useSelector((state) => state.auth);
  const {loading: profileloading} = useSelector((state) => state.auth);

  if(authloading || profileloading){
    return(
        <div className='mt-10'>
            Loading...
        </div>
    )
  }


  return (
    <div className='relative flex min-h-[calc(100vh-3.5rem)] bg-richblack-900'>
      <Sidebar/>
      <div className='h-[calc(100vh-3.5rem)] w-screen overflow-auto'>
       <div className='mx-auto w-11/12 max-w-[1000px] py-10'>
         <Outlet/>
       </div>
      </div>
    </div>
  )
}

export default Dashboard