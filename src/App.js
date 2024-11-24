// Importing Bootstrap CSS for styling
import 'bootstrap/dist/css/bootstrap.min.css';

// Importing required components and modules
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Router, Route, and Routes are used for navigation and defining routes.
import NavigationBar from './components/NavigationBar'; // Navigation bar component for the app.
import Header from './components/header'; // Header component (not used in this example but imported).
import Footer from './components/footer'; // Footer component for the app.
import Content from './components/content'; // Content component for the homepage.
import Read from './components/read'; // Component for displaying the "read" page.
import Create from './components/create'; // Component for the "create" page where a new item can be added.
import Edit from './components/edit'; // Component for editing an existing item.

function App() {
  return (
    <Router> {/* Wrapping the application in a Router to enable navigation */}
      <NavigationBar /> {/* Displays the navigation bar at the top */}
      <Routes> {/* Defines the different routes for the app */}
        {/* Route for the home page */}
        <Route path="/" element={<Content />} />
        {/* Route for the "read" page */}
        <Route path="/read" element={<Read />} />
        {/* Route for the "create" page */}
        <Route path="/create" element={<Create />} />
        {/* Route for the "edit" page with a dynamic `id` parameter */}
        <Route path="/edit/:id" element={<Edit />} />
      </Routes>
      <Footer /> {/* Displays the footer at the bottom */}
    </Router>
  );
}

export default App; // Exporting the App component as the default export.
