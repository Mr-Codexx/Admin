import React from 'react';
import '../pages/Role/Admin.css';

function App() {
    
    return (
        <div className="app-container">
            <div className="app-content">
                <div className="app-sidebar">
                    <a href="/" className="app-sidebar-link active">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                            className="feather feather-home">
                            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                            <polyline points="9 22 9 12 15 12 15 22" />
                        </svg>
                    </a>
                    <a href="/" className="app-sidebar-link">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                            stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                            className="link-icon feather feather-pie-chart" viewBox="0 0 24 24">
                            <defs />
                            <path d="M21.21 15.89A10 10 0 118 2.83M22 12A10 10 0 0012 2v10z" />
                        </svg>
                    </a>
                    <a href="/" className="app-sidebar-link">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                            className="feather feather-calendar">
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                            <line x1="16" y1="2" x2="16" y2="6" />
                            <line x1="8" y1="2" x2="8" y2="6" />
                            <line x1="3" y1="10" x2="21" y2="10" />
                        </svg>
                    </a>
                    <a href="/" className="app-sidebar-link">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                            stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                            className="link-icon feather feather-settings" viewBox="0 0 24 24">
                            <defs />
                            <circle cx="12" cy="12" r="3" />
                            <path
                                d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" />
                        </svg>
                    </a>
                </div>
                <div className="projects-section">
                    <div className="projects-section-header">
                        <p>Projects</p>
                        <p className="time">December, 12</p>
                    </div>
                    {/* Add your projects here */}
                </div>
                <div className="messages-section">
                    <button className="messages-close">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                            className="feather feather-x-circle">
                            <circle cx="12" cy="12" r="10" />
                            <line x1="15" y1="9" x2="9" y2="15" />
                            <line x1="9" y1="9" x2="15" y2="15" />
                        </svg>
                    </button>
                    <div className="projects-section-header">
                        <p>Client Messages</p>
                    </div>
                    <div className="messages">
                        <div className="message-box">
                            <img
                                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
                                alt="profile image" />
                            <div className="message-content">
                                <div className="message-header">
                                    <div className="name">Stephanie</div>
                                    <div className="star-checkbox">
                                        <input type="checkbox" id="star-1" />
                                        <label htmlFor="star-1">

                                        </label>
                                    </div>
                                </div>
                                <p className="message-line">
                                    I got your first assignment. It was quite good. 🥳 We can continue with the next assignment.
                                </p>
                                <p className="message-line time">
                                    Dec, 12
                                </p>
                            </div>
                        </div>
                        <div className="message-box">
                            <img
                                src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
                                alt="profile image" />
                            <div className="message-content">
                                <div className="message-header">
                                    <div className="name">Mark</div>
                                    <div className="star-checkbox">
                                        <input type="checkbox" id="star-2" />
                                        <label htmlFor="star-2">

                                        </label>
                                    </div>
                                </div>
                                <p className="message-line">
                                    Hey, can tell me about progress of project? I'm waiting for your response.
                                </p>
                                <p className="message-line time">
                                    Dec, 12
                                </p>
                            </div>
                        </div>
                        <div className="message-box">
                            <img
                                src="https://images.unsplash.com/photo-1543965170-4c01a586684e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDZ8fG1hbnxlbnwwfDB8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60"
                                alt="profile image" />
                            <div className="message-content">
                                <div className="message-header">
                                    <div className="name">David</div>
                                    <div className="star-checkbox">
                                        <input type="checkbox" id="star-3" />
                                        <label htmlFor="star-3">

                                        </label>
                                    </div>
                                </div>
                                <p className="message-line">
                                    Awesome! 🤩 I like it. We can schedule a meeting for the next one.
                                </p>
                                <p className="message-line time">
                                    Dec, 12
                                </p>
                            </div>
                        </div>
                        <div className="message-box">
                            <img
                                src="https://images.unsplash.com/photo-1533993192821-2cce3a8267d1?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTl8fHdvbWFuJTIwbW9kZXJufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60"
                                alt="profile image" />
                            <div className="message-content">
                                <div className="message-header">
                                    <div className="name">Jessica</div>
                                    <div className="star-checkbox">
                                        <input type="checkbox" id="star-4" />
                                        <label htmlFor="star-4">

                                        </label>
                                    </div>
                                </div>
                                <p className="message-line">
                                    I am really impressed! Can't wait to see the final result.
                                </p>
                                <p className="message-line time">
                                    Dec, 11
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
