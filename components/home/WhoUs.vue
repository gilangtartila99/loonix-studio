<template>
    <section id="about" class="container">
        <div class="whous">
            <div class="whous_container">
                <div class="section_title">Who we are</div>
                <div class="title">We have a creative team that we are proud of in fields</div>
                <div class="desc">We believe every brand have their own unique story to tell</div>
                <p class="content">Ioonix Studio is a one stop Marketing support services. The company start up as a Marketing Support that serve all of our client marketing needs then leverage our expertise to a Business Development & Support.</p>
                <p class="content">Ioonix Studio has a young, creative, professional and innovative team who's passionate to bring the best of our client business. We deliver our client brand by leveraging digital & technology and thru a stories & channel where their customers can relate with the brand personally.</p>
                <div id="whyus" class="image">
                    <img src="/img/whous.png" alt="Who Us">
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import axios from 'axios'

export default {
  name: 'WhoUs'
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/base.scss';
@import '../../assets/scss/mixins.scss';

.whous {
    width: 100%;
    padding: 50px 10px;
    overflow: hidden;
    > .whous_container {
        width: 100%;
        text-align: center;
        > {
            .section_title {
                position: relative;
                font-size: 20px;
                font-weight: 600;
                letter-spacing: .5px;
                color: $black_color;
                padding-bottom: 5px;
                margin-bottom: 10px;
                &:after {
                    position: absolute;
                    content: " ";
                    width: 60px;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    margin: 0 auto;
                    @include border-bottom(2px solid $base_color);
                }
            }
            .title {
                font-family: $font_arial;
                padding: 10px 0 5px;
                font-size: 18px;
                font-weight: 600;
            }
            .desc {
                font-size: 16px;
                font-weight: 600;
            }
            .content {
                font-size: 14px;
                color: $grey_color;
            }
            .more {
                padding-right: 20px;
                padding-left: 20px;
            }
            .image {
                width: 100%;
                padding-top: 30px;
                > img {
                    width: 100%;
                    max-width: 500px;
                }
            }
        }
    }
}

@media (max-width: 500px) {
    .whous {
        padding: 20px 10px;
    }
}
</style>
