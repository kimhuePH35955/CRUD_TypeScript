import { Link } from 'react-router-dom'

/* eslint-disable @typescript-eslint/no-unused-vars */
type Props = object

const NotFound = (_props: Props) => {
  return (
    <>
      <div>NotFound</div>
      <Link to='/'>Trở về trang quản lí</Link>
    </>
  )
}

export default NotFound
