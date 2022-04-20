//Route
import Routes from "./routes";

//Toastify
import { ToastContainer } from "react-toastify";

//Style
import GlobalStyle from "./styles/global";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <GlobalStyle />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <Routes />
    </>
  );
}

export default App;
