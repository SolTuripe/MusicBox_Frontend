/* eslint-disable testing-library/render-result-naming-convention */
import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Card from "./Card";

const Wrapper = ({ children }) => <MemoryRouter>{children}</MemoryRouter>;

describe("Card", () => {
  it("Must print the props", () => {
    const props = {
      artist: "artist",
      image: "",
      title: "title",
      genre: "genre",
      year: 1995,
      format: "format",
      price: 20,
    };

    const screen = render(<Card {...props} />, { wrapper: Wrapper });

    expect(screen.getByText(props.artist)).toBeInTheDocument();
    expect(screen.getByTestId("image")).toBeInTheDocument();
    expect(screen.getByText(props.title)).toBeInTheDocument();
    expect(screen.getByText(props.genre)).toBeInTheDocument();
    expect(screen.getByText(props.year)).toBeInTheDocument();
    expect(screen.getByText(props.format)).toBeInTheDocument();
    expect(screen.getByText(`Buy for: ${props.price}€`)).toBeInTheDocument();
  });
});
