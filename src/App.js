import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Book from './pages/Book';
import SearchResult from './pages/search';
import About from './pages/About';
import Faq from './pages/Faq';
import Contact from './pages/Contact';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/faq" element={<Faq />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/search/:book_name" element={<SearchResult />} />
				<Route path="/book/:book_name" element={<Book />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
