import React from 'react';
import "../assets/css/FormContact.css"

const FormContact = ({onChangeCodePostal, 
    codePostal, 
    onBlurCodePostal,
    dataCodePostal, 
    onChangeNombre,
    onChangeApellido,
    onChangeEmail,
    onChangeTelefono,
    onChangeEstado,
    onChangeCiudad,
    onChangeMunicipio,
    onChangeCalle,
    nombre,
    apellido,
    email,
    telefono,
    estado,
    ciudad,
    municipio,
    calle,
    validarFormulario}) => {
    return (
        <div>
            <form> 
                <div className="div_row">
                    <div className="div_icons"><i className="fa fa-user icon_form" aria-hidden="true"></i></div>
                    <input type="text" id="nombre" value={nombre} onChange={onChangeNombre} placeholder="Nombre" className="input_text" />
                    <div className="div_icons"><i className="fa fa-user icon_form" aria-hidden="true"></i></div>
                    <input type="text" id="apellido" value={apellido} placeholder="Apellidos" onChange={onChangeApellido} className="input_text" />
                </div>
                <div className="div_row_tow">
                    <div className="div_icons"><i className="fa fa-envelope icon_form" aria-hidden="true"></i></div>
                    <input type="email" id="email" value={email} placeholder="Correo electronico" onChange={onChangeEmail} className="input_text" />
                    <div className="div_icons"><i className="fa fa-phone icon_form" aria-hidden="true"></i></div>
                    <input type="text" id="telefono" value={telefono} placeholder="Telefono" onChange={onChangeTelefono} className="input_text" />
                </div>
                <div className="div_row_tow">
                    <div className="div_icons"><i className="fa fa-map-marker icon_form" aria-hidden="true"></i></div>
                    <input type="text" id="codePostal" placeholder="Codigo postal" onChange={onChangeCodePostal} value={codePostal} onBlur={onBlurCodePostal} className="input_text" />
                    {typeof dataCodePostal.colonies != 'undefined' ?
                        dataCodePostal.colonies.length == 1 ?
                        <>
                            <div className="div_icons"><i className="fa fa-map-marker icon_form" aria-hidden="true"></i></div>
                            <input type="text" id="colonia" placeholder="Colonia" value={dataCodePostal.colonies[0]} className="input_text" />
                        </>
                        : 
                        <>
                        <div className="div_icons"><i className="fa fa-map-marker icon_form" aria-hidden="true"></i></div>
                        <select className="select_colonies" id="colonia" style={{width: "17%"}}>
                            {dataCodePostal.colonies.map((item,index)=>
                                (<option key={index} value={item}>{item}</option>)
                            )}
                        </select>
                        </>
                        :
                        <>
                            <div className="div_icons"><i className="fa fa-map-marker icon_form" aria-hidden="true"></i></div>
                            <input type="text" id="colonia" placeholder="Colonia" className="input_text" />
                        </>
                    }
                </div>
                <div className="div_row_tow">
                    <div className="div_icons"><i className="fa fa-map-marker icon_form" aria-hidden="true"></i></div>
                    <input type="text" id="estado" value={estado} onChange={onChangeEstado} placeholder="Estado/Región" value={dataCodePostal ? dataCodePostal.state : estado} className="input_text" />
                    <div className="div_icons"><i className="fa fa-map-marker icon_form" aria-hidden="true"></i></div>
                    <input type="text" id="ciudad" value={ciudad} onChange={onChangeCiudad} placeholder="Ciudad" value={dataCodePostal ? dataCodePostal.city : ciudad} className="input_text" />
                </div>
                <div className="div_row_tow">
                    <div className="div_icons"><i className="fa fa-map-marker icon_form" aria-hidden="true"></i></div>
                    <input type="text" id="municipio" value={municipio} onChange={onChangeMunicipio} placeholder="Delegación o municipio" value={dataCodePostal ? dataCodePostal.town : municipio} className="input_text" />
                    <div className="div_icons"><i className="fa fa-map-signs icon_form" aria-hidden="true"></i></div>
                    <input type="text" id="calle" value={calle} onChange={onChangeCalle} placeholder="Calle" className="input_text" />
                </div>
                <div className="div_row_buttons">
                    <button className="button_libreta" type="button">Libreta de direcciones</button>
                    <button className="button_submit" type="submit" onClick={validarFormulario}>Guardar</button>
                </div>
                <div className="div_row_check">
                    <input type="checkbox" id="direct" name="direct"/>
                    <label for="direct"> Utilizar como dirección de facturación.</label>
                </div>
            </form>
        </div>
    );
}

export default FormContact;
