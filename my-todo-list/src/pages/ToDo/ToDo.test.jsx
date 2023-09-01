import '@testing-library/jest-dom'
import { ToDo } from './ToDo'
import { describe, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'

describe('Test suit from todo Page', ()=>{
    it('Should be able to render todo page', ()=>{
        render(<ToDo/>, { wrapper: BrowserRouter })
        expect(screen.getByTestId('todo-form')).toBeInTheDocument();
    })
})