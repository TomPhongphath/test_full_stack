<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
    <div class="container-fluid">
      <!-- ใช้ Nuxt Logo ใน Navbar -->
      <div class="navbar-brand">
        <svg class="nuxt-logo" viewBox="0 0 45 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M24.7203 29.704H41.1008C41.6211 29.7041 42.1322 29.5669 42.5828 29.3061C43.0334 29.0454 43.4075 28.6704 43.6675 28.2188C43.9275 27.7672 44.0643 27.2549 44.0641 26.7335C44.0639 26.2121 43.9266 25.6999 43.6662 25.2485L32.6655 6.15312C32.4055 5.70162 32.0315 5.32667 31.581 5.06598C31.1305 4.8053 30.6195 4.66805 30.0994 4.66805C29.5792 4.66805 29.0682 4.8053 28.6177 5.06598C28.1672 5.32667 27.7932 5.70162 27.5332 6.15312L24.7203 11.039L19.2208 1.48485C18.9606 1.03338 18.5864 0.658493 18.1358 0.397853C17.6852 0.137213 17.1741 0 16.6538 0C16.1336 0 15.6225 0.137213 15.1719 0.397853C14.7213 0.658493 14.3471 1.03338 14.0868 1.48485L0.397874 25.2485C0.137452 25.6999 0.000226653 26.2121 2.8053e-07 26.7335C-0.000226092 27.2549 0.136554 27.7672 0.396584 28.2188C0.656614 28.6704 1.03072 29.0454 1.48129 29.3061C1.93185 29.5669 2.44298 29.7041 2.96326 29.704H13.2456C17.3195 29.704 20.3239 27.9106 22.3912 24.4118L27.4102 15.7008L30.0986 11.039L38.1667 25.0422H27.4102L24.7203 29.704ZM13.0779 25.0374L5.9022 25.0358L16.6586 6.36589L22.0257 15.7008L18.4322 21.9401C17.0593 24.2103 15.4996 25.0374 13.0779 25.0374Z" fill="#00DC82" />
        </svg>
      </div>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <nuxt-link class="nav-link active" aria-current="page" to="/">Home</nuxt-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="https://tomphongphath.github.io/Profile/" target="_blank" rel="noopener noreferrer">About Me</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
};
</script>

<style scoped>
.nuxt-logo {
  height: 50px; /* ขนาดของโลโก้ */
}

/* ปรับแต่ง navbar */
.navbar {
  padding: 1rem 2rem; /* เพิ่ม padding ให้ดูสวยงาม */
}

.navbar-dark .navbar-nav .nav-link {
  color: #ffffff; /* สีลิงก์ใน navbar */
  font-weight: 500;
  text-transform: uppercase; /* ทำให้ตัวหนังสือเป็นตัวพิมพ์ใหญ่ */
}

.navbar-dark .navbar-nav .nav-link:hover {
  color: #00DC82; /* เปลี่ยนสีเมื่อ hover */
}

/* ปรับสี navbar */
.navbar-light {
  background-color: #34495e; /* เปลี่ยนสีพื้นหลัง navbar */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* เพิ่มเงาให้ navbar */
}

/* ปรับขนาดของ navbar-toggler */
.navbar-toggler-icon {
  background-color: #ffffff; /* เปลี่ยนสีของ hamburger icon */
}

/* การตอบสนองบนมือถือ */
@media (max-width: 992px) {
  .navbar-nav {
    text-align: center; /* จัดตำแหน่งลิงก์ให้กลางในมือถือ */
  }
}
</style>
