import React from 'react'
import { Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const CheckoutSteps = ({ step1, step2, step3, step4 }) => {
  return (
    <Nav className='justify-content-center mb-4'>
      <Nav.Item>
        <LinkContainer to='/login' disabled={!step1}>
          <Nav.Link>Sign In</Nav.Link>
        </LinkContainer>
      </Nav.Item>

      <Nav.Item>
        <LinkContainer to='/shipping' disabled={!step2}>
          <Nav.Link>Shipping</Nav.Link>
        </LinkContainer>
      </Nav.Item>

      <Nav.Item>
        <LinkContainer to='/payment' disabled={!step3}>
          <Nav.Link>Payment</Nav.Link>
        </LinkContainer>
      </Nav.Item>

      <Nav.Item>
        <LinkContainer to='/placeorder' disabled={!step4}>
          <Nav.Link>Place Order</Nav.Link>
        </LinkContainer>
      </Nav.Item>
    </Nav>
  )
}

export default CheckoutSteps
