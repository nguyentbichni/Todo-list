
import React from 'react';
import { Link } from 'react-router-dom';
import {withRouter} from 'react-router-dom'
import './styles.css';

function SidebarItem(props) {
  const { itemSidebar, history } = props;

  return (
    <div 
      className={` sidebar-item ${history.location.pathname === itemSidebar.path && 'sidebar-item-active' }` }
      onClick={() => history.push(itemSidebar.path)}
    >
      { itemSidebar.title }
    </div>
  // Cach 2: Use Link
  //   <div 
  //   className="sidebar-item"
  // >
  //   <Link to = {itemSidebar.path}>
  //     { itemSidebar.title }
  //   </Link>
  // </div>
  );
}

export default withRouter(SidebarItem);