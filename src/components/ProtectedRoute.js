import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const Home = () => <div>Home Page</div>;
const Dashboard = () => <div>Dashboard Page</div>;
const Login = () => <div>Login Page</div>;
const NotFound = () => <div>404 Not Found</div>;

export { Home, Dashboard, Login, NotFound };