<template>
    <div class="form-container">
        <form id="bookings-form" v-on:submit="addBooking" method="post">
            <h2>Add a Booking</h2>
            <div class="formWrap">
                <label for="name">Name:</label>
                <input type="text" id="name" v-model="name" required/>
            </div>
            <div class="formWrap">
                <label for="email">Email:</label>
                <input type="text" id="email" v-model="email" required/>
            </div>
                <input type="submit" value="Save" id="save" />
        </form>
        <br>    
        <br>
    </div>
</template>

<script>

import { eventBus } from '@/main.js'
import BookingService from '@/services/BookingService';

export default {
    name: 'bookings-form',
    data() {
        return {
            name: '',
            email: '',
            isCheckedIn: false
        }
    },
    methods: {
        addBooking(e){
            e.preventDefault()
            const booking = {
                name: this.name,
                email: this.email,
                isCheckedIn: false
            }
            BookingService.postBooking(booking)
            .then(res => eventBus.$emit('booking-added', res))
            event.target.reset();
        }
    }

}
</script>

<style>

.form-container {
    border: solid 15px purple;
    border-radius: 10px;
    margin-bottom: 10px;
}

h2 {
	margin: 10px 0;
	padding: 0;
}

form {
	width: 75%;
	margin: 0 auto;
	background: rgba(255, 255, 255, 0.7);
	padding: 20px;
	margin-bottom: 40px;
}

label {
	min-width: 100px;
	display: inline-block;
}

.formWrap {
	margin-bottom: 10px;
}
</style>