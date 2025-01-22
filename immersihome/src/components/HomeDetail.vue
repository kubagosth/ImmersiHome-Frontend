<template>
    <div class="home-detail">
        <h2>Home Details</h2>
        <img :src="home?.image" alt="Home image" class="home-image" v-if="home" />
        <p v-if="home"><strong>Address:</strong> {{ home.address }}</p>
        <p v-if="home"><strong>Price:</strong> {{ home.price }}</p>
        <p v-else>Loading...</p>
    </div>
</template>

<script>
export default {
    name: 'HomeDetail',
    props: ['id'], // Accept the `id` as a prop
    data() {
        return {
            home: null, // Placeholder for home details
        };
    },
    created() {
        console.log('HomeDetail created with id:', this.id); // Debugging output
        this.fetchHomeDetails(this.id);
    },
    methods: {
        fetchHomeDetails(id) {
            const items = [
                { id: 1, image: 'https://example.com/image1.jpg', address: 'Address 1', price: '200,000 kr' },
                { id: 2, image: 'https://example.com/image2.jpg', address: 'Address 2', price: '300,000 kr' },
                { id: 3, image: 'https://example.com/image3.jpg', address: 'Address 3', price: '400,000 kr' },
            ];
            this.home = items.find((item) => item.id === parseInt(id, 10));
            console.log('Fetched home details:', this.home); // Debugging output
        },
    },
};
</script>

<style scoped>
.home-detail {
    padding: 20px;
    font-family: Arial, sans-serif;
}

.home-image {
    width: 100%;
    max-width: 500px;
    height: auto;
    border-radius: 8px;
    margin-bottom: 20px;
}
</style>
