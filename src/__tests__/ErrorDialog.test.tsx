import { fireEvent, render, screen } from "@testing-library/react"
import ErrorDialog from "../components/ErrorDialog";

test("Render Error Dialog", async () => {
    render(<ErrorDialog />);
    expect(screen.getByText(/Some error has occurred/i)).toBeDefined();
    expect(screen.getByRole("refresh")).toBeDefined();
    fireEvent(screen.getByRole("refresh"), new Event("click"));

})