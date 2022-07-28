<template>
  <button class="btn">get started</button>
</template>

<script>
export default {
  name: "MyButton",
};
</script>

<style lang="scss" scoped>
.btn {
  display: block;
  margin: 0 auto;
  position: relative;
  max-width: 200px;
  z-index: 1;
  font-family: "Londrina Solid", cursive;
  font-size: 30px;
  padding: 10px 20px;
  margin-bottom: 100px;
  transition: all 0.6s ease;
  color: white;
}

.btn::after,
.btn::before {
  content: "";
  display: block;
  position: absolute;
  width: 20%;
  height: 20%;
  border: 2px solid;
  transition: all 0.6s ease;
  border-radius: 2px;
}

.btn::after {
  bottom: 0;
  right: 0;
  border-top-color: transparent;
  border-left-color: transparent;
  border-bottom-color: #fff;
  border-right-color: #fff;
}

.btn::before {
  top: 0;
  left: 0;
  border-bottom-color: transparent;
  border-right-color: transparent;
  border-top-color: #fff;
  border-left-color: #fff;
}

.btn:hover:after,
.btn:hover:before {
  width: 100%;
  height: 100%;
}
</style>
