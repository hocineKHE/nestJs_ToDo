export class UserDto {
    readonly id: number;
    readonly name: string;
    readonly lastName: string;


    constructor(id: number, name: string, lastName: string) {
        this.id = id;
        this.name = name;
        this.lastName = lastName;
    }
}