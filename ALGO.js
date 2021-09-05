// Optimized Search Operations in JavaScript.
// two algo is available now -> sql search (search_sql) and binary search (search_bin) -- method(search).
Array.prototype.search_sql = function(x){
    for (let i = 0; i < this.length; i++) if (arr[i] === x) return i}; 
// ******************************************************************************** 
Array.prototype.search_bin = function(x){
    let low = 0; high = this.length - 1; mid = 0; val=0; 
    while (x!= this[val]){
        mid = Math.round((high + low)/2);
        if (x < this[mid]){
            if(x > this[low]) low += 1; 
            else if(x == this[low]) val = low; 
            else if(x == this[high]) val = high; high = mid-1; 
        }
        else if(x == this[mid]) val = mid; 
        else{
            low = mid; 
            if(x < this[high]) high -= 1
        }
    }
    return val
}
// Optimized Sort Operations in JavaScript.
// two algo is available now -> bubble sort (sort_bubble) and selection sort (sort_selection) -- method().
// swap_arr_n is mendetory for this functions.
Array.prototype.swap_arr_n = function(low , high) {
    this[low] ^= this[high]; this[high] ^= this[low]; this[low] ^= this[high]
}
// ->
// Bubble sort
// -> In this sort technique, each pair of adjacent is compared and elements are swapped if they are not in order.
// -> worst case the time complexity is O(n**2).
Array.prototype.sort_bubble = function(){
    let c = 0;
    for (let i = 0; i < (this.length - 1); i ++ ) {
        if (i>=1 && c == 0) break; else c = 0; // this line helps to optimized
        for (let j = 0; j < (this.length - 1 - i); j ++ ) {
            if(this[j] > this[j + 1]){
                this.swap_arr_n(j, j+1); c += 1
            }
        }
    }
    return this
}
// ******************************************************************************** 
// Selection sort
// -> In this sort technique, the list is devided into two parts.
// -> sorted part and unsorted part. O(n**2).
Array.prototype.sort_selection = function(){
    let temp = 0; let c = 0; let pos = 0;
    for (let i = 0; i < (this.length - 1); i ++ ) {

        for (let j = i+1; j < this.length; j ++ ) {
            // console.log("hello")
            if(this[i] > this[j]){
                temp = this[j]
                pos = j
                c+=1
            }   
        }
        if (c != 0){
            this.swap_arr_n(i, pos); c = 0;
        }
    }
    return this
}
// ******************************************************************************** 
// Insertion sort
// A sublist ( or sorted Array ) is maintained which is always sorted. 
// Not suitable for large set of list.
// Avg and worst case time complexity is O(n**2).
// (n-1) pass are required to sort n elements.
// In each pass we insert current element at appropriate place so that that elements in current range are in order.   
Array.prototype.sort_insertion = function(){
    let c = 1; let high = 0;
    for (var i = 0; i < (this.length-1); i++){
        for (var j = 0; j <= high; j++){
            if (this[high+1] < this[j]) this.swap_arr_n(high+1, j);
        }
        high += 1;
    }
    return this
}
    
