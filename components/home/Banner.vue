<template>
    <section id="banner" class="banner">
        <div v-if="ready" v-swiper:mySwiper="swiperOption">
            <div class="swiper-wrapper">
                <div v-for="(banner, index) in banners" :key="index" class="swiper-slide">
                    <div class="backdrop">
                        <div class="title">PLAN, DESIGN & LAUNCH YOUR SITE.</div>
                        <div class="title">IMPROVE YOUR DIGITAL PRESENCE.</div>
                        <!-- <div class="desc">Website Design & Digital Marketing</div> -->
                        <a class="find" href="mailto:info@ioonixstudio.com?Subject=Contact%Ioonix Studio%20from%20Website" target="_top">FIND YOUR NEEDED</a>
                    </div>
                    <img :src="banner.image" class="banner_image" alt="Advertise Image">
                </div>
            </div>
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
        </div>
        <div v-else>
            <div class="swiper-wrapper">
                <div class="swiper-slide shimmer_animation"></div>
            </div>
        </div>
    </section>
</template>

<script>
import '~/plugins/swiper.js'
import axios from 'axios'

export default {
  name: 'Banner',
  data() {
    return {
        ready: true,
        banners: [
            {
                image: '/img/compro1.jpg'
            },
            {
                image: '/img/compro2.jpg'
            }
        ],
        swiperOption: {
            slidesPerView: 1,
            loop: true,
            autoplay: {
                delay: 3000
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            }
        }
    }
  },
  watch: {
      banners(newVal, oldVal) {
          this.banners = newVal
      }
  },
  methods: {   
    // async getBanner() {    
    //   if (this.cekCache(localStorage.expired_banner, 36000)) {
    //     let my_cache = localStorage.banners
    //     this.banners = JSON.parse(my_cache)
    //     this.ready = true
    //   } else {    
    //     let headers = {
    //         'content-type': 'application/json'
    //     }

    //     await axios({
    //         method: 'POST',
    //         url: this.serviceAPI + '/landing/get-banner',
    //         config: { 
    //             headers: headers
    //         }
    //     }).then(res => {
    //         this.banners = res.data.result
    //         localStorage.banners = JSON.stringify(res.data.result)
    //         localStorage.expired_banner = new Date().getTime()
    //         this.ready = true
    //     }).catch(e => {
    //         this.ready = true
    //         this.sendTelegram('Website Blog CariAja GetBanner', e)
    //         console.log('Terjadi kesalahan sistem');
    //     })
    //   }
    // }
  },
  mounted() {
    // this.getBanner()
  },
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/base.scss';
@import '../../assets/scss/mixins.scss';

.banner {
    width: 100%;
    margin-top: 85px;
    @include transition(all .5s ease-in-out);
}

.swiper-button-prev {
    left: 50px;
    &:before {
        padding: 1px 13px 4px 13px;
        @include box-shadow(0.5px 0.5px 3px 0px rgba(30, 30, 30, 0.25));
    }
}

.swiper-button-next {
    right: 60px;
    &:before {
        padding: 1px 11px 4px 15px;
        @include box-shadow(0.5px 0.5px 3px 0px rgba(30, 30, 30, 0.25));
    }
}

.swiper-button-prev, .swiper-button-next {
    top: 50%;
    opacity: .7;
    @include transition(all .5s ease-in-out);
    &:before {
        font-size: 30px;
        color: $white_color;
        @include border-radius(50%);
        @include background-color($black_color);
    }
    &:hover {
        color: $base_color_orange;
    }
}

.shimmer_animation {
    height: 315px;
}

.swiper-slide {
    position: relative;
    width: 100%;
    @include transition(all .5s ease-in-out);
    > {
        .backdrop {
            position: absolute;
            top: 0;
            bottom: 0;
            right: 0;
            left: 0;
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            font-family: $font_gotham;
            color: $white_color;
            @include background-color(rgba(0,0,0,0.5));
            @include transition(all .5s ease-in-out);
            > {
                .title {
                    font-size: 24px;
                    font-weight: 600;
                    line-height: 22px;
                    letter-spacing: .5px;
                    @include transition(all .5s ease-in-out);
                }
                .desc {
                    font-size: 16px;
                    line-height: 50px;
                    letter-spacing: .5px;
                    margin: 5px 0;
                    @include transition(all .5s ease-in-out);
                }
                .find {
                    color: $white_color;
                    font-size: 12px;
                    letter-spacing: .5px;
                    line-height: 15px;
                    padding: 15px 20px 6px;
                    margin-top: 10px;
                    @include border(1px solid $white_color);
                    @include border-radius(5px);
                    @include transition(all .5s ease-in-out);
                    &:hover {
                        @include border(1px solid $base_color_orange);
                        @include background-color($base_color_orange);
                    }
                }
            }
        }
        .banner_image {
            width: 100%;
        }
    }
}

@media (max-width: 1024px) {
    .banner {
        margin-top: 80px;
    }
}

@media (max-width: 500px) {
    .swiper-button-prev {
        left: 5px;
    }

    .swiper-button-next {
        right: 15px;
    }
    .swiper-slide > .backdrop > {
        .title {
            display: none;
        }
        .desc {
            display: none;
        }
        .find {
            display: none;
        }
    }
}
</style>
