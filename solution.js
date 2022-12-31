function apartmentHunting(blocks, reqs) {
    const distanceBetweenTwoBlocks = (a, b) => Math.abs(a - b);
  
    const getMinDistances = (blocks, req) => {
      const minDistances = new Array(blocks.length).fill(0);
      let closestReqIdx = Infinity;
      for (let i = 0; i < blocks.length; i++) {
        if (blocks[i][req]) {
          closestReqIdx = i;
        }
        minDistances[i] = distanceBetweenTwoBlocks(i, closestReqIdx);
      }
      for (let i = blocks.length - 1; i >= 0; i--) {
        if (blocks[i][req]) {
          closestReqIdx = i;
        }
        minDistances[i] = Math.min(minDistances[i], distanceBetweenTwoBlocks(i, closestReqIdx));
      }
      return minDistances;
    }
  
    const getMaxDistancesAtBlocks = (blocks, minDistancesFromBlocks) => {
      const maxDistancesAtBlocks = new Array(blocks.length).fill(0);
      for (let i = 0; i < blocks.length; i++) {
        const minDistancesAtBlock = minDistancesFromBlocks.map((distances) => distances[i]);
        maxDistancesAtBlocks[i] = Math.max(...minDistancesAtBlock);
      }
      return maxDistancesAtBlocks;
    }
  
    const getIdAtMinValue = (array) => {
      let idAtMinValue = 0;
      let minValue = Infinity;
      for (let i = 0; i < array.length; i++) {
        const currentValue = array[i];
        if (currentValue < minValue) {
          minValue = currentValue;
          idAtMinValue = i;
        }
      }
      return idAtMinValue;
    }
  
    const minDistancesFromBlocks = reqs.map((req) => getMinDistances(blocks, req));
    const maxDistancesAtBlocks = getMaxDistancesAtBlocks(blocks, minDistancesFromBlocks);
    return getIdAtMinValue(maxDistancesAtBlocks);
  }
  // Do not edit the line below.
  exports.apartmentHunting = apartmentHunting;
  
  