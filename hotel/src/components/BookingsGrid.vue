<template lang="html">
	<div id="bookingsGrid">
		<booking v-for="booking in bookings" :booking="booking" />
	</div>
</template>

<script>
import { eventBus } from '@/main.js'
import Booking from './Booking';
import BookingService from '@/services/BookingService.js'

export default {
	name: 'bookings-grid',
	components: {
		'booking': Booking
	},
	data() {
        return {
            bookings: []
        };
    },
	mounted() {
    BookingService.getBookings()
    .then(bookings => this.bookings = bookings)

    eventBus.$on('booking-added', (booking) => {
      this.bookings.push(booking)
    });
    eventBus.$on('booking-deleted', (id) => {
      let index = this.bookings.findIndex(booking => booking._id === id)
      this.bookings.splice(index, 1)
    });
    eventBus.$on('checked-in', (booking) => {
        let index = this.bookings.indexOf(booking);
        this.bookings[index].isCheckedIn = true;
        BookingService.updateBooking(booking)
    })
  },
	
}
</script>

<style lang="css" scoped>
#bookingsGrid {
	display: flex;
	flex-wrap: wrap;
	justify-content: space-evenly;


