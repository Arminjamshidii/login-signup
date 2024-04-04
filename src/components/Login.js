import React, { useState, useEffect } from 'react';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import validata from './validata';
import { notify } from './toast';
import styles from './SignUp.module.css';
import banner1 from "./image/1.jpg"
import { Link } from 'react-router-dom';
const Login = () => {
    const [data, setData] = useState({
        email: "",
        password: "",
        
    })
    const [errors, setErrors] = useState({})
    const [touch, setTouch] = useState({})
    useEffect(() => {
        setErrors(validata(data,"login"))
    }, [data, touch])
    const changeHandler = (e) => {
            setData({ ...data, [e.target.name]: e.target.value })
     
    }
    const focusHandler = (e) => {
        setTouch({ ...touch, [e.target.name]: true })
    }
    const submitHandler = (e) => {
        e.preventDefault()
        notify()
        if (!Object.keys(errors).length) {
            notify('you logged is successfully','success')
        } else {
            notify("please fill all the fields",'error');
            setTouch({
                email: true,
                password: true,
               
            })
        }
    }
    
    return (
        <div className={styles.container}>
            <div className={styles.bannerContainer}>
                <img src={banner1}/>
            </div>
            <form onSubmit={submitHandler} className={styles.formContainer}>
                <h2 className={styles.header}>Login</h2>
               
                <div className={styles.formField}>
                    <label>Email</label>
                    <input className={(errors.email && touch.email)?styles.uncompleted:styles.formInput }
                    type="text" name='email' value={data.email} onChange={changeHandler} onFocus={focusHandler} />
                    {errors.email && touch.email && <span>{errors.email}</span>}
                </div>
                <div className={styles.formField}>
                    <label>Password</label>
                    <input className={(errors.password && touch.password)?styles.uncompleted:styles.formInput }
                    type="password" name='password' value={data.password} onChange={changeHandler} onFocus={focusHandler} />
                    {errors.password && touch.password && <span>{errors.password}</span>}
                </div>
                
                
                <div className={styles.formButtons}>
                    <Link to='/signup'>SignUp</Link>
                    <button type='submit'>Login</button>
                </div>
            </form>
            
            <ToastContainer />
        </div>
    );
};

export default Login;