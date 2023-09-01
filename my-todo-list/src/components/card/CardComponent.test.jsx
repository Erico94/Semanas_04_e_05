import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { CardComponent } from "./CardComponent";
import { MockUtils } from "../../utils/mock";
import { BrowserRouter } from "react-router-dom";

const mockTodo = MockUtils.todos[0];

describe("Test suite CardComponent", () => {
  beforeEach(() => {
    render(<CardComponent todo={mockTodo} />, { wrapper: BrowserRouter });
  });

  it("Should be able to render component", () => {
    const card = screen.getByTestId("card-component");
    expect(card).toBeInTheDocument();
  });

  it('Should be able to render title',()=>{
    expect(screen.getByText(/Tarefa 1/)).toBeInTheDocument();
  })

  it('Should be able to render description',()=>{
    expect(screen.getByText(/Lorem/)).toBeInTheDocument();
  })

});
