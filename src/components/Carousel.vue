<template>
  <div class="cbzh-slides">

    <div class="cbzh-slide fade">
      <img src="https://cdn.discordapp.com/attachments/643738813419749386/643804179810484225/drinks-1283608_1920.jpg">
      <div class="overlay"></div>
      <div class="cbzh-slide_text"><span>Ils nous ont fait confiance</span><br />La mairie de Brest, Kate Middleton</div>
    </div>

    <div class="cbzh-slide fade">
      <img src="https://cdn.discordapp.com/attachments/643738813419749386/643807510595239947/eat-2834549_1920.jpg">
      <div class="overlay"></div>
      <div class="cbzh-slide_text"><span>Nos valeurs</span><br />Des produits sains réalisés par des artisans de talent</div>
    </div>

    <div class="cbzh-slide fade">
      <img src="https://cdn.discordapp.com/attachments/643738813419749386/643807511895605258/barley-field-1684052_1920.jpg">
      <div class="overlay"></div>
      <div class="cbzh-slide_text"><span>Des produits locaux</span><br />Nous privilégions le développement durable et les traiteurs près de chez vous</div>
    </div>
    
    <a id="cbzh-slides_0" v-on:click="currentSlide(0)">o</a>
    <a id="cbzh-slides_1" v-on:click="currentSlide(1)">o</a>
    <a id="cbzh-slides_2" v-on:click="currentSlide(2)">o</a>
  </div>
</template>

<script>
export default {
  name: 'Carousel',
  data: function() {
    return {
      slideIndex: 1
    }
  },
  methods: {
    currentSlide: function(n) {
      //event.target.style.color = "#7a7d7d";
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
    }
  },
  mounted() {
    this.cbzh_slides(this.slideIndex);
  }
}
</script>

<style scoped>
  /* SLIDES */
  .cbzh-slides {
    max-width: 100%;
    position: relative;
  }

  .cbzh-slides img {
    width: 100%;
    height: auto;
    max-height: 60vh;
  }

  .cbzh-slide {
    display: none;
  }

  #cbzh-slides_0,
  #cbzh-slides_1,
  #cbzh-slides_2 {
    cursor: pointer;
    position: absolute;
    bottom: 14px;
    color: var(--grisClair);
    font-size: 18px;
  }

  #cbzh-slides_0:hover,
  #cbzh-slides_1:hover,
  #cbzh-slides_2:hover {
    color: var(--grisFonce);
  }

  #cbzh-slides_0 {
    left: 48%;
  }
  #cbzh-slides_1 {
    left: 50%;
  }
  #cbzh-slides_2 {
    left: 52%;
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
    height: auto;
    max-height: 60vh;
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