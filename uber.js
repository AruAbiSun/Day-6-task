class UberPriceCalculator {
  constructor(distance, time, surgeMultiplier) {
    this.baseFare = 25; // Base fare in rupees
    this.perMileRate = 20; // Per mile rate in rupees
    this.perMinuteRate = 2; // Per minute rate in rupees
    this.surgeMultiplier = surgeMultiplier; // Surge pricing multiplier
    this.distance = distance; // Distance in miles
    this.time = time; // Time in minutes
  }

  calculatePrice() {
    // Calculate the price using the provided rates and parameters
    const priceBeforeSurge =
      this.baseFare +
      this.distance * this.perMileRate +
      this.time * this.perMinuteRate;

    // Apply surge pricing
    const finalPrice = priceBeforeSurge * this.surgeMultiplier;

    return finalPrice;
  }
}

const uberCalculator = new UberPriceCalculator(2, 45, 2);
const totalPrice = uberCalculator.calculatePrice();

console.log(`The estimated Uber price is ${totalPrice} rupees`);
