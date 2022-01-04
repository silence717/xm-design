import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import Switch from '../index'

describe('Switch', () => {
  it('should render checked text correctly', () => {
    render(<Switch checked checkedText={'on'} />)
    expect(screen.getByText('on')).toBeInTheDocument()
  })

  it('should render unchecked text correctly', () => {
    render(<Switch unCheckedText={'off'} />)
    expect(screen.getByText('off')).toBeInTheDocument()
  })

  it('should confirm on before change', () => {
    const handleBeforeChange = jest.fn()
    render(<Switch unCheckedText={'off'} onBeforeChange={handleBeforeChange} />)
    const switchElement = screen.getByTestId('switchButton')
    fireEvent.click(switchElement)
    expect(handleBeforeChange).toBeCalled()
  })

  it('should change checked state when click switch button', () => {
    const handleChange = jest.fn()
    render(<Switch checked={true} checkedText={'on'} unCheckedText={'off'} onChange={handleChange} />)
    expect(screen.getByText('on')).toBeInTheDocument()
    const switchElement = screen.getByTestId('switchButton')
    fireEvent.click(switchElement)
    expect(handleChange).toBeCalled()
  })

  it('should can not fire click event when disabled is true', () => {
    const handleClick = jest.fn()
    render(<Switch checked disabled checkedText={'on'} onChange={handleClick} />)
    const switchElement = screen.getByTestId('switchButton')
    fireEvent.click(switchElement)
    expect(handleClick).not.toBeCalled()
  })
})
