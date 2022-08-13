class ParkingLot {
  constructor(numberOfSlots) {
    this.solts = new Array(numberOfSlots).fill(1).map((_, id) => id + 1).reduce((res, id) => {
      return {
        ...res,
        [id]: {
          id,
          occupied: false,
          carId: null
        }
      }
    }, {});
  }

  park(carId) {
    const fistUnoccupied = this.getAllSlots().find(v => v.occupied === false)
    if (fistUnoccupied) {
      this.solts[fistUnoccupied.id] = {
        ...this.solts[fistUnoccupied.id],
        occupied: true,
        carId
      }
      return true
    }

    return false
  }

  getAllSlots() {
    const slots = Object.values(this.solts)
    return slots.length > 0 ? slots : null;
  }

  getSlots() {
    const slots = Object.values(this.solts)
    return slots.length > 0 ? slots.map(v => v.occupied ? v.carId : null) : null;
  }

  remove(carId) {
    const slot = this.getAllSlots().find(v => v.carId === carId)

    if (!carId || !slot) {
      return false;
    }


    this.solts[slot.id] = {
      ...this.solts[slot.id],
      occupied: false,
      carId: null
    }

    return true
  }
}

const parkingLot = new ParkingLot(5);
parkingLot.park("CAR-10")
parkingLot.park("CAR-20")
parkingLot.park("CAR-30")
console.log(parkingLot.getSlots())
parkingLot.remove("CAR-20")
console.log(parkingLot.getSlots())
