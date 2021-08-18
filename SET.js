class SET{
    #items = {};

    constructor(value){
        if(typeof value=='object') value.forEach(val => { this.add(val) });
        else if(typeof value=='string') value.split('').forEach(val => { this.add(val) });
        else if(value!=null) this.add(value);
    }

    get size(){ return Object.keys(this.#items).length; }

    add(value){
        if(!this.has(value)){
            this.#items[value] = value;
        }
        return this.#items;
    }

    clear(){ this.#items = {}; }

    delete(value){ delete this.#items[value]; }

    has = (value) => this.#items.hasOwnProperty(value);

    values = () => Object.keys(this.#items);
}

const isSuperset = (set, subset) => subset.values().every(val => set.has(val));

const union = (setA, setB) => new SET([...setA.values(), ...setB.values()]); 

const intersection = (setA, setB) => new SET(setA.values().filter((val) => setB.has(val)));

const symmetricDifference = (setA, setB) => new SET([...setA.values().filter((val) => !setB.has(val)), ...setB.values().filter((val) => !setA.has(val))]);

const difference = (setA, setB) => new SET(setA.values().filter((val) => !setB.has(val)));

function test(set){
    console.log(set.values());
    console.log(set.add('a'));
    set.clear();
    console.log(set.values());
    console.log(set.add('b'));
    console.log(set.add('c'));
    set.delete('b');
    console.log(set.values());
    console.log(set.has('b'));
    console.log(set.has('c'));
}

function testOperation(setA, setB){
    console.log(`union : ${union(setA, setB).values()}`);
    console.log(`intersection : ${intersection(setA, setB).values()}`);
    console.log(`difference : ${difference(setA, setB).values()}`);
    console.log(`symmetricDifference : ${symmetricDifference(setA, setB).values()}`);
}

function main(){
    const setA = new Set();
    const setB = new SET();
    const setC = new SET(['1', '2', '3', '4']);
    const setD = new SET('String');
    const setE = new SET(2);
    const setF = new SET(['1', '2', '3']);
    const setG = new SET(['3', '4']);

    console.log('compare to origianl set');
    console.log('origianl set');
    test(setA);
    console.log('custom set');
    test(setB);

    console.log('\ntest input');
    console.log(setC.values());
    console.log(setD.values());
    console.log(setE.values());

    console.log('\ntest operation');
    testOperation(setF, setG);
}

main();