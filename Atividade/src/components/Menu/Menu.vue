<template>
  <nav>
    <ul class="menu">
      <router-link to="/" class="item-menu">
        <li>
          <h2>Home</h2>
          <img
            width="40"
            height="40"
            src="https://img.icons8.com/ios-filled/50/1A1A1A/cottage--v1.png"
            alt="cottage--v1"
          />
        </li>
      </router-link>

      <router-link to="/talentos/novo" class="item-menu">
        <li>
          <h2>Talentos</h2>
          <img
            width="40"
            height="40"
            src="https://img.icons8.com/ios-filled/50/folder-invoices--v2.png"
            alt="folder-invoices--v2"
          />
        </li>
      </router-link>

      <router-link to="/sobre" class="item-menu">
        <li>
          <h2>Sobre</h2>
          <img
            width="40"
            height="40"
            src="https://img.icons8.com/ios-filled/50/map-marker--v1.png"
            alt="map-marker--v1"
          />
        </li>
      </router-link>
    </ul>
  </nav>
</template>

<script>
export default {}
</script>

<style>
.menu {
  display: flex;
  justify-content: space-between;
  list-style: none;
}
.item-menu {
  display: flex;
  border: 1px solid black;
  padding: 10px;
  width: 33%;
}
.item-menu li {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  width: 33%;
}
</style>
