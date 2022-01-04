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

  it('should have loading class when loading is true ', () => {
    const { container } = render(<Button loading>button</Button>)
    expect(container.firstChild?.firstChild).toHaveClass('xm-button-loading')
  })
})
