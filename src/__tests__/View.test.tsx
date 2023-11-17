import { render, screen } from "@testing-library/react"
import View from "../components/View"

test("Render View", async () => {
    render(<View names={"John"} age={12} />);
    // This code is return the number of row that is existed
    expect(await screen.findAllByRole("row")).toHaveLength(2);
    expect(screen.getByText(/age:/i)).toBeDefined();
    expect(screen.getByText(/john/i)).toBeDefined();
    expect(screen.getByText(/12/i)).toBeDefined();
})