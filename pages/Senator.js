import { v4 as uuidv4 } from 'uuid';

export class Senator {

    constructor(name, state) {
        this.id = uuidv4();
        this.name = name;
        this.state = state;
    }
}