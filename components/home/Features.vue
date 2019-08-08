<template>
    <section id="features" class="features">
        <div class="features_container container">
            <div class="title">We are Specialists in</div>
            <div v-swiper:mySwiper="swiperOption">
                <div class="swiper-wrapper">
                    <div class="swiper-slide item">
                        <img class="image" src="/img/stick.png" alt="Digital Marketing">
                        <div class="name">Digital Marketing</div>
                        <div class="desc">We are excited to launch our new company and product. After being featured in too many</div>
                    </div>
                    <div class="swiper-slide item">
                        <img class="image" src="/img/computer.png" alt="Website & Mobile Development">
                        <div class="name">Website & Mobile Development</div>
                        <div class="desc">We are excited to launch our new company and product. After being featured in too many</div>
                    </div>
                    <div class="swiper-slide item">
                        <img class="image" src="/img/video.png" alt="Video Profile">
                        <div class="name">Video Profile</div>
                        <div class="desc">We are excited to launch our new company and product. After being featured in too many</div>
                    </div>
                    <div class="swiper-slide item">
                        <img class="image" src="/img/pen.png" alt="Creative Design">
                        <div class="name">Creative Design</div>
                        <div class="desc">We are excited to launch our new company and product. After being featured in too many</div>
                    </div>
                </div>
                <div class="swiper-button-prev" slot="button-prev"></div>
                <div class="swiper-button-next" slot="button-next"></div>
            </div>
        </div>
    </section>
</template>

<script>
import '~/plugins/swiper.js'
import axios from 'axios'

export default {
  name: 'Features',
  data() {
      return {
        swiperOption: {
            slidesPerView: 4,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            },
            breakpoints: {
                500: {
                    slidesPerView: 1
                }
            }
        }
      }
  },
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/base.scss';
@import '../../assets/scss/mixins.scss';

.features {
    width: 100%;
    overflow: hidden;
    @include background-color($base_color);
    > .features_container {
        padding: 50px 0;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        > {
            .section_title {
                position: relative;
                font-size: 20px;
                font-weight: 600;
                letter-spacing: .5px;
                color: $white_color;
                padding-bottom: 10px;
                &:after {
                    position: absolute;
                    content: " ";
                    width: 60px;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    margin: 0 auto;
                    @include border-bottom(2px solid $base_color_orange);
                }
            }
            .title {
                font-family: $font_arial;
                padding: 10px 0;
                padding-bottom: 40px;
                font-size: 22px;
                font-weight: 600;
                color: $white_color
            }
        }
    }
}

.item {
    padding: 0 30px;
    text-align: center;
    color: $white_color;
    > {
        .image {
            width: 60px;
        }
        .name {
            font-size: 14px;
            font-weight: 600;
            padding: 10px 0;
        }
        .desc {
            font-size: 12px;
        }
    }
}

.swiper-button-prev {
    left: 30px;
    &:before {
        padding: 1px 13px 4px 13px;
        @include box-shadow(0.5px 0.5px 3px 0px rgba(30, 30, 30, 0.25));
    }
}

.swiper-button-next {
    right: 40px;
    &:before {
        padding: 1px 11px 4px 15px;
        @include box-shadow(0.5px 0.5px 3px 0px rgba(30, 30, 30, 0.25));
    }
}

.swiper-button-prev, .swiper-button-next {
    display: none;
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

@media (max-width: 500px) {
    .features > .features_container {
        display: block;
        text-align: center;
        justify-content: unset;
        align-items: unset;
        padding: 40px 10px;
    }
    .item {
        margin-bottom: 20px;
    }
    .swiper-button-prev, .swiper-button-next {
        display: block;
    }
}
</style>
