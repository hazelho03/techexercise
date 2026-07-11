import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, test, vi } from "vitest";
import App from "./App";

describe("Fitness Challenge App", () => {
  beforeEach(() => {
    vi.stubGlobal(
      "fetch",
      vi.fn(() =>
        Promise.resolve({
          ok: true,
          json: () => Promise.resolve([]),
        })
      )
    );
  });

  test("renders the app title", async () => {
    render(<App />);

    expect(
      await screen.findByText(/fitness challenge/i)
    ).toBeInTheDocument();
  });
});