<template>
  <div class="cbzh-slides">

    <div class="cbzh-slide fade">
      <img src="../assets/img/ImgCarousel/MinestroneButternut.jpg" style="height: 432px;">
      <div class="overlay"></div>
      <div class="cbzh-slide_text"><span>Minestrone et Butternut</span><br />Le Langon, Vendée</div>
    </div>

    <div class="cbzh-slide fade">
      <img src="../assets/img/ImgCarousel/1.jpg" style="height: 432px;">
      <div class="overlay"></div>
      <div class="cbzh-slide_text"><span>Aux Délices d'Ignacio</span><br />Perpignan, Pyrénées Orientales</div>
    </div>

    <div class="cbzh-slide fade">
      <img src="../assets/img/ImgCarousel/2.jpg" style="height: 432px;">
      <div class="overlay"></div>
      <div class="cbzh-slide_text"><span>Parigo Bobo Burger Traiteur</span><br />Paris, centre du Monde</div>
    </div>
    
    <a class="cbzh-slides_prev" v-on:click="plusSlides(-1)">&#10094;</a>
    <a class="cbzh-slides_next" v-on:click="plusSlides(1)">&#10095;</a>
  </div>
</template>

<script>
export default {
  name: 'CarouselForNinon',
  data: function() {
    return {
      slideIndex: 1
    }
  },
  methods: {
    plusSlides: function(n) {
      this.cbzh_slides(this.slideIndex += n);
    },
    currentSlide: function(n) {
      this.cbzh_slides(this.slideIndex = n);
    },
    cbzh_slides: function(n) {
      var i;
      var slides = document.getElementsByClassName("cbzh-slide");

      if (n > slides.length) {this.slideIndex = 1} 
      if (n < 1) {this.slideIndex = slides.length}
      for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none"; 
      }
      slides[this.slideIndex-1].style.display = "block"; 
    },
  },
  mounted() {
    this.cbzh_slides(this.slideIndex);
  }
}
</script>

<style scoped>
  /* SLIDES */
  .cbzh-slides {
    height: 432px;
    position: relative;
  }

  .cbzh-slide {
    display: none;
  }

  .cbzh-slides_prev,
  .cbzh-slides_next {
    cursor: pointer;
    position: absolute;
    top: 50%;
    width: auto;
    margin-top: -22px;
    padding: 16px;
    color: var(--grisClair);
    font-weight: bold;
    font-size: 18px;
    transition: 0.6s ease;
    border-radius: 0 3px 3px 0;
    user-select: none;
    background-color: transparent;
  }

  .cbzh-slides_next {
    right: 0;
    border-radius: 3px 0 0 3px;
  }

  .cbzh-slides_prev:hover,
  .cbzh-slides_next:hover {
    background-color: var(--grisFonce);
  }

  .cbzh-slide_text span {
    font-size: 32px;
  }

  .cbzh-slide_text {
    border-radius: 3px;
    font-family: 'meie';
    font-size: 18px;
    font-weight: bold;
    text-align: center;
    color: var(--grisClair);
    position: absolute;
    width: 70%;
    bottom: 30px;
    left: 50%;
    margin-left: -37%;
    padding: 20px;
  }

  .overlay {
    background: rgba(0, 0, 0, 0.4);
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    height: 432px;
  }

  .fade {
    -webkit-animation-name: fade;
    -webkit-animation-duration: 1.5s;
    animation-name: fade;
    animation-duration: 1.5s;
  }

  @-webkit-keyframes fade {
    from {
      opacity: 0.4;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes fade {
    from {
      opacity: 0.4;
    }
    to {
      opacity: 1;
    }
  }
</style>