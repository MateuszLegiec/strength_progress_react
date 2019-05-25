export function isPasswordValid(password){
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/.test(password)
}

export function isUsernameValid(username){
    return /^[a-zA-Z0-9._-]{4,16}$/.test(username);
}

export function isEmailValid(email){
    return /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(email);
}

export function isDateOfBirthValid(dateOfBirth){

    if (!dateOfBirth){
        return false;
    }

    const today = new Date();
    const yyyy = today.getFullYear() - 14;
    let dd = today.getDate();
    let mm = today.getMonth() + 1;
    if(dd<10){
        dd='0'+dd
    }
    if(mm<10){
        mm='0'+mm
    }
    const endDate = yyyy+'-'+mm+'-'+dd;

    return (dateOfBirth<=endDate);
}

export function isRepeatedPasswordSame(password1,password2){
    return password1 === password2;
}

export function isPositiveInt(int) {
    return /^([1-9][0-9]*)$/.test(int);

}

export function isPositiveDouble(double) {
    return /^((0+(\.[0-9]+))|([1-9][0-9]*))+(\.[0-9]+)?$/.test(double);

}

export function isIdentityValid(identity) {
    return (isUsernameValid(identity) || isEmailValid(identity));
}

export function isBodyWeightValid(weight) {
    return (isPositiveInt(weight) && weight>=40 && weight<205);
}
