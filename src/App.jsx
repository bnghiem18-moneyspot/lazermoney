import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ConfigProvider } from './hooks/useConfig';
import { Layout } from './components/layout';
import { Home, HowItWorks, Costs, FAQ, Contact } from './components/pages';

function App() {
  return (
    <ConfigProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="how-it-works" element={<HowItWorks />} />
            <Route path="costs" element={<Costs />} />
            <Route path="faq" element={<FAQ />} />
            <Route path="contact" element={<Contact />} />
            {/* Catch-all redirect to home */}
            <Route path="*" element={<Home />} />
          </Route>
        </Routes>
      </Router>
    </ConfigProvider>
  );
}

export default App;
