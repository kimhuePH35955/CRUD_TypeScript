import { Link } from 'react-router-dom'
import { TProduct } from '../common/Product'

/* eslint-disable @typescript-eslint/no-unused-vars */
type Props = {
  products: TProduct[]
  onDelete: (id: string | undefined) => void
}

const Products = ({ products, onDelete }: Props) => {
  const removeProduct = (id: string | undefined) => {
    onDelete(id)
  }
  return (
    <>
      <div className='flex justify-between text-center border-b py-4'>
        <p className='text-4xl font-bold text-center'>Danh sách sản phẩm</p>
        <Link to='/products/add' className='mr-20 border bg-gray-200 rounded-md px-4 text-center flex items-center'>
          Thêm
        </Link>
      </div>
      <div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
        <table className='w-full text-sm rtl:text-right text-gray-50 text-center'>
          <thead className='text-xs text-gray-700 uppercase bg-gray-50'>
            <tr>
              <th scope='col' className='w-[50px]'>
                <span>STT</span>
              </th>
              <th scope='col' className='px-6 py-3'>
                Tên sản phẩm
              </th>
              <th scope='col' className='px-6 py-3'>
                Hình ảnh
              </th>
              <th scope='col' className='px-6 py-3'>
                Giá
              </th>
              <th scope='col' className='px-6 py-3'>
                Phiên bản
              </th>
              <th scope='col' className='px-6 py-3'>
                Mô tả
              </th>
              <th scope='col' className='px-6 py-3' />
            </tr>
          </thead>
          <tbody>
            {products.map((item) => (
              <tr key={item.id} className='bg-white border-b'>
                <td className='font-semibold text-gray-900'>{item.id}</td>
                <td className='px-6 py-4 font-semibold text-gray-900'>{item.name}</td>
                <td className='px-6 py-4 font-semibold text-gray-900'>
                  <img className='m-auto w-[100px] h-[150px] object-cover' src={item.image} />
                </td>
                <td className='px-6 py-4 font-semibold text-gray-900'>{item.price}</td>
                <td className='px-6 py-4 font-semibold text-gray-900'>{item.brand}</td>
                <td className='px-6 py-4 font-semibold text-gray-900'>{item.description}</td>
                <td className='px-6 py-4'>
                  <Link to={`/products/edit/${item.id}`} className='px-4 py-2 bg-blue-600 text-white rounded-md mr-4'>
                    Sửa
                  </Link>
                  <button
                    onClick={() => removeProduct(String(item.id))}
                    className='px-4 py-2 bg-red-600 text-white rounded-md mr-4'
                  >
                    Xóa
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Products
