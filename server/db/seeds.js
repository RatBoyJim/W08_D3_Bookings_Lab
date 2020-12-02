use hotel;
db dropDatabase();

db.bookings.insertMany([
    {
        name: "Michael",
        email: "ratboy@gmail.com",
        isCheckedIn: true
    },
    {
        name: "Mateusz",
        email: "mateusz@gmail.com",
        isCheckedIn: false
    }
]);