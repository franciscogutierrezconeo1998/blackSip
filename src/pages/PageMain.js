import React, {useState, useEffect} from 'react';
import FormContact from "../forms/FormContact";
import NavBar from '../components/Navbar';
import OrderReview from '../pages/OrderReview';
import "../assets/css/PageMain.css"
import { __GetCodePostal, __SendContact } from "../services/AddressSendService";
import { __GetProducts } from '../services/OrderService';

import { ToastContainer ,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PageMain = () => {  

    const [codePostal, setCodePostal] = useState('');
    const [dataCodePostal, setDataCodePostal] = useState([]);
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [email, setEmail] = useState('');
    const [telefono, setTelefono] = useState('');
    const [estado, setEstado] = useState('');
    const [ciudad, setCiudad] = useState('');
    const [municipio, setMunicipio] = useState('');
    const [calle, setCalle] = useState('');
    const [product, setProduct] = useState([]);
    const [totalPrice, settotalPrice] = useState(0);

    useEffect(() => {
        GetProducts();
    },[]);

    const notify = (type, message) => {
        switch (type) {
            case 'info':
                toast.info(message)
                break;
            case 'success':
                toast.success(message)
                break;
            case 'warning':
                toast.warning(message)
                break;
            case 'error':
                toast.error(message)
                break;
            case 'dark':
                toast.dark(message)
                break;
            default:
                toast.default(message)
                break;
        }
    }

    const onChangeCodePostal = (e) => {
        e.persist();
        setCodePostal(e.target.value);
    }

    const onChangeNombre = (e) => {
        e.persist();
        setNombre(e.target.value);
    }

    const onChangeApellido = (e) => {
        e.persist();
        setApellido(e.target.value)
    }

    const onChangeEmail = (e) => {
        e.persist();
        setEmail(e.target.value)
    }

    const onChangeTelefono = (e) => {
        e.persist();
        setTelefono(e.target.value)
    }

    const onChangeEstado = (e) => {
        e.persist();
        setEstado(e.target.value)
    }

    const onChangeCiudad = (e) => {
        e.persist();
        setCiudad(e.target.value)
    }

    const onChangeMunicipio = (e) => {
        e.persist();
        setMunicipio(e.target.value)
    }

    const onChangeCalle = (e) => {
        e.persist();
        setCalle(e.target.value)
    }

    const onBlurCodePostal = async () => {
        console.log('Este es el codigo postal',codePostal);
        if(codePostal) {
            try {
                const res = await __GetCodePostal(codePostal);
                console.log('Estos son los productos',res);
                notify('success', 'Consultado exitosamente');
                setDataCodePostal(res.data);
            } catch (e) {
                console.log('Este es el error',e);
            }
        }
    }

    const sendContact = async (data) => {
        try {
            await __SendContact(data);
            notify('success', 'Los datos fueron enviados exitosamente');
        } catch (err) {
            console.log(err);
            notify('error', 'Los datos no fueron enviados');
        }
    }

    const validarFormulario = (e) => {
        e.preventDefault();
        let nombre = document.getElementById('nombre').value;
        if(nombre == '') {
            notify('warning', 'Verifique su nombre por favor');
            return;
        }
        let apellido = document.getElementById('apellido').value;
        if (apellido == '') {
            notify('warning', 'Verifique su apellido por favor');
          return;
        }
        let email = document.getElementById('email').value;
        if (email == '') {
            notify('warning', 'Verifique su email por favor');
            return;
        }
        let telefono = document.getElementById('telefono').value;
        if (telefono.length < 6) {
            notify('warning', 'Su telefono debe tener mas de 6 dígitos');
            return;
        }
        let codePostal = document.getElementById('codePostal').value;
        if (codePostal == '') {
            notify('warning', 'Verifique su codigo postal por favor');
            return;
        }
        let colonia = document.getElementById('colonia').value;
        if (colonia == '') {
            notify('warning', 'Verifique su colonia por favor');
            return;
        }
        let estado = document.getElementById('estado').value;
        if (estado == '') {
            notify('warning', 'Verifique su estado o región por favor');
            return;
        }
        let ciudad = document.getElementById('ciudad').value;
        if (ciudad == '') {
            notify('warning', 'Verifique su ciudad por favor');
            return;
        }
        let municipio = document.getElementById('municipio').value;
        if (municipio == '') {
            notify('warning', 'Verifique su delegación o municipio por favor');
            return;
        }
        let calle = document.getElementById('calle').value;
        if (calle == '') {
            notify('warning', 'Verifique su calle por favor');
            return;
        }
        submitForm();
      }

      const GetProducts = async () => {
        try {
            const res = await __GetProducts();
            console.log('Estos son los productos',res);
            setProduct(res.data)ñ
            getProductTotal();
        } catch (e) {
            console.log('Este es el error',e);
        }
    }

    const getProductTotal = () => {
        let productTotal = product?.reduce((act, item) => Number(item.price )+ act, 0);
        settotalPrice(productTotal);
    }

    const submitForm = () => {
        let colonia = document.getElementById('colonia')
        const data = {
            nombre,
            apellido,
            email,
            telefono,
            estado: dataCodePostal.length!=0 ? dataCodePostal.state : estado,
            ciudad: dataCodePostal.length!=0 ? dataCodePostal.city : ciudad,
            colonia: colonia.value,
            municipio: dataCodePostal.length!=0 ? dataCodePostal.town : municipio,
            codigo_postal: codePostal,
            calle
        }

        console.log('Esta es la data a enviar al post', data);
        sendContact(data);
    }

    return (
        <>
        <ToastContainer />
            <div className="div_main">
                <div className="div_main_form">
                    <NavBar/>
                    <FormContact 
                    onChangeCodePostal={onChangeCodePostal} 
                    codePostal={codePostal} 
                    nombre={nombre}
                    apellido={apellido}
                    email={email}
                    telefono={telefono}
                    estado={estado}
                    ciudad={ciudad}
                    municipio={municipio}
                    calle={calle}
                    validarFormulario={validarFormulario}
                    onChangeNombre={onChangeNombre}
                    onChangeApellido={onChangeApellido}
                    onChangeEmail={onChangeEmail}
                    onChangeTelefono={onChangeTelefono}
                    onChangeEstado={onChangeEstado}
                    onChangeCiudad={onChangeCiudad}
                    onChangeMunicipio={onChangeMunicipio}
                    onChangeCalle={onChangeCalle}
                    onBlurCodePostal={onBlurCodePostal} 
                    dataCodePostal={dataCodePostal}/>
                </div>
                <div className="div_main_order">
                    <OrderReview product={product} getProductTotal={getProductTotal} totalPrice={totalPrice} />
                </div>
            </div>
        </>
    );
}

export default PageMain;
