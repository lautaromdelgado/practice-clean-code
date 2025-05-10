import { GeneratedIdentifierFlags } from './../../node_modules/typescript/lib/typescript.d';
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

/* No aplicando el principio de responsabalidad única */
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
    
    class User extends Person {
        public lastAccess: Date;
        constructor(
            public email: string,
            public role: string,
            name: string,
            gender: Gender,
            birthDate: Date,
        ){
            super(name, gender, birthDate);
            this.lastAccess = new Date();
        }

        checkCredentials() {
            return true;
        }
    }

    class UserSetting extends User {
        constructor(
            public workingDirectory: string,
            public lastOpenFolder: string,
            email: string,
            role: string,
            name: string,
            gender: Gender,
            birthDate: Date,
        ) {
            super(email, role, name, gender, birthDate);
        }
    }

    const userSettings = new UserSetting(
        '/user/home',
        '/home',
        'lautaromdelgado@gmail.com',
        'admin',
        'Lautaro',
        'M',
        new Date('2002-10-03')
    )

    console.log({userSettings});
    
})();