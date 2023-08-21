<template>
    <nav>
        <ul class="menu">
            <router-link to="/" class="item-menu">
                <li>
                    <h2>Home</h2>
                    <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/228BE6/home.png" alt="home" />
                </li>
            </router-link>

            <router-link to="/cadastro/novo" class="item-menu">
                <li>
                    <h2>Cadastro</h2>
                    <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/228BE6/folder-invoices--v2.png"
                        alt="Cadastro" />
                </li>
            </router-link>

            <router-link to="/sobre" class="item-menu">
                <li>
                    <h2>Sobre</h2>
                    <img width="64" height="64"
                        src="https://img.icons8.com/external-kiranshastry-solid-kiranshastry/64/228BE6/external-map-camping-kiranshastry-solid-kiranshastry-1.png"
                        alt="Sobre" />
                </li>
            </router-link>
        </ul>
    </nav>
</template>

<script>
export default {

}
</script>

<style scoped>
.menu {
    display: flex;
    justify-content: center;
    list-style: none;
    gap: 10px;
    margin-bottom: 20px;

}

.item-menu {
    display: flex;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 5px;
    width: 180px;
    text-decoration: none;
    justify-content: space-between;
}

.item-menu li {
    display: flex;
    align-items: center;
    gap: 10px;
    width: 180px;
    justify-content: space-between;

}</style>