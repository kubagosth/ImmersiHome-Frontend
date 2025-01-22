<template>
    <div class="home-detail">
        <h2>Home Details</h2>

        <div v-if="home">
            <!-- Image -->
            <img :src="home.image" alt="Home image" class="home-image" />

            <!-- Basic Details -->
            <h3>{{ home.address }}</h3>
            <p><strong>Price:</strong> {{ home.price }}</p>
            <p><strong>Deposit:</strong> {{ home.deposit }}</p>
            <p><strong>Public Valuation:</strong> {{ home.publicValuation }}</p>

            <!-- Overview -->
            <h3>Overview</h3>
            <p>{{ home.overview }}</p>

            <!-- Pricing History -->
            <h3>Price and Development</h3>
            <ul>
                <li v-for="event in home.priceHistory" :key="event.date">
                    {{ event.date }}: {{ event.event }} - {{ event.price }}
                </li>
            </ul>

            <!-- Nearby Schools -->
            <h3>Nearby Schools</h3>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Trivsel</th>
                        <th>Karaktergennemsnit</th>
                        <th>Afstand</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="school in home.nearbySchools" :key="school.name">
                        <td>{{ school.name }}</td>
                        <td>{{ school.trivsel }}</td>
                        <td>{{ school.averageGrade }}</td>
                        <td>{{ school.distance }}</td>
                    </tr>
                </tbody>
            </table>

            <!-- Additional Details -->
            <h3>Additional Details</h3>
            <p><strong>Internet Availability:</strong></p>
            <ul>
                <li v-for="connection in home.internetConnections" :key="connection.type">
                    {{ connection.type }}: {{ connection.speed }}
                </li>
            </ul>

            <!-- Contact Information -->
            <h3>Contact</h3>
            <p><strong>Agent:</strong> {{ home.agent.name }}</p>
            <p><strong>Phone:</strong> {{ home.agent.phone }}</p>
            <p><strong>Email:</strong> {{ home.agent.email }}</p>
        </div>

        <p v-else>Loading...</p>
    </div>
</template>

<script>
export default {
    name: "HomeDetail",
    props: ["id"],
    data() {
        return {
            home: null,
        };
    },
    created() {
        console.log("HomeDetail created with id:", this.id);
        this.fetchHomeDetails(this.id);
    },
    methods: {
        fetchHomeDetails(id) {
            const items = [
                {
                    id: 1,
                    image: "https://reviveyouthandfamily.org/wp-content/uploads/2016/11/house-placeholder-300x213.jpg",
                    address: "address",
                    price: "1.000.000 kr.",
                    deposit: "100.000 kr.",
                    publicValuation: "1.000.000 kr.",
                    overview: "Overview of the home",
                    priceHistory: [
                        { date: "22. januar", event: "Listed for sale", price: "100.000 kr." },
                        { date: "Nov. 2024", event: "Price drop", price: "50.000 kr." },
                    ],
                    nearbySchools: [
                        { name: "Skole 1", trivsel: "3.8", averageGrade: "6.8", distance: "1.07 km" },
                        { name: "Skole 2", trivsel: "3.7", averageGrade: "7.1", distance: "1.53 km" },
                    ],
                    internetConnections: [
                        { type: "Fiber", speed: "1000 / 1000 Mbit/s" },
                        { type: "Kabel-tv", speed: "1000 / 500 Mbit/s" },
                    ],
                    agent: {
                        name: "Name",
                        phone: "Phone",
                        email: "Email",
                    },
                },
            ];
            this.home = items.find((item) => item.id === parseInt(id, 10));
            console.log("Fetched home details:", this.home); 
        },
    },
};
</script>

<style scoped>
.home-detail {
    max-width: 800px;
    margin: 0 auto;
    padding: 1rem;
}

.home-image {
    max-width: 100%;
    height: auto;
    margin-bottom: 1rem;
}

table {
    width: 100%;
    border-collapse: collapse;
}

th,
td {
    border: 1px solid #ddd;
    padding: 0.5rem;
}

th {
    background-color: #f2f2f2;
}

tr:nth-child(even) {
    background-color: #f9f9f9;
}

tr:hover {
    background-color: #f1f1f1;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    margin-bottom: 0.5rem;
}

p {
    margin-bottom: 1rem;
}

h3 {
    margin-top: 2rem;
}

strong {
    font-weight: bold;
}

@media (max-width: 600px) {
    .home-detail {
        padding: 0.5rem;
    }
}

@media (max-width: 400px) {
    .home-detail {
        padding: 0.25rem;
    }
}

@media (max-width: 300px) {
    .home-detail {
        padding: 0.1rem;
    }
}
</style>
