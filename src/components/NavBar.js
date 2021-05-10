import React, { Component } from 'react'

export class NavBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-light bg-light">
            <div className="navbar-brand">
                 <i className="fa fa-shopping-cart fa-5" aria-hidden="true"></i>
                 <span style={{width: 50}}>
                            {this.props.totalcounters}
            </span>
              Items
            </div>
          </nav>
                
        
        )
    }
}

export default NavBar
