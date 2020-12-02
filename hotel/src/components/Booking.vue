<template>
    <div class="booking">
        <h2> {{booking.name}} </h2>
        <h3> {{booking.email}} </h3>
        <h3 v-if="booking.isCheckedIn">Checked In</h3>
        <h3 v-if="!booking.isCheckedIn">Not Checked In</h3>
        <button type="button" v-if="!booking.isCheckedIn" v-on:click="checkIn">Check In</button>
        <button type="button" v-on:click="deleteBooking">Delete Booking</button>
        
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
        }
    }
}
</script>

<style>

</style>