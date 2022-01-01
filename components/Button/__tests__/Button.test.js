import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import Button from '../index'

describe('Button', () => {
  it('should render same text passed into children prop', () => {
    render(<Button>button</Button>)
    expect(screen.getByText('button')).toBeInTheDocument()
  })

  it('should render same text passed into children prop', () => {
    render(<Button>button</Button>)
    const buttonElement = screen.getByRole('button')
    expect(buttonElement).toBeInTheDocument()
  })

  it('should click button', () => {
    const handleClick = jest.fn()

    render(<Button onClick={handleClick}>button</Button>)
    const buttonElement = screen.getByRole('button')
    fireEvent.click(buttonElement)
    expect(handleClick).toBeCalled()
  })
})
