function distanceFromHqInBlocks(pickBlock) {
    
    const headquatersBlock = 42;

    const distanceFromHqInBlocks = Math.abs(pickBlock - headquatersBlock);

    return distanceFromHqInBlocks;
}

function distanceFromHqInFeet(pickupBlock) {
    
    const distanceInBlocks = distanceFromHqInBlocks(pickupBlock);

    const distanceInFeet = distanceInBlocks * 264;

    return distanceInFeet;
}
function distanceTravelledInFeet(startBlock, endBlock) {
    const blockLength = 264; // Length of one block in feet
    // Calculate the absolute difference in blocks between startBlock and endBlock
    const blocksTravelled = Math.abs(endBlock - startBlock);
    // Calculate the distance in feet
    const distanceInFeet = blocksTravelled * blockLength;
    return distanceInFeet;
  }
  

function calculatesFarePrice(startblock, endblock) {

    const distanceInFeet= distanceTravelledInFeet(startblock, endblock);
    
    if (distanceInFeet <= 400) {
        return 0;
    } else if (distanceInFeet > 400 && distanceInFeet <=2000) {
        return (distanceInFeet - 400) * 0.02;
    } else if (distanceInFeet > 2000 && distanceInFeet <= 2500) {
        return 25;
    } else {
        return 'cannot travel that far';
    }
}

