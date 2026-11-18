import AppRouter from "./router";
import ScrollProvider from "./providers/ScrollProvider";
import Loader from "../components/ui/Loader/Loader";

function App() {
  return (
    <ScrollProvider>
      <Loader />
      <AppRouter />
    </ScrollProvider>
  );
}

export default App;
