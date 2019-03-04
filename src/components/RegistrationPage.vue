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
                <div class="registration__form-item">
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
            }
        },
        methods: {
            createFormLabel(formItem) {
                return formItem && formItem.required
                    ? `${formItem.label} *`
                    : formItem.label
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "../commonStyles/commonClasses";
    @import "../commonStyles/_colors.scss";

    .registration {
        padding: 10px 20px;

        &__company {
            padding: 10px;

            &-icon {
                color: $yellow;
            }

            &-label {
                font-style: italic;
                font-weight: 600;
                font-size: 22px;
                position: relative;
                top: -4px;
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
        }

        &__form {

            padding: 25px 200px;

            &-body {
                padding: 10px;
                background-color: $light-gray;
            }

            &-item {
                padding-bottom: 10px;
            }

            &-title {
                color: $dark-label;
                font-size: 18px;
                line-height: 22px;
                letter-spacing: 0;
            }
        }

        .form-input {
            width: 100%;
            padding: 15px 10px;
            display: inline-block;
            font-size: 18px;
            -webkit-border-radius: 2px;
            -moz-border-radius: 2px;
            border: 1px solid $light-gray;
            border-radius: 2px;
        }

        .form-label {
            color: $dark-label;
            font-size: 14px;
            letter-spacing: 0;
            line-height: 16px;
            padding-bottom: 10px;
        }

    }

</style>
