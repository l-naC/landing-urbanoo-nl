<template>
    <div class="flex flex-col md:flex-row lg:flex-row">
        <div class="w-full md:w-3/5 lg:w-3/5 flex flex-col justify-center text-left">
            <div class="w-10/12 md:w-1/2 lg:w-1/2 mx-auto mb-0 md:mb-60 lg:mb-60">
                <h1 class="text-2xl my-5">URBANOO</h1>
                <p class="text-xl my-8">Application pour visiter une ville différemment à travers des parcours interactifs</p>
                <p class="text-xl my-8">Abonnez-vous et tenez-vous au courant de sa sortie.</p>
                <!-- Begin Mailchimp Signup Form -->
                    <form action="https://gmail.us7.list-manage.com/subscribe/post?u=fd4540943b03621f8a372dc3e&amp;id=adaa40922b" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
                        <div id="mc_embed_signup_scroll" class="flex flex-col md:flex-row lg:flex-row my-5">
                            <input type="email" value="" name="EMAIL" class="email mr-4 shadow-2xl font-thin placeholder-opacity-50 rounded-full py-3 px-6 w-full h-12" id="mce-EMAIL" placeholder="Saisissez votre adresse e-mail*" required>
                            <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
                            <div style="position: absolute; left: -5000px;" aria-hidden="true">
                                <input type="text" name="b_fd4540943b03621f8a372dc3e_adaa40922b" tabindex="-1" value="">
                            </div>
                            <input type="submit" value="Rejoindre" name="subscribe" id="mc-embedded-subscribe" class="shadow-2xl font-bold rounded-full py-3 px-6 text-white h12 uppercase mt-3 md:mt-0 lg:mt-0">
                        </div>
                    </form>
                <!--End mc_embed_signup-->
                <div class="flex my-8 justify-center md:justify-start lg:justify-start">
                    <a href="https://www.facebook.com/UrbanooApp"><img class="img-rs" src="../assets/images/facebook.svg" alt="facebook"></a>
                    <!-- <a href=""><img class="img-rs" src="../assets/images/instagram.svg" alt="instagram"></a> -->
                    <a href="https://twitter.com/Urbanoo9"><img class="img-rs" src="../assets/images/twitter.svg" alt="twitter"></a>
                </div>
            </div>
        </div>
        <div class="w-full md:w-2/5 lg:w-2/5 flex justify-center md:justify-end lg:justify-end">
            <img src="../assets/images/mockup.png" alt="mockup">
        </div>
    </div>
        
</template>

<script>
export default {
    name: "home"
}
</script>

<style scoped>
    .img-rs{
        @apply h-5 mr-10
    }

    #mc-embedded-subscribe{
        background-color: #4390C7;
    }
</style>