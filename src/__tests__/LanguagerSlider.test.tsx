import { fireEvent, render, screen } from "@testing-library/react"
import ErrorDialog from "../components/ErrorDialog";
import LanguageSlider from "../components/LanguageSlider";

test("Render Language Slider", async () => {
    render(<LanguageSlider onChange={function (): void {
        throw new Error("Function not implemented.");
    }} />);
    expect(screen.getByText(/de/i)).toBeDefined();
    expect(screen.getByText(/en/i)).toBeDefined();
})

// test("Change Language", () => {
//     render()
// })