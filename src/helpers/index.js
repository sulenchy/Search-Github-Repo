// delay a func for a given delay before it get executed
export const debounce = (func, delay) => { 
    let timerId; 
    return function() { 
        clearTimeout(timerId) 
        timerId = setTimeout(() => func.apply(this,arguments), delay)
    }; 
};
// this accept object with at least a full_name key
export const sortByFullName = (obj) => {
    return obj.sort(function (a, b) {
        return a.full_name - b.full_name;
    });
}
