import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Layout from "./components/Layout";
import SmoothScroll from "./components/SmoothScroll";
import Home from "./pages/Home";
import About from "./pages/About";
import GetInvolved from "./pages/GetInvolved";
import Contact from "./pages/Contact";
import SaveGaza from "./pages/SaveGaza";
import Challenge from "./pages/Challenge";
import PhaseHeal from "./pages/PhaseHeal";
import EmergencyExit from "./pages/EmergencyExit";
import EmergencyExitLog from "./pages/EmergencyExitLog";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Legal from "./pages/Legal";
import Admin from "./pages/Admin";
import NotFound from "./pages/NotFound";

export default function App() {
  const location = useLocation();
  return (
    <Layout>
      <SmoothScroll />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/get-involved" element={<GetInvolved />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/save-gazas-children" element={<SaveGaza />} />
          <Route path="/challenge" element={<Challenge />} />
          <Route path="/challenge/phase-1-heal" element={<PhaseHeal />} />
          <Route path="/emergency-exit-guidance" element={<EmergencyExit />} />
          <Route path="/emergency-exit-guidance/log" element={<EmergencyExitLog />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/privacy-policy" element={<Legal kind="privacy" />} />
          <Route path="/terms-conditions" element={<Legal kind="terms" />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
    </Layout>
  );
}
