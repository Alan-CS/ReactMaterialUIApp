// Alan: Added per below URLs
// https://material-ui.com/guides/composition
// https://material-ui.com/guides/composition/#caveat-with-inlining
// Below code taken from "List" inline sandbox
// https://material-ui.com/guides/composition/#list 

import React from 'react';
import PropTypes from 'prop-types';

import { Link as RouterLink } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import TypoGraphy from '@material-ui/core/Typography'

// Make icon and text closer together per https://stackoverflow.com/questions/35143641/adjusting-the-gap-between-svg-icon-and-text-on-material-uis-list-component
const useStyles = makeStyles((theme) => ({
    primary: {
        marginLeft: -25,
    },
  }));

function ListItemLink(props) {
    const { icon, primary, to } = props;
    const classes = useStyles();

    const renderLink = React.useMemo(
      () => React.forwardRef((itemProps, ref) => <RouterLink to={to} ref={ref} {...itemProps} />),
      [to],
    );
  
    return (
      <li>
        <ListItem innerDivStyle={{paddingLeft: 20}} button disableGutters component={renderLink}>
          {icon ? <ListItemIcon classes={{root: {minWidth: 40}}}>{icon}</ListItemIcon> : null}
    <ListItemText primary={<div className={classes.primary}> {primary} </div>} />
        </ListItem>
      </li>
    );
  }
  

  ListItemLink.propTypes = {
    icon: PropTypes.element,
    primary: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
  };

  export default ListItemLink;