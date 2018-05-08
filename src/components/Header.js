import React from 'react';
import {NavLink, Switch} from 'react-router-dom';


const Header = () => (
    <header>
    <h1>Expensify</h1>
    <NavLink to="/" activeClassName="is-active" exact={true} >dashboard</NavLink>
    <NavLink to="/create" activeClassName="is-active">add expense</NavLink>
    <NavLink to="/edit" activeClassName="is-active">edit expense </NavLink>
    <NavLink to="/help" activeClassName="is-active" >help page</NavLink>
    </header>
);

export default Header;