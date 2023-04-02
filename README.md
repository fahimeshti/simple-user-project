# Getting Started

- Clone the repository or download the source code from a zip file.
- Open the terminal and navigate to the root folder of the project.
- Run `npm install` to install the necessary dependencies.
- Once the dependencies are installed, run `npm start` to start the development server.
- The application will be accessible at http://localhost:3000 in your web browser or watch it [Live here]()

## The application has two pages:

- A User List page that displays a list of all users retrieved from the mocked API using the useUsers() custom hook.
- A User Profile page that displays a specific user's profile and their associated posts using the useUser() custom hook.

### User List Page

- The User List page displays a list of all users retrieved from the mocked API using the useUsers() custom hook. Each user is displayed with their name, email, and company, and clicking on a user navigates to their profile page.

### User Profile Page

- The User Profile page displays a specific user's profile and their associated posts using the useUser() custom hook. The page displays the user's name, email, and company name retrieved from the mocked API, and a list of all posts associated with the user. Each post displays the title and body.

#### Two custom hooks have been created for this application:

- useUsers(): returns all the users from the dummy API.
- useUser(userId): returns the selected users posts.
- The useUser() custom hook takes a userId parameter and retrieves the specific user's posts associated with the given userId.
