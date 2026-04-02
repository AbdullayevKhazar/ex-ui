import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Introduction } from "./pages/Introduction";
import { Installation } from "./pages/Installation";
import { Theming } from "./pages/Theming";
import { ButtonPage } from "./pages/components/ButtonPage";
import { InputPage } from "./pages/components/InputPage";
import { OtpPage } from "./pages/components/OtpPage";
import { ModalPage } from "./pages/components/ModalPage";
import { DrawerPage } from "./pages/components/DrawerPage";
import { TablePage } from "./pages/components/TablePage";
import { ScrollPage } from "./pages/components/ScrollPage";
import AccordionPage from "./pages/components/AccordionPage";

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Introduction />} />
        <Route path="/installation" element={<Installation />} />
        <Route path="/theming" element={<Theming />} />
        <Route path="/components/button" element={<ButtonPage />} />
        <Route path="/components/input" element={<InputPage />} />
        <Route path="/components/otp" element={<OtpPage />} />
        <Route path="/components/modal" element={<ModalPage />} />
        <Route path="/components/drawer" element={<DrawerPage />} />
        <Route path="/components/table" element={<TablePage />} />
        <Route path="/components/scroll" element={<ScrollPage />} />
        <Route path="/components/accordion" element={<AccordionPage />} />
      </Routes>
    </Layout>
  );
}
