import { v4 as uuidv4 } from 'uuid';

class Senator {

    constructor(name, state) {
        this.id = uuidv4();
        this.name = name;
        this.state = state;
    }
}

module.exports = Senator;