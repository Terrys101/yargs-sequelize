const Movie = require("./movieTable");

exports.addMovie = async (movieObj) => {
    try {
        await Movie.create(movieObj);
    } catch (error) {
        console.log(error);
    }
};

exports.listMovies = async (filterObj) => {
    console.log("filterObj: ", filterObj);
    try {
        if (filterObj.title || filterObj.actor) {
            return await Movie.findOne({where: filterObj});
        } else {
            return await Movie.findAll();
        }
    } catch (error) {
        console.log(error);
    }
};
   
   exports.updateMovie = async (key,updatevalue,where) =>{
      try{
           return await Movie.update({[key]:updatevalue},{where:{[key]:where}});
           
           
          
        } catch (error) {
        console.log(error);
    }
};

exports.deleteMovie = async (deletvalue) =>{
    try {
        await Movie.destroy({where: deletvalue})
    } catch (error) {
        console.log(error);

    }
};