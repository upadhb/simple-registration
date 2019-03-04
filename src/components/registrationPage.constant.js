export const registrationPageConstants = {
    label: {
        MY_COMPANY: 'My Company',
        REGISTER: 'REGISTER',
        REGISTRATION_MAIN_LABEL: 'Enter your information below for exclusive offers, promotions and savings.',
        FIELDS_REQUIRED_MESSAGE: '* Fields required'
    }
};

export const registrationFormData = () => {
    return {
        firstName: {
            label: 'First Name',
            required: true,
            value: '',
        },
        lastName: {
            label: 'Last Name',
            required: false,
            value: '',
        },
        emailAddress: {
            label: 'Email Address',
            required: true,
            value: '',
        },
        choosePassword: {
            label: 'Email Address',
            required: true,
            value: '',
        },
        confirmPassword: {
            label: 'Confirm Password',
            required: true,
            value: '',
        },
        birthDate: {
            label: 'Birthdate',
            required: true,
            isMultiSelect: true,
            valueMonth: '',
            valueDate: '',
            valueYear: '',
        },
        phoneNumber: {
            label: 'Email Address',
            required: false,
            value: '',
        },
        country: {
            label: 'Email Address',
            required: true,
            value: '',
        },
        zipCode: {
            label: 'Zip/Postal Code*',
            required: false,
            value: '',
        },
        termsConditions: {
            label: `Yes, I accept the <a>Terms & Conditions</a> and <a>Privacy Policy</a>.`,
            required: true,
            value: '',
        },
        specialOffers: {
            label: "Yes, I'd like to receive news and special offers",
            required: false,
            value: '',
        }
    }
};
