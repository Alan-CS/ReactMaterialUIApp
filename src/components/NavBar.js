import React from 'react';

import { Link } from 'react-router-dom';

import List from '@material-ui/core/List';

import InboxIcon from '@material-ui/icons/Inbox';
import { Home, Book, AccountBox } from '@material-ui/icons'

import ListItemLink from './ListItemLink';

function NavBar(props) {
    return (
        <>

            <ListItemLink to="/" primary="Home" icon={<Home />} />
            <ListItemLink to="/contacts" primary="Contact List" icon={<Home />} />

        </>
    )
}

export default NavBar;