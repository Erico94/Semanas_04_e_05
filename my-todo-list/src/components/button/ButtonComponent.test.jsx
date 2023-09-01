import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { beforeEach, describe, expect } from "vitest";
import ButtonComponent from "./ButtonComponent";
import { vi } from "vitest";

const fn = vi.fn();

describe("Teste suite buttonComponent", () => {
  beforeEach(() => {
    render(<ButtonComponent>Meu botão</ButtonComponent>);
  });

  it("Should be able to render button component", () => {
    expect(screen.getByTestId("button-component")).toBeInTheDocument();
  });

  it("Should be not disabled button component", () => {
    expect(screen.getByTestId("button-component")).not.toBeDisabled();
  });

  it('Should be not show  text "carregando" in the button component', () => {
    expect(screen.getByTestId("button-component")).not.toHaveTextContent(
      "Carregando"
    );
  });

  it("Should be type button", () => {
    const button = screen.getByTestId("button-component");
    expect(button).toHaveAttribute("type", "button");
  });

  it('Should show text "Meu botao"', () => {
    const button = screen.getByTestId('button-component');
    expect(button).toHaveTextContent('Meu botão');
  });
});
describe('Test suite buttonComponent is disabled',()=>{

    it('Should be disabled',()=>{
        render(<ButtonComponent disabled ={true} >Meu botão</ButtonComponent>);
        const button = screen.getByTestId('button-component');
        expect(button).toBeDisabled();
    })
})
describe('Test suite ButtonComponent loading',()=>{
    it('Should be loading', ()=>{
        render(<ButtonComponent loading={true}>Meu botão</ButtonComponent>);
        const button = screen.getByTestId('button-component');
        expect(button).toHaveTextContent('Carregando');
    })
})

describe('Test suite buttonComponent has click action',()=>{
    it('Should be click action ',()=>{
        render (<ButtonComponent onClick={fn}>Meu botão</ButtonComponent>);
        const button = screen.getByTestId('button-component');
        fireEvent.click(button);
        expect(fn).toBeCalled();
    })
})
