(() => {
    type Gender = 'M' | 'F';
    //! forma larga
    class PersonLargo {
        public name: string;
        public gender: Gender;
        public birthDate: Date;

        constructor(name: string, gender: Gender, birthDate: Date) {
            this.name = name;
            this.gender = gender;
            this.birthDate = birthDate;
        }
    }

    const newPerson = new PersonLargo('Melania', 'F', new Date('2005-02-24'));
    console.log({newPerson});
})();

(() => {
    type Gender = 'M' | 'F';
    //* forma corta
    class Person {
        constructor(
            public name: string,
            public gender: Gender,
            public birthDate: Date,
        ){}
    }
    const newPerson = new Person('Lautaro', 'M', new Date('2002-10-03'));
    console.log({newPerson});
})();