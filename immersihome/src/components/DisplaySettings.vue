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
                List View
            </label>
        </div>

        <div class="view-container">
            <div id="map-view" v-show="currentView === 'map'">
                <OpenMap />
            </div>

            <div id="list-view" v-show="currentView === 'list'">
                <p>List View Content</p>
                <ul class="item">
                    <li>Item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                </ul>
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
        };
    },
    methods: {
        toggleView() {
            console.log(`View changed to: ${this.currentView}`);
        }
    }
};
</script>
