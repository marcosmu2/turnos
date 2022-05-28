import React, {Fragment} from 'react'
import btnHamburguesa from '../../src/botonHamburguesa.png'
import { bool, func } from 'prop-types';

function MenuHamburguesa({menu, mostrarMenu}) {

    return (
        <Fragment>
            <img 
                className="btn_hamburguesa" 
                src={btnHamburguesa} 
                alt="" 
                width="60" 
                menu={menu}
                onClick={() => mostrarMenu(!menu)}/>
        </Fragment>
    )
}

MenuHamburguesa.propTypes = {
    menu: bool.isRequired,
    mostrarMenu: func.isRequired,
  };
  
export default MenuHamburguesa
