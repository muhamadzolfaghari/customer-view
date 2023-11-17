import { render, screen } from "@testing-library/react"
import View from "../components/View"

test("Render View", async () => {
    render(<View names={"John"} age={12} />);

    // This code is return the number of row that is existed
    const rows = await screen.findAllByRole("row");
    expect(rows.length).toBe(2);

    expect(screen.getByText(/age:/i));
    expect(screen.getByText(/name:/i));
    expect(screen.getByText(/John/i));
    expect(screen.getByText(/12/i));
})