import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Button from '../index'

test('Button', () => {
  const testButton = 'default'
  render(<Button>{testButton}</Button>)
  expect(screen.getByText(testButton)).toBeInTheDocument()
})
