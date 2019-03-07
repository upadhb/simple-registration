<template>
    <div class="registration">
        <div class="registration__company text-center">
            <i class="fas fa-star fa-2x registration__company-icon"></i>
            <span class="registration__company-label">
                {{registrationPageConstants.label.MY_COMPANY}}
            </span>
        </div>
        <div class="registration__title text-center">
            {{registrationPageConstants.label.REGISTER}}
        </div>
        <div class="registration__form">
            <div class="registration__form-title text-center">
                {{registrationPageConstants.label.REGISTRATION_MAIN_LABEL}}
            </div>
            <div class="registration__form-body">
                <div class="form-label">
                    {{registrationPageConstants.label.FIELDS_REQUIRED_MESSAGE}}
                </div>
                <div :class="['registration__form-item', hasError(registrationData.firstName) ? 'error-item' : '']">
                    <div class="form-label">
                        <label for="firstName">
                            {{createFormLabel(registrationData.firstName)}}
                        </label>
                    </div>
                    <input id="firstName"
                           type="text"
                           class="form-input"
                           v-model="registrationData.firstName.value"/>
                </div>
                <div :class="['registration__form-item', hasError(registrationData.lastName) ? 'error-item' : '']">
                    <div class="form-label">
                        <label for="lastName">
                            {{createFormLabel(registrationData.lastName)}}
                        </label>
                    </div>
                    <input id="lastName"
                           type="text"
                           class="form-input"
                           v-model="registrationData.lastName.value"/>
                </div>
                <div :class="['registration__form-item', hasError(registrationData.emailAddress) ? 'error-item' : '']">
                    <div class="form-label">
                        <label for="emailAddress">
                            {{createFormLabel(registrationData.emailAddress)}}
                        </label>
                    </div>
                    <input id="emailAddress"
                           type="text"
                           class="form-input"
                           v-model="registrationData.emailAddress.value"/>
                </div>
                <div :class="['registration__form-item', hasError(registrationData.choosePassword) ? 'error-item' : '']">
                    <div class="form-label">
                        <label for="choosePassword">
                            {{createFormLabel(registrationData.choosePassword)}}
                        </label>
                    </div>
                    <input id="choosePassword"
                           type="text"
                           class="form-input"
                           v-model="registrationData.choosePassword.value"/>
                </div>
                <div :class="['registration__form-item', hasError(registrationData.confirmPassword) ? 'error-item' : '']">
                    <div class="form-label">
                        <label for="confirmPassword">
                            {{createFormLabel(registrationData.confirmPassword)}}
                        </label>
                    </div>
                    <input id="confirmPassword"
                           type="text"
                           class="form-input"
                           v-model="registrationData.confirmPassword.value"/>
                </div>
                <div class="registration__form-item">
                     <div class="form-label registration__birth">
                         <div :class="[birthDateError() ? 'error-label' : '']">
                             {{createFormLabel(registrationData.birthDate)}}
                         </div>
                         <div class="registration__birth-item text-right">
                             <div class="tooltip"> <i class="fa fa-question-circle form-blue-color"></i>
                                 <span class="tooltiptext">{{registrationPageConstants.label.BIRTH_DATE_TOOLTIP}}</span>
                             </div>
                         </div>
                     </div>
                     <div class="registration__birth">
                         <div :class="['registration__birth-item', hasError(registrationData.birthMonth) ? 'error-item' : '']">
                             <select id="birthMonth"
                                     :class="['form-input', registrationData.birthMonth.value ? '' : 'default-select']"
                                     v-model="registrationData.birthMonth.value">
                                 <option value="" disabled>{{registrationPageConstants.label.MONTH}}</option>
                                 <option v-for="(month, index) in registrationPageConstants.dateConstants.months"
                                         :value="month"
                                         :key="index">
                                     {{month}}
                                 </option>
                             </select>
                         </div>
                         <div :class="['registration__birth-item registration__birth-item--day', hasError(registrationData.birthDay) ? 'error-item' : '']">
                             <select id="birthDay"
                                     :class="['form-input', registrationData.birthDay.value ? '' : 'default-select']"
                                     v-model="registrationData.birthDay.value">
                                 <option value="" disabled>{{registrationPageConstants.label.DAY}}</option>
                                 <option v-for="(day, index) in registrationPageConstants.dateConstants.days"
                                         :value="day"
                                         :key="index">
                                     {{day}}
                                 </option>
                             </select>
                         </div>
                         <div :class="['registration__birth-item', hasError(registrationData.birthYear) ? 'error-item' : '']">
                             <select id="birthYear"
                                     :class="['form-input', registrationData.birthYear.value ? '' : 'default-select']"
                                     v-model="registrationData.birthYear.value">
                                 <option value="" disabled>{{registrationPageConstants.label.YEAR}}</option>
                                 <option v-for="(year, index) in registrationPageConstants.dateConstants.years"
                                         :value="year"
                                         :key="index">
                                     {{year}}
                                 </option>
                             </select>
                         </div>
                     </div>
                </div>
                <div :class="['registration__form-item', hasError(registrationData.phoneNumber) ? 'error-item' : '']">
                    <div class="form-label">
                        <label for="phoneNumber">
                            {{createFormLabel(registrationData.phoneNumber)}}
                        </label>
                    </div>
                    <input id="phoneNumber"
                           type="text"
                           class="form-input"
                           v-model="registrationData.phoneNumber.value"/>
                </div>
                <div :class="['registration__form-item', hasError(registrationData.country) ? 'error-item' : '']">
                     <div class="form-label">
                         {{createFormLabel(registrationData.country)}}
                     </div>
                    <div class="registration__country">
                        <div v-for="country in registrationData.availableCountries"
                             :key="country.id">
                            <input :id="country.id"
                                   type="radio"
                                   :value="country.value"
                                   :checked="registrationData.country.value === country.value"
                                   @click="setSelectedCountry(country)"/>
                            <label for="country.id"><i :class="country.icon"></i></label>
                        </div>
                    </div>

                </div>
                <div :class="['registration__form-item', hasError(registrationData.zipCode) ? 'error-item' : '']">
                    <div class="form-label">
                        <label for="zipCode">
                            {{createFormLabel(registrationData.zipCode)}}
                        </label>
                    </div>
                    <input id="zipCode"
                           type="text"
                           class="form-input"
                           v-model="registrationData.zipCode.value"/>
                </div>
            </div>
            <div class="registration__term-conditions">
                <div :class="['registration__term-conditions--item', hasError(registrationData.termsConditions) ? 'error-item' : '']">
                    <input type="checkbox"
                           id="termsAndConditions"
                           v-model="registrationData.termsConditions.value"/>
                    <label for="termsAndConditions">
                        <span>{{registrationData.termsConditions.label}}</span>
                        <span class="registration_link" @click.prevent="launchTermsConditions">
                            {{registrationPageConstants.label.TERMS_CONDITIONS}}
                        </span>
                        <span>{{registrationPageConstants.label.AND}}</span>
                        <span class="registration_link" @click.prevent="launchPrivacyPolicy">
                            {{registrationPageConstants.label.PRIVACY_POLICY}}
                        </span>
                    </label>
                </div>
                <div class="registration__term-conditions--item">
                    <input type="checkbox"
                           id="specialOffers"
                           v-model="registrationData.specialOffers.value"/>
                    <label for="specialOffers">{{registrationData.specialOffers.label}}</label>
                </div>
            </div>
            <div class="text-center">
                <button type="button"
                        class="registration__button"
                        id="register_btn"
                        @click="submitRegistration">
                    {{registrationPageConstants.label.REGISTER}}
                </button>
            </div>
            <div class="registration__errors error-color" v-if="registrationErrors.length">
                <div>{{registrationPageConstants.label.ERROR_TITLE}}</div>
                <ul>
                    <li v-for="(error, index) in registrationErrors"
                        :key="index">
                        {{error.value}}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import {registrationFormData, registrationPageConstants} from "./registrationPage.constant";

    export default {
        name: 'RegistrationPage',
        data() {
            return {
                registrationPageConstants,
                registrationData: registrationFormData(),
                registrationFormErrors: [],
            }
        },
        methods: {
            createFormLabel(formItem) {
                return formItem && formItem.required
                    ? `${formItem.label} *`
                    : formItem.label
            },
            launchTermsConditions() {
                alert('this should display Terms & Conditions')
            },
            launchPrivacyPolicy() {
                alert('this should display Privacy Policy')
            },
            submitRegistration() {
                this.registrationFormErrors = [];
                Object.keys(this.registrationData).forEach((item) => {
                    const error = {};
                    if (this.registrationData[item]
                        && this.registrationData[item].required
                        && !this.registrationData[item].value) {
                        const errorItem = this.registrationData[item];
                        error.id = errorItem.id;
                        if(this.registrationData[item].label) {
                            error.value = errorItem.requiredErrorLabel
                                ? errorItem.requiredErrorLabel
                                : `${errorItem.label} ${registrationPageConstants.label.IS_REQUIRED}`;
                        }
                        this.registrationFormErrors.push(error);
                    }
                });
            },
            setSelectedCountry(country) {
                this.registrationData.country.value = country.value;
            },
            hasError(formItem) {
                return this.registrationFormErrors.some(item => item.id === formItem.id);
            },
            birthDateError() {
                const { birthMonth, birthDay, birthYear } = this.registrationData;
                return this.registrationFormErrors
                    .some(item => item.id === birthMonth.id || item.id === birthDay.id || item.id === birthYear.id);
            },
        },
        computed: {
            registrationErrors() {
                return this.registrationFormErrors && this.registrationFormErrors.length
                    ? this.registrationFormErrors.filter(item => item.value)
                    : []
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "../commonStyles/commonClasses";
    @import "../commonStyles/_colors.scss";
    @import "../commonStyles/_responsive.scss";

    .registration {
        padding: 10px 20px;

        @include breakpoint(sm) {
            padding: 10px 15px;
        }

        &__company {
            height: 36px;
            width: 182px;
            margin: 0 auto;

            @include breakpoint(sm) {
                height: 28px;
                width: 157px;
            }

            &-icon {
                color: $yellow;

                @include breakpoint(sm) {
                    font-size: 14px;
                }
            }

            &-label {
                color: $dark-label;
                font-style: italic;
                font-weight: 600;
                font-size: 22px;
                position: relative;
                top: -4px;

                @include breakpoint(sm) {
                    font-size: 16px;
                    top: 0;
                }
            }
        }

        &__title {
            background-image: linear-gradient(to right, #2f9199, #986ddd);
            color: $white;
            font-size: 60px;
            font-family: 'Arial-BoldMt', sans-serif;
            line-height: 69px;
            font-weight: 600;
            padding: 35px 0;
            letter-spacing: -0.7px;
            max-width: 1203px;
            max-height: 179px;
            margin: 0 auto;

            @include breakpoint(sm) {
                font-size: 50px;
            }
        }

        &__form {
            max-width: 556px;
            margin: 0 auto;

            &-body {
                padding: 20px;
                background-color: $light-gray;
                margin: 0 auto;

                @include breakpoint(sm) {
                    padding: 15px;
                }
            }

            &-item {
                padding-bottom: 10px;
            }

            &-title {
                color: $dark-label;
                font-size: 18px;
                line-height: 22px;
                letter-spacing: 0;
                padding-bottom: 15px;
            }
        }

        .form-input {
            padding: 10px;
            display: inline-block;
            font-size: 18px;
            -webkit-border-radius: 2px;
            -moz-border-radius: 2px;
            border: 1px solid $light-gray;
            border-radius: 2px;
            width: 100%;

            @include breakpoint(sm) {
                font-size: 12px;
            }

            option {
                color: $dark-label;
            }
        }

        .form-label {
            color: $dark-label;
            font-size: 14px;
            letter-spacing: 0;
            line-height: 16px;
            padding-bottom: 10px;
        }
        
        &__birth {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;

            &-item {
                flex: 1 1 auto;

                &--day {
                    padding: 0 20px;

                    @include breakpoint(sm) {
                        padding: 0 3px;
                    }
                }
            }
        }

        &__term-conditions {
            color: $light-label;
            padding: 15px 20px;

            &--item {
                padding: 10px 20px;

                .registration_link {
                    text-decoration: underline;
                    cursor: pointer;
                }
            }

        }

        &__button {
            color: $white;
            background-color: $form-blue;
            padding: 10px 70px;
            letter-spacing: 0.5px;
            line-height: 16px;
            font-size: 14px;
            border: none;
            cursor: pointer;
        }

        &__country {
            display: flex;

            > div {
                padding-right: 20px;
            }
        }

        &__errors {
            padding: 20px 40px;
        }

        .default-select {
            color: $placeholder-text;
        }

        .error-item {
            * {
                color: $error-red !important;
            }

            input, select {
                border-color: $error-red;
            }
        }

        .error-label {
            color: $error-red;
        }

    }

</style>
