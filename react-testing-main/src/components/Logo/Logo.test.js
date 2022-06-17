import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import "@testing-library/jest-dom/extend-expect";
import { prettyDOM } from "@testing-library/dom";
import Logo from "./Logo";

describe("[LOGO]: html content", () => {
  it("render exact text", () => {
    render(<Logo />);

    expect(screen.getByText(/aprendiendo testing/)).toBeInTheDocument();
  });

  it("render an title element", () => {
    render(<Logo />);
    expect(screen.getByTestId("title")).toBeInTheDocument();
  });

  it("render a subtitle prop", () => {
    render(<Logo subtitle="Esto es el subtitulo de mi aplicación" />);
    expect(screen.getByText(/subtitulo de mi aplicación/i)).toBeVisible("subtitulo de mi aplicación");
  });
});

describe("[LOGO]: Test events", () => {
  it("fire an event", () => {
    render(<Logo subtitle="hey" />);

    userEvent.click(screen.getByTestId("button"));

    expect(screen.getByText(/estoy visible/i)).toBeVisible();
  });
});
