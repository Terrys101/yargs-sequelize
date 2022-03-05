const yargs = require("yargs");

const { sequelize } = require("./db/connection");
const { addMovie, listMovies, updateMovie,deleteMovie } = require("./movie/movieFunctions");

const app = async (yargsObj) => {
    console.log(yargsObj)
    try {
        await sequelize.sync();
        if (yargsObj.add) {
            await addMovie({title: yargsObj.title, actor: yargsObj.actor});
            console.log(JSON.stringify(await listMovies(), null, 2));
        } else if (yargsObj.list ) {
            console.log(JSON.stringify(await listMovies({[yargsObj.key]: yargsObj.value}), null, 2))
        
              }else if (yargsObj.update){
              console.log(await updateMovie(yargsObj.key,yargsObj.updatevalue,yargsObj.where))

           
               } else if (yargsObj.destroy) { 
                    console.log(await deleteMovie({title: yargsObj.title}))
 
        }
        await sequelize.close();
    } catch (error) {
        console.log(error);
    }
};

app(yargs.argv);