const mongoose = require("mongoose")
const mongooseDelete = require("mongoose-delete")

const StorageScheme = new mongoose.Schema(
    {
        url:{
            type:String
        },
        filename:{
            type:String
        }
    },
    {
        timestamps:true, // CreatedAt, UpdatedAt
        versionKey:false
    }
);
StorageScheme.plugin(mongooseDelete , {overrideMethods:'all'}); //SOFT DELETE
module.exports = mongoose.model("storages",StorageScheme) //NOMBRE DE LA COLECCION DEL MODELO