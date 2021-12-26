import "./styles.css";

import { Sidebar } from "./components/Sidebar/Sidebar";
import { Navbar } from "./components/Main/Navbar";
export default function App() {
  return (
    <>
      <div>
        <Sidebar />
        <Navbar />
      </div>
    </>
  );
}
