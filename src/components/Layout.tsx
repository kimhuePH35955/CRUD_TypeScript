import { Outlet } from 'react-router-dom'
import Header from './Header'
import Sidebar from './Sidebar'

/* eslint-disable @typescript-eslint/no-unused-vars */
type Props = object

const Layout = (_props: Props) => {
  return (
    <div className='container'>
      <Header />
      <div className='flex'>
        <Sidebar />
        <div className='w-full ml-4'>{<Outlet />}</div>
      </div>
    </div>
  )
}

export default Layout
