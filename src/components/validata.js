

const validata = (data, type) => {
    const errors = {};
    
    if (!data.email) {
        errors.email = "Email required!"
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
        errors.email = 'Invalid email address'
    } else {
        delete errors.email
    }
    if (!data.password) {
        errors.password = "Password is required"

    } else if (data.password.length < 6) {
        errors.password = "PAssword need to be 6 charcter or more"
    } else {
        delete errors.password;
    }
   
    if (type==="signup") {
        if (!data.name.trim()) {
        errors.name = "Username required!"
    } else {
        delete errors.name
    }
    if (!data.confirmPassword) {
        errors.confirmPassword = "confrim your password"
    } else if (data.confirmPassword !== data.password) {
        errors.confirmPassword = "Password do not match"

    } else {
        delete errors.confirmPassword
    }
    if (data.isAccepted) {
        delete errors.isAccepted
    } else {
        errors.isAccepted = "You must accept the terms and conditions";
    }
        
    }
    return errors;

}

export default validata;