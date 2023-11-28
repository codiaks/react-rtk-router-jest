import { render, screen } from "@testing-library/react";
import App from "./App";
import { MemoryRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import { iriApi, persistor } from "./store";

export function renderWithRouterAndStore(component, initialEntries) {
  return render(
    <PersistGate loading={null} persistor={persistor}>
      <ApiProvider api={iriApi}>
        <MemoryRouter initialEntries={initialEntries}>{component}</MemoryRouter>
      </ApiProvider>
    </PersistGate>
  );
}

test("renders learn react link", () => {
  renderWithRouterAndStore(<App />);
  const linkElement = screen.getByText(/loading/i);
  expect(linkElement).toBeInTheDocument();
});
