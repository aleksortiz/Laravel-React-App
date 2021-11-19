import React from 'react';
import ReactDOM from 'react-dom';
import { CatalogoClientes, Cliente } from './Clientes';

function Example() {
    return (
        <React.Fragment>
            <CatalogoClientes />
        </React.Fragment>
    );
}

export default Example;

if (document.getElementById('root')) {
    ReactDOM.render(<Example />, document.getElementById('root'));
}
