<template>
  <div class="card mb-3 w-100 position-relative">
    <button
      type="button"
      class="position-absolute top-0 start-100 translate-middle badge btn btn-danger"
      onclick="removeFromCart(${position})"
    >
      X
    </button>
    <div class="row g-0">
      <div class="col-md-4">
        <img :src="product.img" class="img-fluid rounded-start" alt="..." />
      </div>
      <div class="col-md-8">
        <div class="card-body d-flex flex-column container">
          <h5 class="card-title mb-3">{{ product.title }}</h5>
          <div class="d-flex mb-3 justify-content-between">
            <p class="card-text">Individual price:</p>
            <span>R{{ product.price }}</span>
          </div>
          <div class="d-flex mb-3 justify-content-between">
            <label class="form-label">Quantity:</label>
            <input
              type="number"
              min="1"
              id="remove${position}"
              value="product.qty"
              :onchange="updateCart({ position })"
            />
          </div>
          <div
            class="card-footer bg-white d-flex justify-content-between p-0 pt-3"
          >
            <p>Total Cost:</p>
            <!-- <span
              >R{( parseFloat(product.price) * parseInt(product.qty)
              ).toFixed(2)}</span
            > -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script></script>
