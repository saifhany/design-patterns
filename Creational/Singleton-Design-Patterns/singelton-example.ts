class MySingleton {

    static instance: MySingleton;

    private constructor() {
        console.log("constructor called!");
    }

    public static getInstance(): MySingleton {
        if (!MySingleton.instance) {
            MySingleton.instance = new MySingleton();
        }
        return MySingleton.instance;
    }

    public logic() {
        console.log("my logic!");
    }
}

let myInstance:MySingleton  = MySingleton.getInstance();
myInstance.logic();