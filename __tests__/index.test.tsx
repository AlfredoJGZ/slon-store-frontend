import { render, screen } from "@testing-library/react";
import Navbar from "../components/navbar";

describe("Home", () => {
  it("Navbar", () => {
    render(<Navbar />);
    const Logo = screen.getByAltText("Slon Logo");
    expect(Logo).toBeInTheDocument();
  });
});
