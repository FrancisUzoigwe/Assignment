import { RouterProvider } from "react-router-dom";
import { mainRoute } from "./Router/mainRoute";
import { Provider } from "react-redux";
import { Store } from "./Global/Store";
import { PersistGate } from "redux-persist/integration/react";
import persistStore from "redux-persist/es/persistStore";

let persistor = persistStore(Store);

const App = () => {
  return (
    <div>
      <Provider store={Store}>
        <PersistGate persistor={persistor} loading={null}>
          <RouterProvider router={mainRoute} />
        </PersistGate>
      </Provider>
    </div>
  );
};

export default App;
