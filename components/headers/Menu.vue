<template>
  <div :class="type == 1 ? 'header_button' : (open ? 'header_button open' : 'header_button close')">
    <a href="/" title="Home" rel="noopener" class="header_item">Home</a>
    <a href="/#about" title="About" rel="noopener" class="header_item">About</a>
    <a href="/#whyus" title="Why Us" rel="noopener" class="header_item">Why Us</a>
    <a href="/#features" title="Products" rel="noopener" class="header_item">Products</a>
    <a href="/#services" title="Our Works" rel="noopener" class="header_item">Our Works</a>
    <a href="/#contact" title="Contact Us" rel="noopener" class="header_item">Contact Us</a>
  </div>
</template>

<script>
export default {
  name: "Menu",
  props: ["open", "type"]
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/base.scss";
@import "../../assets/scss/mixins.scss";

.open {
  max-height: 500px;
  padding-top: 20px;
  overflow: hidden;
  opacity: 1;
  -webkit-transition: all 0.5s, overflow 0.5s 0.5s;
  -moz-transition: all 0.5s, overflow 0.5s 0.5s;
  -ms-transition: all 0.5s, overflow 0.5s 0.5s;
  -o-transition: all 0.5s, overflow 0.5s 0.5s;
  transition: all 0.5s, overflow 0.5s 0.5s;
}

.close {
  max-height: 0;
  overflow: hidden;
  opacity: 0;
  -webkit-transition: all 0.5s, overflow 0s;
  -moz-transition: all 0.5s, overflow 0s;
  -ms-transition: all 0.5s, overflow 0s;
  -o-transition: all 0.5s, overflow 0s;
  transition: all 0.5s, overflow 0s;
}

.header_button {
    width: 100%;
    > .header_item {
        font-family: $font_gotham;
        color: $white_color;
        text-transform: uppercase;
        font-size: 12px;
        letter-spacing: 1px;
        padding: 10px 15px;
        display: inline-block;
        &:first-child {
            padding-left: 0;
        }
        &:last-child {
            padding-right: 0;
        }
    }
}

@media (max-width: 1024px) {
    .header_button > .header_item {
        font-size: 10px;
    }
}

@media (max-width: 500px) {
    .header_button {
        display: flex;
        flex-direction: column;
        padding-right: 10px;
        > .header_item {
            font-size: 10px;
            padding: 15px 0;
        }
    }
}
</style>