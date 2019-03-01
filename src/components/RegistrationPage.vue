<template>
    <div>
        <div></div>
    </div>
</template>

<script>
    import {registrationFormData} from "./registrationPage.constant";

    export default {
        name: 'RegistrationPage',
        props: {
            msg: String
        },
        data() {
            return {
                registrationData: registrationFormData(),
            }
        },
    }
</script>

<style scoped>

</style>
