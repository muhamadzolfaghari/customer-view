import { render, screen } from "@testing-library/react"
import LanguageSlider from "../components/LanguageSlider";

test("Render Language Slider", async () => {
    render(<LanguageSlider language="en" onChange={() => { }} />);
    expect(screen.getByText(/de/i)).toBeDefined();
    expect(screen.getByText(/en/i)).toBeDefined();
})

