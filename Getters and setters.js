class Event {
  constructor(name, startTime, endTime, location) {
    this.name = name;
    this.startTime = startTime;
    this.endTime = endTime;
    this.location = location;
  }
  toString() {
    const { name, startTime, endTime, location } = this;
    return `${startTime} - ${endTime}: ${name} at ${location}`;
  }
  calculateDurationMinutes() {

    const durationInMinutes = (this.endHours - this.startHours) * 60 + (this.endMinutes - this.startMinutes);
    return durationInMinutes > 0 ? durationInMinutes : 0;
  }
   set startHours(hours) {
    this.startTime = `${hours}:${this.startMinutes}`;
  }
  get startHours() {
    return Number(this.startTime.split(":")[0]);
  }
  get startMinutes() {
    return Number(this.startTime.split(":")[1]);
  }
  get endHours() {
    return Number(this.endTime.split(":")[0]);
  }
  get endMinutes() {
    return Number(this.endTime.split(":")[1]);
  }
  get durationMinutes() {
    return this.calculateDurationMinutes();
  }
}