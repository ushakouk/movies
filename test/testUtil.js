import React from "react";
import { render } from "@testing-library/react";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { rootReducer } from "../src/store/reducer/root";
import { MemoryRouter, Route } from "react-router";
import thunk from 'redux-thunk';


export const renderWithStoreProvider = (ui, { initialState, ...renderOptions } = {}) => {
  const store = createStore(rootReducer, applyMiddleware(thunk));
  const Wrapper = ({ children }) => (
    <Provider store={store}>{children}</Provider>
  );

  return render(ui, { wrapper: Wrapper, ...renderOptions });
};

export const routerWrapper = (component, searchParam) => (
  <MemoryRouter initialEntries={[`/search/${searchParam}`]} >
    <Route path="/search/:searchQuery?">
      {component}
    </Route>
  </MemoryRouter>
);