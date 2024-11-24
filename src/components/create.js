// Importing the required modules
import axios from "axios"; // Axios is used to make HTTP requests.
import { useState } from "react"; // useState is a React Hook for managing component state.

const Create = () => {
    // Declaring state variables for the form fields
    const [title, setTitle] = useState(''); // State to store the movie title.
    const [year, setYear] = useState(''); // State to store the movie release year.
    const [poster, setPoster] = useState(''); // State to store the movie poster URL.

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevents the default form submission behavior (page refresh).
        
        // Creating a movie object with the state values
        const movie = { title, year, poster };
        console.log(movie); // Logging the movie object to the console.

        // Sending a POST request to the server to save the movie
        axios.post('http://localhost:4000/api/movies', movie)
            .then((res) => {
                console.log(res.data); // Logging the server response on success.
            })
            .catch(); // Catch block to handle errors (currently empty).
    };

    // JSX for rendering the component
    return (
        <div>
            <h3>Hello from create component!</h3> {/* A greeting message */}
            <form onSubmit={handleSubmit}> {/* Form submission is handled by handleSubmit */}
                {/* Input for the movie title */}
                <div className="form-group">
                    <label>Add Movie Title: </label>
                    <input
                        type="text"
                        className="form-control"
                        value={title} // Binding input value to state
                        onChange={(e) => { setTitle(e.target.value); }} // Updating state on change
                    />
                </div>
                {/* Input for the movie release year */}
                <div className="form-group">
                    <label>Add Movie Year: </label>
                    <input
                        type="text"
                        className="form-control"
                        value={year} // Binding input value to state
                        onChange={(e) => { setYear(e.target.value); }} // Updating state on change
                    />
                </div>
                {/* Input for the movie poster URL */}
                <div className="form-group">
                    <label>Add Movie Poster: </label>
                    <input
                        type="text"
                        className="form-control"
                        value={poster} // Binding input value to state
                        onChange={(e) => { setPoster(e.target.value); }} // Updating state on change
                    />
                </div>
                {/* Submit button to add the movie */}
                <div>
                    <input type="submit" value="Add Movie" />
                </div>
            </form>
        </div>
    );
};

export default Create; // Exporting the Create component for use in other parts of the app.
