import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product.js'
import { listProducts } from '../actions/productActions.js'
import Message from '../components/Message.js'
import Loader from '../components/Loader.js'
import Paginate from '../components/Paginate.js'
import Meta from '../components/Meta.js'
import { Link, useParams } from 'react-router-dom'
import ProductCarousel from '../components/ProductCarousel.js'

const HomeScreen = () => {
  const dispatch = useDispatch()
  const { keyword, pageNumber = 1 } = useParams()

  const productList = useSelector((state) => state.productList)
  const { loading, error, products, page, pages } = productList

  useEffect(() => {
    dispatch(listProducts(keyword, pageNumber))
  }, [dispatch, keyword, pageNumber])

  return (
    <>
      <Meta />
      {!keyword ? (
        <ProductCarousel />
      ) : (
        <Link className='btn btn-light my-3' to='/'>
          Go Back
        </Link>
      )}
      <h1>Latest products</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
          <Row>
            {products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product}></Product>
              </Col>
            ))}
          </Row>
          <Paginate
            pages={pages}
            page={page}
            keyword={keyword ? keyword : ''}
          />
        </>
      )}
    </>
  )
}

export default HomeScreen
