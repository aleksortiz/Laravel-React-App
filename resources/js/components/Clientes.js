import React from 'react';



function CatalogoClientes() {
    return (
        <div className="p-4">
            <div className="card">
                <div className="card-header">
                <h3 className="card-title">Catalogo de Clientes</h3>
                    <div className="card-tools">
                    <button type="button" className="btn btn-tool" data-card-widget="collapse" title="Collapse">
                        <i className="fas fa-minus"></i>
                    </button>
                    </div>
                </div>

                <div className="card-body">
                    <button className="btn btn-sm btn-success m-2" data-toggle="modal" data-target="#mdl"><i className="fas fa-plus"></i> Agregar Cliente</button>

                    <div className="form-group m-3">
                        <label for="txtBusqueda">Buscar</label>
                        <input type="text" className="form-control" id="txtBusqueda" placeholder="Busqueda"/>
                    </div>

                    <table className="table table-striped projects">
                        <thead>
                            <tr>
                            <th>ID</th>
                            <th>Fecha de alta</th>
                            <th>Nombre</th>
                            <th>Teléfono</th>
                            <th>Correo</th>
                            <th>Opciones</th>
                            </tr>
                        </thead>
                        <tbody>
                        </tbody>
                    </table>
                </div>

                <Cliente />
            </div>
        </div>
    );
}

function Cliente(){
    return(
        <div className="modal-dialog modal-lg">
            <div className="modal-content">
                <div className="modal-header">
                    <h4 className="modal-title">TEST</h4>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <form>
                        <input type="hidden" />
                        <div className="form-group">
                            <label for="nombre">Nombre</label>
                            <input type="text" name="nombre" className="form-control" required />
                        </div>
                
                        <div className="form-row">
                            <div className="form-group col-md-8">
                                <div className="form-group">
                                    <label for="calle">Calle</label>
                                    <input type="text" name="calle" className="form-control" required />
                                </div>
                            </div>
                
                            <div className="form-group col-md-4">
                                <div className="form-group">
                                    <label for="numero">Numero</label>
                                    <input type="text" name="numero" className="form-control" value="{{ old('numero') }}" required />
                                </div>
                            </div>
                        </div>
                
                        <div className="form-row">
                            <div className="form-group col-md-4">
                                <div className="form-group">
                                    <label for="numero_int">Numero Interior</label>
                                    <input type="text" name="numero_int" className="form-control" value="{{ old('numero_int') }}" />
                                </div>
                            </div>
                
                            <div className="form-group col-md-8">
                                <div className="form-group">
                                    <label for="colonia">Colonia</label>
                                    <input type="text" name="colonia" className="form-control" value="{{ old('colonia') }}" required />
                                </div>
                            </div>
                        </div>
                
                        <div className="form-row">
                            <div className="form-group col-md-4">
                            <div className="form-group">
                                <label for="cp">Código Postal</label>
                                <input type="text" name="cp" className="form-control" value="{{ old('cp') }}" />
                            </div>
                            </div>
                
                            <div className="form-group col-md-4">
                            <div className="form-group">
                                <label for="ciudad">Ciudad</label>
                                <input type="text" name="ciudad" className="form-control" value="{{ old('ciudad') }}" />
                            </div>
                            </div>
                
                            <div className="form-group col-md-4">
                            <div className="form-group">
                                <label for="estado">Estado</label>
                                <input type="text" name="estado" className="form-control" value="{{ old('estado') }}" />
                            </div>
                            </div>
                        </div>
                
                        <div className="form-row">
                            <div className="form-group col-md-3">
                            <div className="form-group">
                                <label for="rfc">RFC</label>
                                <input type="text" name="rfc" className="form-control" value="{{ old('rfc') }}" />
                            </div>
                            </div>
                
                            <div className="form-group col-md-4">
                            <div className="form-group">
                                <label for="celular">Celular</label>
                                <input type="text" name="celular" className="form-control" value="{{ old('celular') }}" required />
                            </div>
                            </div>
                
                            <div className="form-group col-md-5">
                            <div className="form-group">
                                <label for="correo">Correo Electrónico</label>
                                <input type="email" name="correo" className="form-control" value="{{ old('correo') }}" />
                            </div>
                            </div>
                        </div>
                
                        <div className="form-group">
                            <label for="comentarios">Comentarios</label>
                            <textarea type="text" name="comentarios" className="form-control" value="{{ old('comentarios') }}"></textarea>
                        </div>
                    </form>
                </div>
                <div className="modal-footer justify-content-between">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal"><i className="fas fa-window-close"></i> Cancelar</button>
                </div>
            </div>
        </div>
    )
}



export { CatalogoClientes, Cliente };