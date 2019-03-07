const getDays = () => {
    const days = [];
    for (let i = 1; i <= 31; i++) {
        days.push(i)
    }
    return days;
};

const getYears = () => {
    const currentYear = new Date().getFullYear();
    const lastYearOption = currentYear - 100;
    const years = [];
    for (let i = lastYearOption; i <= currentYear; i++) {
        years.unshift(i);
    }
    return years;
};

export const registrationPageConstants = {
    label: {
        MY_COMPANY: 'My Company',
        REGISTER: 'REGISTER',
        REGISTRATION_MAIN_LABEL: 'Enter your information below for exclusive offers, promotions and savings.',
        FIELDS_REQUIRED_MESSAGE: '* Fields required',
        AND: ' and ',
        TERMS_CONDITIONS: 'Terms & Conditions',
        PRIVACY_POLICY: 'Privacy Policy',
        ERROR_TITLE: 'The following errors have occurred:',
        IS_REQUIRED: ' is required',
        BIRTH_DATE_TOOLTIP: 'Birth Month Day and Year are required',
        MONTH: 'Month',
        DAY: 'Day',
        YEAR: 'Year',
    },
    dateConstants: {
        //ideally we would use a plugin for date/time
        months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
        days: getDays(),
        years: getYears(),
    }
};



export const registrationFormData = () => {
    return {
        firstName: {
            id: 'firstName',
            label: 'First Name',
            required: true,
            value: '',
        },
        lastName: {
            id: 'lastName',
            label: 'Last Name',
            required: false,
            value: '',
        },
        emailAddress: {
            id: 'emailAddress',
            label: 'Email Address',
            required: true,
            value: '',
        },
        choosePassword: {
            id: 'choosePassword',
            label: 'Choose Password',
            required: true,
            value: '',
        },
        confirmPassword: {
            id: 'confirmPassword',
            label: 'Confirm Password',
            required: true,
            value: '',
        },
        birthDate: {
            id: 'birthDate',
            label: 'Birthdate',
            required: true,
        },
        birthMonth: {
            id: 'birthMonth',
            required: true,
            value: '',
        },
        birthDay: {
            id: 'birthDay',
            required: true,
            value: '',
        },
        birthYear: {
            id: 'birthYear',
            required: true,
            value: '',
        },
        phoneNumber: {
            id: 'phoneNumber',
            label: 'Phone Number',
            required: false,
            value: '',
        },
        country: {
            id: 'country',
            label: 'Country',
            required: true,
            value: '',
        },
        zipCode: {
            id: 'zipCode',
            label: 'Zip/Postal Code*',
            required: false,
            value: '',
        },
        termsConditions: {
            id: 'termsConditions',
            label: 'Yes, I accept the ',
            required: true,
            value: '',
            requiredErrorLabel: 'You must accept Terms & Conditions and Privacy Policy',
        },
        specialOffers: {
            id: 'specialOffers',
            label: "Yes, I'd like to receive news and special offers",
            required: false,
            value: '',
        },
        availableCountries: [
            {
                id: 'countryOne',
                icon: 'fas fa-flag-usa fa-2x',
                value: 'usa'
            },
            {
                id: 'countryTwo',
                icon: 'fab fa-canadian-maple-leaf fa-2x',
                value: 'canada'
            }
        ]
    }
};
