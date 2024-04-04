import React, { useState, useEffect } from 'react';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import validata from './validata';
import { notify } from './toast';
import styles from './SignUp.module.css';
// import banner from "../image/3.png"
import banner1 from "../components/image/1.jpg"
// import banner2 from "../image/2.jpg"
import { Link } from 'react-router-dom';
const SignUp = () => {
    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        isAccepted: false
    })
    const [errors, setErrors] = useState({})
    const [touch, setTouch] = useState({})
    useEffect(() => {
        setErrors(validata(data,"signup"))
    }, [data, touch])
    const changeHandler = (e) => {
        if (e.target.name === "isAccepted") {
            setData({ ...data, [e.target.name]: e.target.checked })

        } else {
            setData({ ...data, [e.target.name]: e.target.value })
        }
        console.log(data
        );
    }
    const focusHandler = (e) => {
        setTouch({ ...touch, [e.target.name]: true })
    }
    const submitHandler = (e) => {
        e.preventDefault()
        notify()
        if (!Object.keys(errors).length) {
            notify('you signed is successfully','success')
        } else {
            notify("please fill all the fields",'error');
            setTouch({
                name: true,
                email: true,
                password: true,
                confirmPassword: true,
                isAccepted: true
            })
        }
    }
    
    return (
        <div className={styles.container}>
             <div className={styles.bannerContainer}>
                <img src={banner1}/>
            </div>
            <form onSubmit={submitHandler} className={styles.formContainer}>
                <h2 className={styles.header}>SignUp</h2>
                <div className={styles.formField}>
                    <label>Name</label>
                    <input className={(errors.name && touch.name)?styles.uncompleted:styles.formInput }
                     type="text" name='name' value={data.name} onChange={changeHandler} onFocus={focusHandler} />
                    {errors.name && touch.name && <span>{errors.name}</span>}
                </div>
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
                <div className={styles.formField}>
                    <label>Confirm password</label>
                    <input className={(errors.confirmPassword && touch.confirmPassword)?styles.uncompleted:styles.formInput }
                    type="password" name='confirmPassword' value={data.confirmPassword} onChange={changeHandler} onFocus={focusHandler} />
                    {errors.confirmPassword && touch.confirmPassword && <span>{errors.confirmPassword}</span>}
                </div>
                <div className={styles.formField}>
                    <div className={styles.checkBoxContainer}>
                    <label>I accept terms of privacy policy</label>
                    <input 
                     type="checkbox" name='isAccepted' value={data.isAccepted} onChange={changeHandler} onFocus={focusHandler} />
                    </div>
                    {errors.isAccepted && touch.isAccepted && <span>{errors.isAccepted}</span>}
                </div>
                <div className={styles.formButtons}>
                    <Link to='/login'>Login</Link>
                    <button type='submit'>SignUp</button>
                </div>
            </form>
           
            <ToastContainer />
        </div>
    );
};

export default SignUp;