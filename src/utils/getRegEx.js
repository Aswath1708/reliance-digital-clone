export const getPassWordRegEx = () => /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

export const getFirstNameRegEx = () => /^[A-Za-z]{3,}$/;

export const getLastNameRegEx = () =>  /^[A-Za-z]{1,}$/;

export const getEmailRegEx = () => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;