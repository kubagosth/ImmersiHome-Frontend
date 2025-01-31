<template>
    <div class="display-settings">
        <h3>Display Settings</h3>
        <div class="view-toggle">
            <label>
                <input type="radio" name="view" value="map" v-model="currentView" />
                Map View
            </label>
            <label>
                <input type="radio" name="view" value="list" v-model="currentView" />
                Grid View
            </label>
        </div>

        <div class="view-container">
            <div id="map-view" v-show="currentView === 'map'">
                <OpenMap />
            </div>

            <div id="grid-view" v-show="currentView === 'list'">
                <div class="grid-container">
                    <div v-for="(item, index) in items" :key="index" class="grid-item" @click="viewDetails(item)">
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
            //TODO: Replace with actual data from API
            items: [
                {
                    id: 1,
                    image: 'https://reviveyouthandfamily.org/wp-content/uploads/2016/11/house-placeholder-300x213.jpg',
                    address: 'Address placeholder',
                    price: '200,000 kr',
                },
                {
                    id: 2,
                    image: 'https://reviveyouthandfamily.org/wp-content/uploads/2016/11/house-placeholder-300x213.jpg',
                    address: 'Address placeholder',
                    price: '300,000 kr',
                },
                {
                    id: 3,
                    image: 'https://reviveyouthandfamily.org/wp-content/uploads/2016/11/house-placeholder-300x213.jpg',
                    address: 'Address placeholder',
                    price: '400,000 kr',
                },
                {
                    id: 4,
                    image: 'https://reviveyouthandfamily.org/wp-content/uploads/2016/11/house-placeholder-300x213.jpg',
                    address: 'Address placeholder',
                    price: '500,000 kr',
                },
                {
                    id: 5,
                    image: 'https://reviveyouthandfamily.org/wp-content/uploads/2016/11/house-placeholder-300x213.jpg',
                    address: 'Address placeholder',
                    price: '600,000 kr',
                },
                {
                    id: 6,
                    image: 'https://reviveyouthandfamily.org/wp-content/uploads/2016/11/house-placeholder-300x213.jpg',
                    address: 'Address placeholder',
                    price: '700,000 kr',
                },
                {
                    id: 7,
                    image: 'https://reviveyouthandfamily.org/wp-content/uploads/2016/11/house-placeholder-300x213.jpg',
                    address: 'Address placeholder',
                    price: '800,000 kr',
                },
                {
                    id: 8,
                    image: 'https://reviveyouthandfamily.org/wp-content/uploads/2016/11/house-placeholder-300x213.jpg',
                    address: 'Address placeholder',
                    price: '900,000 kr',
                },
            ],
        };
    },
    methods: {
        viewDetails(item) {
            if (!item || !item.id) {
                console.error('Invalid item:', item);
                return;
            }
            console.log('Navigating to HomeDetail with id:', item.id);
            this.$router.push({ name: 'HomeDetail', params: { id: item.id } });
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
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 20px;
    padding: 20px;
    justify-content: center;
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
