import React from 'react';

import Auxiliar from '../../hoc/Auxiliar';

import classes from './index.css';

const layout = (props) => (
  <Auxiliar>
    {
    /*<Fragment>
      Toolbar, SideDrawe, Backdrop
    </Fragment>*/
    }
    <main className={classes.content}> 
      {props.children}
    </main>
  </Auxiliar>
);

export default layout;