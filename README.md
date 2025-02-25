# Next.js CRUD Dashboard

## Project Description

This project is a CRUD (Create, Read, Update, Delete) dashboard application built with Next.js, styled with TailwindCSS and DaisyUI components, and interacting with the JSONPlaceholder API for data management. The application demonstrates how to build a responsive, modern web application using popular frontend technologies.

### Key Features

- Responsive design with mobile-first approach
- CRUD operations for users, posts, comments, and albums
- Data fetching and state management with React Query
- Form handling and validation with React Hook Form and Zod
- Styled components using TailwindCSS and DaisyUI

## Setup and Installation

To run this project locally, follow these steps:

1. Clone the repository:
   ```
   git clone https://github.com/RakshitArora03/CRUD-WebApp.git
   cd CRUD-WebApp
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Run the development server:
   ```
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `/app`: Contains the main application code
  - `/components`: Reusable React components
  - `/hooks`: Custom React hooks
  - `/users`, `/posts`, `/comments`, `/albums`: Page components for each data type
- `/public`: Static assets
- `/styles`: Global styles and Tailwind CSS configuration

## Challenges and Solutions

1. **Challenge**: Implementing responsive design for both desktop and mobile.
   **Solution**: Utilized Tailwind CSS's responsive classes and created a collapsible sidebar for mobile views.

2. **Challenge**: Managing state across multiple components.
   **Solution**: Implemented React Query for efficient data fetching and caching, reducing the need for complex state management.

3. **Challenge**: Handling form validation and submission.
   **Solution**: Used React Hook Form in combination with Zod for robust form handling and validation.

4. **Challenge**: Simulating CRUD operations with JSONPlaceholder API.
   **Solution**: Implemented optimistic updates for a better user experience, while still making API calls to simulate real-world scenarios.

## License

This project is [MIT](https://choosealicense.com/licenses/mit/) licensed.