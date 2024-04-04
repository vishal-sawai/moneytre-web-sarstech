
function Validation(values) {
    const { email, password, confirmPassword } = values;
    let errors = {};

    // Check if email is valid
    if (!email) {
        errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        errors.email = "Email is invalid";
    }else{
        errors.email = " ";
    }

    // Check if password is valid
    if (!password) {
        errors.password = "Password is required";
    } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(password)) {
        errors.password = "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number";
    }
    else{
        errors.password = " ";
    
    }

    // Check if passwords match
    if (password !== confirmPassword) {
        errors.confirmPassword = "Passwords do not match";
    }

    return errors;
}
export default Validation;