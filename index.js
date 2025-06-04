// Code your solution in this file!
function distanceFromHqInBlocks(distance){
    let x = distance> 42? distance
    -42 : 42 -distance
    return x
}
function distanceFromHqInFeet(distance){
    let x = distanceFromHqInBlocks(distance) * 264
    return x
}
function distanceTravelledInFeet(start, destination){
    let x = start > destination ? start
    - destination : destination - start
    return x * 264
}
function calculatesFarePrice(start, destination){
    let distance = distanceTravelledInFeet(start, destination)
    let fare = 0

    fare = distance <= 400 ? 0 :
           distance > 400 && distance <= 2000 ? (distance - 400) * 0.02 :
           distance > 2000 && distance <= 2500 ? 25 :
           'cannot travel that far'

    return fare
}

