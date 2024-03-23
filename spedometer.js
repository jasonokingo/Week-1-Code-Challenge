//Create a function that read the speed of the car and distribute demerit points once over the speed limit by 5km/s and will suspend the license of the driver once past 12 demerit points.
function speedDetector (speed) {
    const speedLimit = 70
    let demritPoints = Math.floor((speed - speedLimit)/5);
    if(speed <= speedLimit ) {
        return "OK";
    } else if(demritPoints > 12) {
        return "License Suspended";
    } else if(demritPoints > 0) {
        return `Points: ${demritPoints}`;
    }
}

// Input speed of the car.
console.log(speedDetector(65));