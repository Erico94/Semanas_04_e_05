import '@testing-library/jest-dom';
import {BrowserRouter} from 'react-router-dom'
import {ErrorPage} from './ErrorPage'
import { render, screen, fireEvent } from '@testing-library/react';
import { beforeEach, describe, expect } from 'vitest';
import { vi } from 'vitest';

const mockNavigateTo = vi.fn();

vi.mock('react-router-dom', async()=>{
    const actual = await vi.importActual('react-router-dom');

    return{
        ...actual,
        useNavigate: () => mockNavigateTo,
    }
})





describe('Test suit ErrorPage', () =>{
    beforeEach(()=>{
        render(<ErrorPage/>,  { wrapper: BrowserRouter })
    })

    it('Should be able to render ErrorPage component',()=>{
        expect(screen.getByTestId('error-page-component')).toBeInTheDocument();
    })
    it('Should be able to render the text "Opss"', () =>{
        expect(screen.getByText(/Opss/i)).toBeInTheDocument();
    }) 

    it('Should be able to redirect user to home page',()=>{
        fireEvent.click(screen.getByText(/Voltar para pagina inicial/));
        expect(mockNavigateTo).toHaveBeenCalledWith('/');
    }) 
})