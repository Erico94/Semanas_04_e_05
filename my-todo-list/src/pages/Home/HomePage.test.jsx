import '@testing-library/jest-dom'
import { HomePage } from './HomePage'
import { describe, expect } from 'vitest'
import { render, screen } from '@testing-library/react'

describe('Test suite homePage',()=>{
    it('Should be rendering homePage',()=>{
        render(<HomePage/>);
        expect(screen.getByTestId('home-page')).toBeInTheDocument(); 
    })

    it('Should be rendering cardComponent', ()=>{
        render(<HomePage/>);
        expect(screen.getByTestId('card-component')).toBeInTheDocument();
    })
})