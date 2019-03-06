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
    },
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
            isMultiSelect: true,
            valueMonth: '',
            valueDate: '',
            valueYear: '',
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
                icon: 'America icon',
                value: 'usa'
            },
            {
                id: 'countryTwo',
                icon: 'Canada icon',
                value: 'canada'
            }
        ]
    }
};
