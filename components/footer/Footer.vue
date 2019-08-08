<template>
  <section class="footer">
    <div class="footer_top container">
      <div class="left">
        <div class="about">About Us</div>
        <img class="logo" src="/img/loonix-logo-white.png" alt="Logo Ioonix Studio">
        <div class="desc">
          We are one stop Marketing support services. The company start up as a Marketing Support that serve all of our client marketing needs then leverage our expertise to a Business Development & Support.
        </div>
      </div>
      <div class="right">
        <div class="contact">Contact Us</div>
        <div class="form_contact">
          <div class="form_group column_2">
            <input type="text" class="form_input" v-model="name" placeholder="Name">
          </div>
          <div class="form_group column_2">
            <input type="text" class="form_input" v-model="subject" placeholder="Subject">
          </div>
          <div class="form_group column_1">
            <input type="text" class="form_input" v-model="email" placeholder="Email">
          </div>
          <div class="form_group column_1">
            <textarea rows="3" class="form_input" placeholder="Message"></textarea>
          </div>
          <div class="form_group_container column_1">
            <a class="form_button button-primary" :href="link" target="_top">Send</a>
          </div>
        </div>
      </div>
    </div>
    <div class="footer_middle container">
      <div class="left">
        Wisma 77 Tower 2, Slipi, Palmerah, Jakarta Barat
      </div>
      <div class="center">
        +6221 29675959
      </div>
      <div class="right">
        support@ioonixstudio.com
      </div>
    </div>
    <div class="footer_bottom">Copyrights Reserved 2019 © <span>Ioonix Studio</span></div>
  </section>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      subject: null,
      name: null,
      email: null,
      link: 'mailto:support@ioonixstudio.com?Subject=Contact%20Ioonix Studio%20from%20Website'
    }
  },
  watch: {
    subject(newVal, oldVal) {
      this.link = 'mailto:support@ioonixstudio.com?Subject=' + (newVal ? newVal : 'Contact%20Ioonix Studio%20from%20Website') + (this.name && this.email ? '%20from%20' + this.name + '%20(' + this.email + ')' : '')
    },
    name(newVal, oldVal) {
      this.link = 'mailto:support@ioonixstudio.com?Subject=' + (this.subject ? this.subject : 'Contact%20Ioonix Studio%20from%20Website') + (this.email ? '%20from%20' + newVal + '%20(' + this.email + ')' : '') 
    },
    email(newVal, oldVal) {
      this.link = 'mailto:support@ioonixstudio.com?Subject=' + (this.subject ? this.subject : 'Contact%20Ioonix Studio%20from%20Website') + (this.name ? '%20from%20' + this.name  + '%20(' + newVal + ')' : '')
    }
  },
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/base.scss';
@import '../../assets/scss/mixins.scss';

.footer {
  width: 100%;
  min-width: 100%;
  @include background-color($black_color);
  > {
    .footer_top {
      display: flex;
      justify-content: space-around;
      overflow: hidden;
      color: $light_grey_color;
      padding: 50px 10px;
      @include transition(all .5s ease-in-out);
      > {
        .left {
          width: 50%;
          max-width: 230px;
          > {
            .about {
                position: relative;
                font-size: 16px;
                font-weight: 600;
                letter-spacing: .5px;
                color: $white_color;
                padding-bottom: 10px;
                margin-bottom: 20px;
                &:after {
                    position: absolute;
                    content: " ";
                    width: 65px;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    @include border-bottom(2px solid $base_color_orange);
                }
            }
            .logo {
              height: 45px;
              margin-bottom: 15px;
            }
            .desc {
              font-size: 14px;
              color: $grey_color;
            }
          }
        }
        .right {
          width: 50%;
          max-width: 400px;
          padding-left: 10px;
          > {
            .contact {
                position: relative;
                font-size: 16px;
                font-weight: 600;
                letter-spacing: .5px;
                color: $white_color;
                padding-bottom: 10px;
                margin-bottom: 20px;
                &:after {
                    position: absolute;
                    content: " ";
                    width: 65px;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    @include border-bottom(2px solid $base_color_orange);
                }
            }
            .form_contact {
              width: 100%;
              overflow: hidden;
              > {
                .form_group {
                  padding: 7px;
                  padding-left: 0;
                  > .form_input {
                    width: 100%;
                    padding: 8px 10px;
                    color: $light_grey_color;
                    @include border(1px solid $dark_grey_color);
                    @include border-radius(3px);
                    @include background-color($dark_grey_color);
                  }
                }
                .form_group_container {
                  padding: 7px;
                  text-align: right;
                  > .form_button {
                    font-weight: 600;
                    color: $black_color;
                    padding: 8px 40px;
                    letter-spacing: .5px;
                  }
                }
                .column_1 {
                  width: 100%;
                  float: left;
                }
                .column_2 {
                  width: 50%;
                  float: left;
                }
              }
            }
          }
        }
      }
    }
    .footer_middle {
      color: $light_grey_color;
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;
      padding: 30px;
      font-size: 12px;
      color: $grey_color;
      > .center {
        padding: 0 30px;
      }
    }
    .footer_bottom {
      width: 100%;
      text-align: center;
      padding: 18px 10px;
      color: $grey_color;
      font-size: 12px;
      letter-spacing: .5px;
      @include background-color($dark_black_color);
      > span {
        color: $base_color_yellow;
      }
    }
  }
}


@media (max-width: 1024px) {
  .footer > .footer_top {
    width: 750px;
  }
}

@media (max-width: 768px) {
  .footer {
    width: -webkit-fit-content; 
    width: -moz-fit-content;
    width: -ms-fit-content;
    width: -o-fit-content; 
    width: fit-content;
  }
}

@media (max-width: 500px) {
  .footer {
    width: 100%;
    > {
      .footer_top {
        width: 100%;
        flex-direction: column;
        justify-content: center;
        padding: 30px 10px;
        > {
          .left {
            width: 100%;
            max-width: 250px;
            text-align: center;
            margin: 0 auto;
            margin-bottom: 30px;
            > .about {
              &:after {
                margin: 0 auto;
              }
            }
          }
          .right {
            width: 100%;
            text-align: center;
            > {
              .contact {
                &:after {
                  margin: 0 auto;
                }
              }
              .form_contact > .form_group_container {
                text-align: center;
              }
            }
          }
        }
      }
      .footer_middle {
        flex-direction: column;
        padding: 20px 0;
        line-height: 20px;
      }
    }
  }
}
</style>
