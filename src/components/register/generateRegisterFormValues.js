export const generateRegisterFormValues = () => {
    return {
        firstName: {
            value: "",
            required: true,
            error: "",
            validateInput: (name) =>
                name.length > 3 ? null : "name should have at least 3 character",
        },
        lastName: {
            value: "",
            required: true,
            error: "",
            validateInput: (lastName) =>
                lastName.length > 3 ? null : "last name should have at least 3 character",
        },
        email: {
            value: "",
            required: true,
            error: "",
            validateInput: (email) =>
                email.includes("@gmail.com") ? null :
                "email is not valid"
        },
        password: {
            value: "",
            required: true,
            error: "",
            validateInput: (password) =>
                password.length > 6 ? null : "password should have at least 6 character",
        },
    };
};