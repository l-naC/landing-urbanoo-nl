<template>
    <div class="fond h-40 md:h-56 lg:h-56 flex flex-col justify-end text-white">
        <ul class="flex flex-col md:flex-row lg:flex-row justify-center h-auto md:h-16 lg:h-16">
            <li><router-link to="/mentionslegales">Mentions légales</router-link></li>
            <li><router-link to="/politiquecookies">Politique en matière de cookies</router-link></li>
            <li><router-link to="/politiqueconfidentialite">Politique de confidentialité</router-link></li>
        </ul>
        <p class="text-center my-2 h-auto md:h-8 lg:h-8">© 2021 par Urbanoo</p>
    </div>
</template>

<script>
export default {
    name: "footer"
}
</script>

<style scoped>
    .fond{
        background-image: url('../assets/images/footer.png');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
    }

    li{
        @apply mx-0 md:mx-8 lg:mx-8 my-1 md:my-0 lg:my-0
    }
</style>