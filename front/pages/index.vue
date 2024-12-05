<template>
  <div>
    <Navbar />
    <div class="container">
      <!-- Basic Products Section -->
      <section class="product-section mb-4">
        <h2>Basic Products</h2>
        <div class="product-slider">
          <button @click="scrollLeft('basic')" class="slider-button left">❮</button>
          <div class="product-row" ref="basicRow">
            <div v-for="product in basicProducts" :key="product.sku" class="product-item">
              <div class="card shadow-lg">
                <img :src="product.image" class="card-img-top product-img" :alt="product.name">
                <div class="card-body">
                  <h5 class="card-title product-title">{{ product.name }}</h5>
                  <p class="card-text product-price">{{ product.price }} THB</p>
                  <nuxt-link :to="`/product/${product.sku}`" class="btn btn-outline-dark btn-sm">View Details</nuxt-link>
                </div>
              </div>
            </div>
          </div>
          <button @click="scrollRight('basic')" class="slider-button right">❯</button>
        </div>
      </section>

      <!-- Premium Products Section -->
      <section class="product-section mb-4">
        <h2>Premium Products</h2>
        <div class="product-slider">
          <button @click="scrollLeft('premium')" class="slider-button left">❮</button>
          <div class="product-row" ref="premiumRow">
            <div v-for="product in premiumProducts" :key="product.sku" class="product-item">
              <div class="card shadow-lg">
                <img :src="product.image" class="card-img-top product-img" :alt="product.name">
                <div class="card-body">
                  <h5 class="card-title product-title">{{ product.name }}</h5>
                  <p class="card-text product-price">{{ product.price }} THB</p>
                  <nuxt-link :to="`/product/${product.sku}`" class="btn btn-outline-dark btn-sm">View Details</nuxt-link>
                </div>
              </div>
            </div>
          </div>
          <button @click="scrollRight('premium')" class="slider-button right">❯</button>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import Navbar from '~/components/Navbar.vue';

export default {
  components: {
    Navbar
  },
  data() {
    return {
      products: []
    };
  },
  computed: {
    basicProducts() {
      return this.products.filter(product => product.sku.startsWith('PD-BS'));
    },
    premiumProducts() {
      return this.products.filter(product => product.sku.startsWith('PD-PR'));
    }
  },
  methods: {
    scrollLeft(rowType) {
      const row = this.$refs[`${rowType}Row`];
      if (row.scrollLeft === 0) {
        this.shakeElement(row);
      } else {
        row.scrollBy({ left: -300, behavior: 'smooth' });
      }
    },
    scrollRight(rowType) {
      const row = this.$refs[`${rowType}Row`];
      const maxScroll = row.scrollWidth - row.clientWidth;
      if (row.scrollLeft >= maxScroll) {
        this.shakeElement(row);
      } else {
        row.scrollBy({ left: 300, behavior: 'smooth' });
      }
    },
    shakeElement(element) {
      element.classList.add('shake');
      setTimeout(() => {
        element.classList.remove('shake');
      }, 500);
    }
  },
  async mounted() {
    try {
      const response = await fetch('http://localhost:3200/api/products');
      this.products = await response.json();
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  }
};
</script>

<style scoped>
.container {
  background-color: #f8f9fa;
  padding: 40px 20px;
}

h2 {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 36px;
  font-weight: 600;
  color: #00DC82;
  margin-bottom: 20px;
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 2px;
}

.product-slider {
  position: relative;
  display: flex;
  align-items: center;
}

.product-row {
  display: flex;
  overflow-x: hidden;
  scroll-behavior: smooth;
  gap: 20px;
  padding: 20px 0;
  white-space: nowrap;
}

.slider-button {
  position: absolute;
  background-color: #00DC82;
  color: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  cursor: pointer;
  z-index: 10;
  font-size: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.slider-button.left {
  left: -20px;
}

.slider-button.right {
  right: -20px;
}

.slider-button:hover {
  background-color: #008f5d;
}

/* เพิ่มเอฟเฟกต์สั่น */
.shake {
  animation: shake 0.5s ease;
}

@keyframes shake {
  0%, 100% { transform: translateX(0); }
  10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
  20%, 40%, 60%, 80% { transform: translateX(5px); }
}

.product-item {
  flex: 0 0 auto;
  width: 250px;
}

.card {
  border: none;
  border-radius: 12px;
  overflow: hidden;
  background-color: #fff;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
}

.product-img {
  width: 100%;
  height: 180px;
  object-fit: cover;
}

.product-title {
  font-size: 20px;
  font-weight: 600;
  color: #333;
  margin: 10px 0;
}

.product-price {
  font-size: 18px;
  color: #27ae60;
  font-weight: 600;
  margin-bottom: 15px;
}

.btn-outline-dark {
  border-color: #2c3e50;
  color: #2c3e50;
  border-radius: 20px;
  padding: 8px 20px;
  font-weight: 500;
}

.btn-outline-dark:hover {
  background-color: #2c3e50;
  color: #fff;
}
</style>
