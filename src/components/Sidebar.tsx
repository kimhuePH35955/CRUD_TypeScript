import { Link } from 'react-router-dom'

/* eslint-disable @typescript-eslint/no-unused-vars */
type Props = object

const Sidebar = (_props: Props) => {
  return (
    <div className='w-[300px] border-r-2 h-screen bg-rose-200'>
      <ul className='w-[300px]'>
        <li className='border-b h-[50px]  hover:bg-lime-500'>
          <Link to='/' className='block text-center leading-[50px]'>
            Sản phẩm
          </Link>
        </li>
        <li className=' border-b h-[50px]  hover:bg-lime-500'>
          <Link to='/register' className='block text-center leading-[50px]'>
            Tài khoản
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
