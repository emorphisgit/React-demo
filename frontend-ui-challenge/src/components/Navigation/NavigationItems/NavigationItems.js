import React from 'react';

import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';
import logo from '../../../assets/logo.svg';
import help from '../../../assets/help-circle.png';


const navigationItems = ( props ) => (
    <ul className={classes.NavigationItems}>    
       <img className={classes.navImgL} src={logo} alt=""/> 
       <NavigationItem link="/lifescience">Life Sciences</NavigationItem>
        <NavigationItem link="/browse">Browse</NavigationItem>
        <NavigationItem link='/profile' click={props.clickHandler}> 
        <span className={classes.ProfileClick}>
        <span class="avatar-initials">
            <span class="avatar-initials-text">
                    <div>{props.iFn}{props.iLn}</div>
            </span>
        </span>
        </span>
        </NavigationItem>
        
        <img src={help} alt="" className={classes.QueClick}/>
        
    </ul>
);

export default navigationItems;