import '@testing-library/jest-dom'
import { render, screen} from '@testing-library/react'
import { HeaderComponent } from './HeaderComponent'



describe('Test suite HeaderComponent',()=>{
    beforeEach(()=>{
        render(<HeaderComponent/>)
    })

    it('Should be able to render HeaderComponent',()=>{
        expect(screen.getByTestId('header-component')).toBeInTheDocument();
    })

    it('Should be able to render logo', ()=>{
        expect(screen.getByTestId('header-logo')).toBeInTheDocument();
    })

    it('To be able to render username',()=>{
        expect(screen.getByText(/Érico/)).toBeInTheDocument();
    })
})