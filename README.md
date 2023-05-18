# React Posts App
React Posts App, is a blogging application built with React. It allows users to create, edit, and delete blog posts. The application leverages the Context API for state management and integrates with a RESTful API to fetch data. It also utilizes React Router to provide seamless navigation between different sections of the application.

## Disclaimer
- This project was developed as part of a learning experience and is for demonstration purposes only. It is important to note that this application is primarily a demonstration of my skills and understanding of web development concepts.
- Due to resource limitaion and security reasons, the add, edit, and delete operations in this application are simulated and do not have a permanent effect. Any changes made by the public will not be permanently stored.

## Features
1. **Create, Edit and Delete Posts:** User interface allows to create and edit title, content, and category information. Also ability to delete unwanted posts.
2. **Seamless Navigation:** Utilizes **React-Router** to provide seamless navigation between home page, post creating and editing page, and other sections.
3. **Efficient Data Fetching:** Employs Axios Fetch to efficiently retrieve data from the RESTful API and display posts in a grid.
4. **User-Friendly URLs:** Utilizes the slugify library to generate user-friendly URLs for each blog post.

## Installation and Usage
1. Clone the repository:
    ```shell
    git clone https://github.com/saragam443/react-blog.git
    ```
2. Navigate to the project directory:
    ```shell
    cd react-blog
    ```
3. Install the dependencies:
    ```shell
    npm install
    ```
4. Start the development server:
    ```shell
    npm start
    ```
5. Open your browser and visit http://localhost:3000 to access the application.

## Packages used
- axios
- date-fns
- react-icons
- react-router-dom
- slugify
- uuid

## Live Demo
Check out the live demo of React Blog App: [React Blog App](https://reactblog-kb8a.onrender.com/)
