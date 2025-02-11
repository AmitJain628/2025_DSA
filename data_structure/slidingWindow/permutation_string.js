/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    if (s1.length > s2.length) return false;

    let obj1 = {};
    let obj2 = {};

    for (let char of s1) {
        obj1[char] = (obj1[char] || 0) + 1;
    }

    for (let i = 0; i < s1.length; i++) {
        obj2[s2[i]] = (obj2[s2[i]] || 0) + 1;
    }

    if(isEqual(obj1, obj2)) return true;
    let left = 0;

    console.log("obj", obj1, obj2);
    for (let right = s1.length; right < s2.length; right++) {
          obj2[s2[right]] = (obj2[s2[right]] || 0) + 1
          obj2[s2[left]] = (obj2[s2[left]] || 0) - 1

          if (obj2[s2[left]] === 0) {
             delete obj2[s2[left]];
          }

          left++
          console.log(obj1, obj2);

          if (isEqual(obj1, obj2)) return true
    }

    return false;
}


function isEqual(obj1, obj2) { 
    if (Object.keys(obj1).length !== Object.keys(obj2).length) {
        return false
    }

    for (let key in obj1) {
        if (obj1[key] !== obj2[key]) {
            return false
         }
    }

    return true;
}