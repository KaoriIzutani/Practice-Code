/*We're creating a restaurant seat tracker. Suppose a party of 5 comes in and wants 
to book a table. We want to see if there are 5 available seats*/

/* Method: An object property, where the object property's value is a function (not 
a bool or string data type). Below is an example of a method.*/

 let restaurant = {
    name: "Shari's",
    guestCapacity: 75,
    guestCount: 0,
    checkAvailability: function (partySize) {
        let seatsLeft = this.guestCapacity - this.guestCount
       return partySize <= seatsLeft
      },    // Make sure to enter commas between each method you create.
      seatParty: function (partySize) {
          this.guestCount = this.guestCount + partySize
      },
      removeParty: function (partySize) {
          this.guestCount = this.guestCount - partySize
          
      }
 
 }
 

/* let status = restaurant.checkAvailability(4) /*This calls the checkAvailability method to see 
if you can seat 4 people.*/
//console.log(status) 

/*Believe it or not, "console.log" that you used to
        print the screen is a kind of method.*/
    

/*Challenge time!: Create the following methods: seatParty (takes party size to 
be seated and adds that to guestCount) and removeParty (takes the party size that's 
leaving and removing it from guestCount). The results for both 
console.logs should result in "false" and "true" respectively.*/


   
restaurant.seatParty(72)
console.log(restaurant.checkAvailability(4))
restaurant.removeParty(5)
console.log(restaurant.checkAvailability(4))
