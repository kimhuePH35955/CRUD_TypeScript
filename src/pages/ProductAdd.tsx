import { Link } from 'react-router-dom'
import { TProduct } from '../common/Product'
import { useForm } from 'react-hook-form'
import Joi from 'joi'
import { joiResolver } from '@hookform/resolvers/joi'

/* eslint-disable @typescript-eslint/no-unused-vars */
type Props = {
  onAdd: (product: TProduct) => void
}

const productSchema = Joi.object({
  name: Joi.string().required().min(3),
  image: Joi.string().allow(null, ''),
  price: Joi.number().min(0).required(),
  description: Joi.string().required().min(1),
  count: Joi.number().allow(null, ''),
  brand: Joi.number().allow(null, '')
})

// brand?: number

const ProductAdd = ({ onAdd }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<TProduct>({
    resolver: joiResolver(productSchema)
  })

  const onSubmit = (product: TProduct) => {
    onAdd(product)
  }
  return (
    <>
      <div>
        <div className='flex border-b py-4'>
          <Link to='' className='text-4xl font-bold'>
            Thêm sản phẩm
          </Link>
        </div>
        <div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
          <form onSubmit={handleSubmit(onSubmit)} id='formAdd' className='mt-4 mr-4'>
            <div className='mb-5'>
              <label htmlFor='name' className='block ml-4 mb-2 text-sm font-medium text-gray-900'>
                Tên sản phẩm
              </label>
              <input
                type='text'
                id='name'
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5'
                {...register('name', { required: true })}
              />
              {errors.name && (
                <div id='nameError' className='error text-red-500 mt-4 ml-4 form-text text-danger'>
                  {errors.name.message}
                </div>
              )}
            </div>
            <div className='mb-5'>
              <label htmlFor='image' className='block ml-4 mb-2 text-sm font-medium text-gray-900'>
                Hình ảnh
              </label>
              <input
                type='text'
                id='image'
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5'
                {...register('image')}
              />
              {errors.image && (
                <div id='imageError' className='error text-red-500 mt-4 ml-4 form-text text-danger'>
                  {errors.image.message}
                </div>
              )}
            </div>
            <div className='mb-5'>
              <label htmlFor='price' className='block ml-4 mb-2 text-sm font-medium text-gray-900'>
                Giá
              </label>
              <input
                type='text'
                id='price'
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5'
                {...register('price', { required: true })}
              />
              {errors.price && (
                <div id='priceError' className='error text-red-500 mt-4 ml-4 form-text text-danger'>
                  {errors.price.message}
                </div>
              )}
            </div>
            <div className='mb-5'>
              <label htmlFor='count' className='block ml-4 mb-2 text-sm font-medium text-gray-900'>
                Số lượng
              </label>
              <input
                type='text'
                id='count'
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5'
                {...register('count')}
              />
              {errors.count && (
                <div id='countError' className='error text-red-500 mt-4 ml-4 form-text text-danger'>
                  {errors.count.message}
                </div>
              )}
            </div>
            <div className='mb-5'>
              <label htmlFor='description' className='block ml-4 mb-2 text-sm font-medium text-gray-900'>
                Mô tả
              </label>
              <textarea
                id='description'
                className='bg-gray-50 border border-gray-300 text-gray-900 rounded-lg w-full p-2.5'
                cols={30}
                rows={10}
                {...register('description', { required: true })}
              />
              {errors.description && (
                <div id='descriptionError' className='error text-red-500 mt-4 ml-4 form-text text-danger'>
                  {errors.description.message}
                </div>
              )}
            </div>
            <div className='mb-5'>
              <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white' htmlFor='brand'>
                Brand
              </label>
              <select
                id='brand'
                className='w-[200px] border border-gray-300 text-gray-900 text-sm rounded-md bg-gray-50 focus:ring-blue-500 focus:border-blue-500 block p-2.5'
                {...register('brand')}
              >
                <option value={2021}>2021</option>
                <option value={2022}>2022</option>
                <option value={2023}>2023</option>
                <option value={2024}>2024</option>
              </select>
            </div>

            <button
              type='submit'
              className='text-white bg-blue-700 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center'
            >
              Thêm
            </button>
            <Link
              to='/'
              className='text-white bg-blue-700 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ml-4'
            >
              Danh sách
            </Link>
          </form>
        </div>
      </div>
    </>
  )
}

export default ProductAdd
