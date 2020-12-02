<template>
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
        }
    }

}
</script>

<style>

</style>