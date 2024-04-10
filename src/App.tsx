import { Route, Routes, useNavigate } from 'react-router-dom'
import Products from './pages/Products'
import Layout from './components/Layout'
import NotFound from './pages/NotFound'
import ProductAdd from './pages/ProductAdd'
import ProductEdit from './pages/ProductEdit'
import Login from './pages/Login'
import Register from './pages/Register'
import { TProduct } from './common/Product'
import { useEffect, useState } from 'react'
import instance from './apis'

function App() {
  const [products, setProducts] = useState<TProduct[]>([])
  const navigate = useNavigate()
  useEffect(() => {
    ;(async () => {
      const { data } = await instance.get('/products')
      setProducts(data)
    })()
  }, [])

  const onHandleDelete = (id: string | undefined) => {
    ;(async () => {
      const confirm = window.confirm('Bạn có chắc chắn muốn xóa không ?')
      if (confirm) {
        try {
          await instance.delete(`/products/${id}`)
          alert('Xóa sản phẩm thành công')
          setProducts(products.filter((item) => item.id != id))
        } catch (error) {
          console.log(error)
        }
      }
    })()
  }
  const onHandleAdd = (product: TProduct) => {
    ;(async () => {
      try {
        const { data } = await instance.post('/products', product)
        setProducts([...products, data])
        alert('Thêm sản phẩm thành công')
        navigate('/')
      } catch (error) {
        console.log(error)
      }
    })()
  }

  const onHandleEdit = (product: TProduct) => {
    ;(async () => {
      try {
        const { data } = await instance.put(`/products/${product.id}`, product)
        setProducts(products.map((item) => (item.id === data.id ? data : item)))
        alert('Cập nhật sản phẩm thành công')
        navigate('/')
      } catch (error) {
        console.log(error)
      }
    })()
  }
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Products onDelete={onHandleDelete} products={products} />} />
          <Route path='/products/add' element={<ProductAdd onAdd={onHandleAdd} />} />
          <Route path='/products/edit/:id' element={<ProductEdit onEdit={onHandleEdit} />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
