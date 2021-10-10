export default function validateInfo(values){
    let errors ={}

    if(!values.prefix.trim()){
        errors.prefix = "Prefix required"
    }

    if(!values.firstName.trim()){
        errors.firstName = "First Name required"
    }

    if(!values.lastName.trim()){
        errors.lastName = "Last Name required"
    }

    return errors;

}