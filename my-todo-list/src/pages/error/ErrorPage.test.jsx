import '@testing-library/jest-dom';
import {BrowserRouter} from 'react-router-dom'
import {ErrorPage} from './ErrorPage'
import { render, screen } from '@testing-library/react';
import { beforeEach, describe, expect } from 'vitest';
import { Button } from '../../components/button/ButtonComponent.style';
import ButtonComponent from '../../components/button/ButtonComponent';

describe('Teste da ErrorPage', () =>{
    beforeEach(()=>{
        render(<ErrorPage/>,  { wrapper: BrowserRouter })
    })
    it('Verifica se contém Opss...', () =>{
        expect(screen.getByText(/Opss/i)).toBeInTheDocument();
    }) 
    it('Verifica se o button foi renderizado', ()=>{
        expect(screen.getByRole('button')).toBeInTheDocument();
    })
})