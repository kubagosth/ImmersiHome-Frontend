<template>
    <div class="display-settings">
        <h3>Display Settings</h3>
        <div class="view-toggle">
            <label>
                <input type="radio" name="view" value="map" v-model="currentView" @change="toggleView" />
                Map View
            </label>
            <label>
                <input type="radio" name="view" value="list" v-model="currentView" @change="toggleView" />
                Grid View
            </label>
        </div>

        <div class="view-container">
            <!-- Map View -->
            <div id="map-view" v-show="currentView === 'map'">
                <OpenMap />
            </div>

            <!-- Grid View -->
            <div id="grid-view" v-show="currentView === 'list'">
                <div class="grid-container">
                    <div v-for="(item, index) in items" :key="index" class="grid-item">
                        <img :src="item.image" alt="Item image" class="item-image" />
                        <div class="item-details">
                            <p class="item-address">{{ item.address }}</p>
                            <p class="item-price">{{ item.price }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import OpenMap from './OpenMap.vue';

export default {
    name: 'App',
    components: {
        OpenMap
    },
    data() {
        return {
            currentView: 'map',
            items: [
                {
                    image: 'https://reviveyouthandfamily.org/wp-content/uploads/2016/11/house-placeholder-300x213.jpg',
                    address: 'Address placeholder',
                    price: '200,000 kr',
                },
                {
                    image: 'https://reviveyouthandfamily.org/wp-content/uploads/2016/11/house-placeholder-300x213.jpg',
                    address: 'Address placeholder',
                    price: '300,000 kr',
                },
                {
                    image: 'https://reviveyouthandfamily.org/wp-content/uploads/2016/11/house-placeholder-300x213.jpg',
                    address: 'Address placeholder',
                    price: '400,000 kr',
                },
                {
                    image: 'https://reviveyouthandfamily.org/wp-content/uploads/2016/11/house-placeholder-300x213.jpg',
                    address: 'Address placeholder',
                    price: '500,000 kr',
                },
                {
                    image: 'https://reviveyouthandfamily.org/wp-content/uploads/2016/11/house-placeholder-300x213.jpg',
                    address: 'Address placeholder',
                    price: '600,000 kr',
                },
                {
                    image: 'https://reviveyouthandfamily.org/wp-content/uploads/2016/11/house-placeholder-300x213.jpg',
                    address: 'Address placeholder',
                    price: '700,000 kr',
                },
                {
                    image: 'https://reviveyouthandfamily.org/wp-content/uploads/2016/11/house-placeholder-300x213.jpg',
                    address: 'Address placeholder',
                    price: '800,000 kr',
                },
                {
                    image: 'https://reviveyouthandfamily.org/wp-content/uploads/2016/11/house-placeholder-300x213.jpg',
                    address: 'Address placeholder',
                    price: '900,000 kr',
                },
            ],
        };
    },
    methods: {
        toggleView() {
            console.log(`View changed to: ${this.currentView}`);
        }
    }
};
</script>

<style scoped>
.display-settings {
    font-family: Arial, sans-serif;
}

.view-toggle label {
    margin-right: 10px;
}

.view-container {
    margin-top: 20px;
}

.grid-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 20px;
    padding: 20px;
}

.grid-item {
    border: 1px solid #ccc;
    border-radius: 8px;
    overflow: hidden;
    text-align: center;
    background-color: #f9f9f9;
}

.item-image {
    width: 100%;
    height: 150px;
    object-fit: cover;
}

.item-details {
    padding: 10px;
}

.item-address {
    font-weight: bold;
    margin-bottom: 5px;
}

.item-price {
    color: green;
    margin-top: 0;
}
</style>
