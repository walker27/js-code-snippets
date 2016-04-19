class Observers() {
    constructor() {
        this.observers = [];
    }
    add(obj) {
        this.observers.push(obj);
        return this;
    }
    clear() {
        this.observers = [];
        return this;
    }
    count() {
        return this.observers.length;
    }
    get(index) {
        return this.observers[index];
    }

    indexOf(obj, startIndex) {
        let pointer = -1,
            i = startIndex;
        while (i < this.observers.length) {
            if (this.observers[i] === obj) {
                pointer = i;
            }
            i++;
        }
        return pointer;
    }

    splice(){
        return Array.prototype.splice.apply(this.observers, arguments);
    }
}