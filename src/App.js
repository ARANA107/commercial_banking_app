import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import SwipeableTemporaryDrawer from "./SwipeableTemporaryDrawer";
import MakePayment from "./MakePayment";
import RecipientTable from "./RecipientTable";
import { store } from "./app/store";
import { Provider } from "react-redux";
import Counter from "./features/counter/Counter";
// https://www.youtube.com/watch?v=9P2IUx13MZI&list=PL0Zuz27SZ-6M1J5I1w2-uZx36Qp6qhjKo&index=7
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        {/* <SwipeableTemporaryDrawer /> */}
        <BrowserRouter basename="/commercialbanking">
          <Routes>
            <Route path="/recipienttable" element={<RecipientTable />} />
            <Route path="/makepayment" element={<MakePayment />} />
            <Route path="/counter" element={<Counter />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
