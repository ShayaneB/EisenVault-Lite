import React from 'react';
import './MobileMenu.scss'

export const DrawerToggleButton = props => (
  <button className="toggle-button" onClick={props.drawertoggleHandler}>
    <div className="toggle-button__line" />
    <div className="toggle-button__line" />
    <div className="toggle-button__line" />
  </button>
)

export const  MoreDetailToggleButton= props => (
  <button className="button" onClick={props.details}>
    More Details
  </button>
)