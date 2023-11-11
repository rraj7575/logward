import ReactDOM from "react-dom/client";
import { UIProvider } from "ui";
import App from "./App";

const root = (
  <UIProvider>
    <App />
  </UIProvider>
);

ReactDOM.createRoot(document.getElementById("root")!).render(<>{root}</>);
