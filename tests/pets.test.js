describe('constructor', () => {
    const Pet = require('../src/pets');
    it('returns an object', () => {
        expect(new Pet('Fido')).toBeInstanceOf(Object); 
    });
    it('sets the name property', () => {
        const pet = new Pet('Fido');

        expect(pet.name).toEqual('Fido');
    });
    it('has a inital age of 0', () => {
        const pet = new Pet('Fido');

        expect(pet.age).toEqual(0);
    });

    it('has a initial hunger of 0', () => {
        const pet = new Pet('Fido');

        expect(pet.hunger).toEqual(0);
    });
    it('has a inital fitness of 10', () => {
        const pet = new Pet('Fido');

        expect(pet.fitness).toEqual(10);
    });
    describe('growUp', () => {
        it('increments the age by 1', () => {
            const pet = new Pet('Fido');
            
            pet.growUp();

            expect (pet.age).toEqual(1);
        });
        it('increments the hunger by 5', () => {
            const pet = new Pet('Fido');

            pet.growUp();

            expect(pet.hunger).toEqual(5)
        });
        it('decreases the fitness by 3', () => {
            const pet = new Pet('Fido');

            pet.growUp();

            expect(pet.fitness).toEqual(7)
        });
    });
    describe('walk', () => {
        it('increases fitness by 4', () => {
            const pet = new Pet('fido');
        
            pet.fitness = 4;
            pet.walk();
        
            expect(pet.fitness).toEqual(8);
        });
        it('increases the fitnes by to a maximum 10', () => {
            const pet = new Pet('Fido');

            pet.fitness = 8;
            pet.walk();

            expect(pet.fitness).toEqual(10);
        });
    })
    describe('feed', () => {
        it('decreases hunger by 3' , () => {
            const pet = new Pet('Fido');

            pet.hunger = 10;
            pet.feed();

            expect(pet.hunger).toEqual(7);
        });
        it('decreases hunger by to a maximum of 0', () => {
            const pet = new Pet('Fido');

            pet.hunger = 3;
            pet.feed();

            expect(pet.hunger).toEqual(0);
        });
    });

    describe('checkUp', () => {
        it('should check if pet is hungry or fit', () => {
            const pet = new Pet('Fido');
            pet.hunger = 4;
            pet.fitness = 2;
            pet.checkUp();

            expect(pet.checkUp()).toEqual('I need a walk');
        });
        it('should check if pet is hungry or fit', () => {
            const pet = new Pet('Fido');
            pet.hunger = 7;
            pet.fitness = 1;
            pet.checkUp();

            expect(pet.checkUp()).toEqual('I am hungry AND I need a walk');
        });
        it('should check if pet is hungry or fit', () => {
            const pet = new Pet('Fido');
            pet.hunger = 2;
            pet.fitness = 7;
            pet.checkUp();

            expect(pet.checkUp()).toEqual('I feel great!');
    });
    it('throws an error if the pet is not alive', () => {
        const pet = new Pet('Fido');
        pet.age = 30;
        expect(() => pet.checkUp()).toThrow('Your pet is no longer alive :(');
    });
});
});