(() => {
    function getMovieByID(id: string) {
        console.log({ id });
    }

    function getMovieCastByID(id: string) {
        console.log({ id });
    }

    function getActorBioByID(id: string) {
        console.log({ id });
    }

    interface Movie {
        cast: string[]
        description: string,
        rating: number,
        title: string,
    }

    function createMovie({ title, description, rating, cast }: Movie) {
        console.log({ title, description, rating, cast });
    }

    // Crea un nuevo actor
    function createActor(fullName: string, birthdate: Date): boolean {
        // tarea asincrona para verificar nombre
        // ..
        // ..
        if (fullName === 'fernando') return false;

        console.log('Crear actor', birthdate);
        return true;
    }

    // Continuación..

    interface GetPayAmountParams {
        isDead: false,
        isSeparated: true,
        isRetired: false,
    }

    const getPayAmount = ({ isDead, isSeparated, isRetired }: GetPayAmountParams): number => isDead ? 1500 :
        (isSeparated ? 2500 :
            (isRetired ? 3000 :
                4000));
})();




