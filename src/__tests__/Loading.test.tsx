import { render, screen } from "@testing-library/react"
import Loading from "../components/Loading";

test("Render Loading", async () => {
    render(<Loading />);
    expect(screen.getByText(/data is loading.../i)).toBeDefined();
})