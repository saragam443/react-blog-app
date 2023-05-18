import styles from "./About.module.css";

const About = () => {
  return (
    <main>
      <div className={`${styles.about} container`}>
        <h2>About this Project</h2>
        <p>
          React Posts App, is a blogging application built with React. It allows
          users to create, edit, and delete blog posts. The application
          leverages the Context API for state management and integrates with a
          RESTful API to fetch data. It also utilizes React Router to provide
          seamless navigation between different sections of the application..
        </p>
        <h3>Disclaimer </h3>
        <ul>
          <li>
            This project was developed as part of a learning experience and is
            for demonstration purposes only. It is important to note that this
            application is primarily a demonstration of my skills and
            understanding of web development concepts.
          </li>
          <li>
            Due to resource limitaion and security reasons, the add, edit, and
            delete operations in this application are simulated and do not have
            a permanent effect. Any changes made by the public will not be
            permanently stored.
          </li>
        </ul>
        <h3>Features</h3>
        <ol>
          <li>
            <span>Create, Edit and Delete Posts:</span> User interface allows to
            create and edit title, content, and category information. Also
            ability to delete unwanted posts.
          </li>
          <li>
            <span>Seamless Navigation:</span> Utilizes React-Router to provide
            seamless navigation between home page, post creating and editing
            page, and other sections.
          </li>
          <li>
            <span>Efficient Data Fetching:</span> Employs Axios Fetch to
            efficiently retrieve data from the RESTful API and display posts in
            a grid.
          </li>
          <li>
            <span>User-Friendly URLs:</span> Utilizes the slugify library to
            generate user-friendly URLs for each blog post.
          </li>
        </ol>
        <h3>Installation and Usage</h3>
        <ol>
          <li>
            <p>Clone the repository:</p>
            <code>git clone https://github.com/saragam443/react-blog.git</code>
          </li>
          <li>
            <p>Navigate to the project directory:</p>
            <code>cd react-blog</code>
          </li>
          <li>
            <p>Install the dependencies:</p>
            <code>npm install</code>
          </li>
          <li>
            <p>Start the development server:</p>
            <code>npm start</code>
          </li>
          <li>
            <p>
              Open your browser and visit http://localhost:3000 to access the
              application.
            </p>
          </li>
        </ol>
        <h3>Packages used</h3>
        <ul>
          <li>axios</li>
          <li>react-router-dom</li>
          <li>date-fns</li>
          <li>uuid</li>
          <li>react-icons</li>
          <li>slugify</li>
        </ul>
        <p className={styles.link}>
          Visit
          <span className="github">
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/saragam443/react-blog">github</a>
          </span>
          for source code.
        </p>
      </div>
    </main>
  );
};

export default About;
