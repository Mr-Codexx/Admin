import React, { useState } from 'react';
import Swal from 'sweetalert2';
import User from './User';
import './Home.css'; // Assuming you have a separate CSS file for styles

function Main() {
    const [isFormSwitched, setIsFormSwitched] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [avatar, setAvatar] = useState('https://cdn-icons-png.flaticon.com/512/3607/3607444.png'); // State to store the avatar image
    const [isSignedIn, setIsSignedIn] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [role, setRole] = useState('user'); // Default role is 'user'
    
    // Array of pre-stored users
    const preStoredUsers = [
        { avatar: 'https://sachinsharma2111.github.io/Home/favicon.png', name: 'Surbhi Agnihotri', email: 'surbhi.agnihotri@prolifics.com', password: '123', role: 'user' },
        { avatar: 'https://sachinsharma2111.github.io/Home/favicon.png', name: 'Sachin Sharma', email: 'sachin.sharma@prolifics.com', password: '123', role: 'admin' },
        // Add more users as needed
    ];

    const handleFormSwitch = () => {
        setIsFormSwitched(!isFormSwitched);
    };

    const handleSignUp = (e) => {
        e.preventDefault();
        // Regular expression for email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
        if (!passwordRegex.test(password)) {
            Swal.fire({
                icon: 'error',
                title: 'Invalid Password',
                text: 'Please enter a valid password (at least 8 characters long with at least one uppercase letter, one lowercase letter, and one digit).',
            });
            return;
        }
        // Check if email is valid
        if (!emailRegex.test(email)) {
            Swal.fire({
                icon: 'error',
                title: 'Invalid Email',
                text: 'Please enter a valid email address.',
            });
            return;
        }

        // Store user information including avatar in local storage
        localStorage.setItem('user', JSON.stringify({ name, email, password, avatar, role }));
        // Show success message
        Swal.fire({
            icon: 'success',
            title: 'Sign Up Successful',
            text: 'You have successfully signed up!',
            allowOutsideClick: false,
            allowEscapeKey: false,
        });
    };

    const handleSignIn = (e) => {
        e.preventDefault();
        // Check if the entered email and password match any pre-stored user
        const matchedUser = preStoredUsers.find(user => user.email === email && user.password === password);
        if (matchedUser) {
            setIsSignedIn(true);
            setName(matchedUser.name); // Set the name of the matched user
            setRole(matchedUser.role); // Set the role of the matched user
            // Show success message
            Swal.fire({
                icon: 'success',
                title: 'Sign In Successful',
                text: 'You have successfully signed in!',
                allowOutsideClick: false,
                allowEscapeKey: false,
            });
        } else {
            // Show error message
            Swal.fire({
                icon: 'error',
                title: 'Sign In Failed',
                text: 'Invalid email or password. Please try again.',
                allowOutsideClick: false,
                allowEscapeKey: false,
            });
        }
    };

    const handleAvatarChange = (e) => {
        const file = e.target.files[0];
        // Check if a file is selected
        if (file) {
            // Check if the file is an image
            if (file.type.startsWith('image/')) {
                // Read the file and set it as the avatar
                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = () => {
                    setAvatar(reader.result);
                };
            } else {
                // Show error message if the file is not an image
                Swal.fire({
                    icon: 'error',
                    title: 'Invalid File',
                    text: 'Please select a valid image file (e.g., JPG, PNG, GIF).',
                });
            }
        }
    };

    const handleLogout = () => {
        // Clear user data from local storage and reset states
        localStorage.removeItem('user');
        setEmail('');
        setPassword('');
        setAvatar(null);
        setIsSignedIn(false);
        // Show logout message
        Swal.fire({
            icon: 'success',
            title: 'Logged Out',
            text: 'You have been successfully logged out.',
        });
    };

    return (
        <div className="main">
            {!isSignedIn ? (
                <>
                    <div className={`container a-container ${isFormSwitched ? 'is-txl' : ''}`}>
                        <form className="form" id="a-form" onSubmit={handleSignUp}>
                            <h2 className="form__title title">Create Account</h2>
                            <div class="avatar-wrapper">
                                <img class="profile-pic" src="https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png" />

                                <input className="form__input upload-button" type="file" accept="image/*" onChange={handleAvatarChange} />
                            </div>
                            <input className="form__input" type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} />
                            <input className="form__input" type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                            <input className="form__input" type={showPassword ? "text" : "password"} placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                            <select className="form__input" onChange={(e) => setRole(e.target.value)}>
                                <option value="user">User</option>
                                <option value="admin">Admin</option>
                                <option value="supplier">Supplier</option>
                            </select>
                            <button className="form__button button submit" type="submit">
                                SIGN UP
                            </button>
                        </form>
                    </div>
                    <div className={`container b-container ${isFormSwitched ? '' : 'is-z200'}`}>
                        <form className="form" id="b-form" onSubmit={handleSignIn}>
                            <h2 className="form__title title">Sign in to Website</h2>
                            <input className="form__input" type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />

                            <input className="form__input" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                            <button className="form__button button submit" type="submit">
                                SIGN IN
                            </button>
                        </form>
                    </div>
                    <div className={`switch ${isFormSwitched ? 'is-txr' : ''}`} id="switch-cnt">
                        <div className="switch__circle"></div>
                        <div className="switch__circle switch__circle--t"></div>
                        <div className={`switch__container ${isFormSwitched ? 'is-hidden' : ''}`} id="switch-c1">
                            <h2 className="switch__title title">Welcome Back !</h2>
                            <p className="switch__description description">To keep connected with us please login with your personal info</p>
                            <button className="switch__button button switch-btn" onClick={handleFormSwitch}>
                                SIGN UP
                            </button>
                        </div>
                        <div className={`switch__container ${isFormSwitched ? '' : 'is-hidden'}`} id="switch-c2">
                            <h2 className="switch__title title">Hello Friend !</h2>
                            <p className="switch__description description">Enter your personal details and start journey with us</p>
                            <button className="switch__button button switch-btn" onClick={handleFormSwitch}>
                                SIGN IN
                            </button>
                        </div>
                    </div>
                </>
            ) : (
                <div>
                    <nav class="navbar navbar-light bg-light">
                        <div class="container-fluid">
                            <a class="navbar-brand" href="#">
                                {avatar && <img src={avatar} alt="Avatar" className="avatar" width="30" height="35" />}
                            </a>
                            <h2 className="navbar-brand">Welcome, <b className='Name'>{name}</b>!</h2>
                            <form class="d-flex">
                                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="logout-button btn btn-outline-danger" onClick={handleLogout}>Logout 
                                {/* <FontAwesomeIcon icon={faCoffee} size="lg" color="brown" /> */}
                                </button>
                            </form>
                        </div>
                    </nav>
                    <User user={{ name, email, role }} />
                </div>
            )}
        </div>
    );
}

export default Main;
