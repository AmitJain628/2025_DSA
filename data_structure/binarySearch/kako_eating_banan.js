function canEat(piles, h) {
    function canEat(min) {
        let hours = 0
        for (let pile of piles) {
            hours += Math.ceil(pile/min);
        }

        return hours <= h;
    }

    let left = 1;
    let right = 1;

    for (pile of piles) {
        right = Math.max(pile, right)
    }
    while (left < right) {
        let mid = Math.floor((left + right)/2);
        if (canEat(mid)) {
           right = mid
        } else {
           left = mid + 1;
        }
    }

    return left
    
}