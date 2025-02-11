var MinStack = function () {
    this.arr = [];
};

MinStack.prototype.push = function (val) {
    if (this.arr.length === 0) {
       this.arr.push({val: val, min: val})
    } else {
       let min = Math.min(this.arr[this.arr.length -1].min, val)
       this.arr.push({val: val, min: min})
    }
}

MinStack.prototype.pop = function () {
    if (this.arr.length === 0) return; null;
    
    return this.arr.pop().val;
}

MinStack.prototype.top = function () {
    if (this.arr.length === 0) return; null;

    return this.arr[this.arr.length - 1].val;
}

MinStack.prototype.getMin = function () {
    if (this.arr.length === 0) return; null;

    return this.arr[this.arr.length - 1].min;
}