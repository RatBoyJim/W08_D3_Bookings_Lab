<template>
    <div class="booking">
        <h2> {{booking.name}} </h2>
        <h3> {{booking.email}} </h3>
        <h3 v-if="booking.isCheckedIn">Checked In</h3>
        <h3 v-if="!booking.isCheckedIn">Not Checked In</h3>
        <button type="button" v-if="!booking.isCheckedIn" v-on:click="checkIn">Check In</button>
        <button type="button" class="delete-button" v-if="!booking.isCheckedIn" v-on:click="deleteBooking">Delete Booking</button>
        <button type="button" v-if="booking.isCheckedIn" v-on:click="checkOut">Check Out</button>
        
    </div>
</template>

<script>
import { eventBus} from '@/main.js';
import BookingService from '@/services/BookingService.js'


export default {
    name: 'booking',
    props: ['booking'],

    methods: {
        deleteBooking(){
            BookingService.deleteBooking(this.booking._id)
            .then(() => eventBus.$emit('booking-deleted', this.booking._id))
        },
        checkIn(){
            eventBus.$emit('checked-in', this.booking)
        },
        checkOut(){
            eventBus.$emit('checked-out', this.booking)
        }
    }
}
</script>

<style>
.booking {
	width: 30%;
	background: rgba(255, 255, 255, 0.7);
	margin-bottom: 20px;
    margin-right: 5px;
	padding: 25px;
    border: solid 5px purple;
    border-radius: 10px;
    max-width: 300px;
}

button {
	color: #fff;
	border: 1px solid rgb(54, 116, 54);
	font-size: 18px;
	padding: 10px;
	margin-top: 10px;
    margin-right: 10px;
	background: rgb(54, 116, 54);
}

button:hover {
	color: rgb(54, 116, 54);
	border: 1px solid rgb(54, 116, 54);
	font-size: 18px;
	padding: 10px;
	margin-top: 10px;
    margin-right: 10px;
	background: white;
}

.delete-button {
    border: 1px solid red;
    background: red;
}

.delete-button:hover {
    background: white;
    color: red;
    border: 1px solid red;
}
</style>