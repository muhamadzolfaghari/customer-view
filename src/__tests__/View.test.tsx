// src/__ tests __/App.test.tsx

import { render, screen } from "@testing-library/react"
import View from "../components/View"

test('demo', () => {
    expect(true).toBe(true)
})

test("Renders the main page", async () => {
    render(<View />)
    const content = await screen.findByText(/this code/i)
    expect(content)
    expect(true).toBeTruthy()
})