# InternBuddy Task

This project is a **Movie Search App** built using **React**, **Vite**, and **TailwindCSS**. It allows users to search for movies and view detailed information about them using the [OMDb API](https://www.omdbapi.com/).

## Features

- **Search Movies**: Search for movies by title.
- **Movie Details**: View detailed information about a selected movie, including its plot and actors.
- **Responsive Design**: Fully responsive UI built with TailwindCSS.

## Tech Stack

- **Frontend**: React, TailwindCSS
- **Build Tool**: Vite
- **API**: OMDb API
- **Linting**: ESLint

## Project Structure

```
internbuddy-task/
├── src/
│   ├── App.jsx         # Main application component
│   ├── main.jsx        # Entry point for React
│   ├── index.css       # Global styles
│   ├── App.css         # Component-specific styles
├── .env                # Environment variables
├── .gitignore          # Git ignore rules
├── eslint.config.js    # ESLint configuration
├── index.html          # HTML template
├── package.json        # Project dependencies and scripts
├── vite.config.js      # Vite configuration
└── README.md           # Project documentation
```

## Installation

1. Clone the repository:
    ```bash
    git clone <repository-url>
    cd internbuddy-task
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Create a `.env` file in the root directory and add the following:
    ```env
    VITE_API_URL=https://www.omdbapi.com/
    VITE_API_KEY=<your_api_key>
    ```

4. Start the development server:
    ```bash
    npm run dev
    ```

## Scripts

- `npm run dev`: Start the development server.
- `npm run build`: Build the project for production.
- `npm run preview`: Preview the production build.
- `npm run lint`: Run ESLint to check for code quality.

## Dependencies

- **React**: ^19.0.0
- **Axios**: ^1.8.4
- **TailwindCSS**: ^4.1.1
- **Vite**: ^6.2.0

## Development Dependencies

- **ESLint**: ^9.21.0
- **@vitejs/plugin-react**: ^4.3.4

## API Integration

This project uses the [OMDb API](https://www.omdbapi.com/) to fetch movie data. Make sure to replace `<your_api_key>` in the `.env` file with your personal API key.

## License

This project is licensed under the MIT License.  