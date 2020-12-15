import React from 'react';

import Copyright from "./Copyright";


class Footer extends React.Component {
    render() {
        return (
           <footer className='card-footer mt-3'>
               <div className='container'>
                   <Copyright />
               </div>
           </footer>
        );
    }
}

export default Footer
