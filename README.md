### Project Overview

This project is a React application that provides user authentication functionalities such as signing up, signing in, and logging out. Users can create an account, sign in, and upon successful authentication, they are greeted with a welcome message and their user details are displayed. The project utilizes React hooks like `useState` for managing component state and integrates with SweetAlert2 for displaying user-friendly alerts. It also incorporates user avatars and allows users to upload their profile pictures during the sign-up process.

### Features

1. **User Authentication:**
   - Users can sign up with their name, email, password, and role.
   - Existing users can sign in using their email and password.
   - User authentication is validated against pre-stored user data.

2. **Avatar Management:**
   - Users can upload their profile picture during the sign-up process.
   - Uploaded avatars are displayed alongside user details upon successful sign-in.

3. **Role Selection:**
   - Users can select their role (e.g., user, admin, supplier) during the sign-up process.

4. **Responsive Design:**
   - The application interface is designed to be responsive and adaptable to different screen sizes.

### Getting Started

Follow these steps to set up and run the project locally:

1. **Clone Repository:**
   ```bash
   git clone <repository-url>
   ```

2. **Install Dependencies:**
   ```bash
   cd project-directory
   npm install
   ```

3. **Run the Application:**
   ```bash
   npm start
   ```
   This command starts the development server and opens the application in your default web browser.

### Technologies Used

- React.js
- SweetAlert2
- CSS (for styling)

### Folder Structure

```
project-directory/
│
├── src/
│   ├── components/
│   │   ├── User.js
│   │   └── ... other reusable components
│   ├── App.js
│   ├── Home.css
│   └── ... other application files
│
├── README.md
└── package.json
```
### Screenshot
![image](https://github.com/Mr-Codexx/Admin/assets/128076251/fc9d3c4f-16c8-426e-88a0-26581812c14e)

![image](https://github.com/Mr-Codexx/Admin/assets/128076251/52f5712a-d504-4bb6-9342-7d12b5bb1f70)

![image](https://github.com/Mr-Codexx/Admin/assets/128076251/e2e9e90e-0962-45d9-8562-468d378abf0d)

![image](https://github.com/Mr-Codexx/Admin/assets/128076251/a4119c8b-5f73-4ce3-8e91-cbc8e1ce3d52)

### [Live Preview](https://mr-codexx.github.io/Admin/)
### Additional Notes

- Make sure to customize the project according to your specific requirements.
- Implement proper security measures, such as hashing passwords, before deploying the application in production.

### Contributors

- [Sachin Sharma](https://github.com/Mr-Codexx)

Feel free to contribute to this project by submitting bug fixes, feature enhancements, or suggestions via pull requests.
