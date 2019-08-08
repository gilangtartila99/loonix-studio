<template>
  <section class="page_container">
    <Header />
    <Banner />
    <WhoUs />
    <Features />
    <Services />
    <Contact />
    <Footer />
  </section>
</template>

<script>
const Header = () => import('~/components/headers/Header.vue')
const Banner = () => import('~/components/home/Banner.vue')
const WhoUs = () => import('~/components/home/WhoUs.vue')
const Features = () => import('~/components/home/Features.vue')
const Services = () => import('~/components/home/Services.vue')
const Contact = () => import('~/components/home/Contact.vue')
const Footer = () => import('~/components/footer/Footer.vue')

export default {
  name: 'Home',
  components: {
    Header,
    Banner,
    WhoUs,
    Features,
    Services,
    Contact,
    Footer
  }
}
</script>
