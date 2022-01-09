import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import Avatar from '../index'
import Button from '@/Button'

describe('Avatar', () => {
  it('should render last name when name is not null', () => {
    render(<Avatar name={'杨白'} />)
    expect(screen.getByText('杨')).toBeInTheDocument()
  })

  it('should render character - when name is null', () => {
    render(<Avatar name={''} />)
    expect(screen.getByText('-')).toBeInTheDocument()
  })

  it('should render same text passed into children prop', () => {
    render(
      <Avatar img="https://ss0.baidu.com/-Po3dSag_xI4khGko9WTAnF6hhy/zhidao/wh%3D680%2C800/sign=b7b9a2c2dd88d43ff0fc99f4452efe23/b8389b504fc2d562ce8fd55aec1190ef77c66c85.jpg" />
    )
    const buttonElement = screen.getByRole('img')
    expect(buttonElement).toBeInTheDocument()
  })

  it('should fire click event when onClick', () => {
    const handleClick = jest.fn()
    render(<Avatar onClick={handleClick} />)
    const avatarElement = screen.getByTestId('avatar')
    fireEvent.click(avatarElement)
    expect(handleClick).toBeCalled()
  })

  it('should have class medium when size is "medium"', () => {
    const { container } = render(<Avatar name={'杨白'} size="medium" className="abc" />)
    expect(container.firstChild).toHaveClass('abc')
    expect(container.firstChild).toHaveClass('medium')
  })
})
