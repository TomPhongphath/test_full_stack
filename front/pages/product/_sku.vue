<template>
<div>
<Navbar />
  <div class="container my-5">
    <div v-if="product">
      <div class="card shadow-lg border-light">
        <div class="row g-0">
          <div class="col-md-6">
            <img :src="product.image" class="img-fluid rounded-start" :alt="product.name">
          </div>
          <div class="col-md-6">
            <div class="card-body">
              <h1 class="card-title">{{ product.name }}</h1>
              <h4 class="text-success">Price: {{ product.price }} THB</h4>
              <p class="text-muted">{{ product.description }}</p>
              <p><strong>Size:</strong> {{ product.size }}</p>
              <p><strong>Weight:</strong> {{ product.weight }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <p>Loading product details...</p>
    </div>
  </div>
   </div>
</template>

<script>
import Navbar from '~/components/Navbar.vue'

export default {
  components: {
    Navbar
  },
  data() {
    return {
      product: null
    };
  },
  async mounted() {
    try {
      const response = await fetch(`http://localhost:3200/api/products/${this.$route.params.sku}`);
      this.product = await response.json();
    } catch (error) {
      console.error('Error fetching product details:', error);
    }
  }
};
</script>

<style scoped>
.card {
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); /* เพิ่มเงาให้กับการ์ด */
}

.card-body {
  padding: 20px;
}

.card-title {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 36px;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 20px;
  text-transform: uppercase;
  letter-spacing: 1px;
}

h4 {
  font-size: 28px;
  font-weight: 600;
  color: #28a745; /* เปลี่ยนสีราคาให้เป็นสีเขียว */
}

p {
  font-size: 16px;
  color: #555;
}

strong {
  color: #333;
}

img {
  border-radius: 15px 0 0 15px; /* ปรับมุมของรูปภาพให้โค้ง */
}
</style>
