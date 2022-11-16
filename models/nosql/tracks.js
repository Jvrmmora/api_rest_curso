const mongoose = require("mongoose")
const mongooseDelete = require("mongoose-delete")

const TracksScheme = new mongoose.Schema(
    {
        name:{
            type:String
        },
        album:{
            type:String
        },
        cover:{
            type:String,
            validate:{
                validator: (req) => {
                    return true;
                },
                message: "ERROR URL",
            },
        },
        artist:{
            name:{
                type:String
            },
            nickname:{
                type:String
            },
            nationality:{
                type:String
            },
        },
        duration:{
            start:{
                type:Number
            },
            end:{
                type:Number
            },
        },
        mediaId:{
            type: mongoose.Types.ObjectId,
        },
    },
    {
        timestamps:true, // CreatedAt, UpdatedAt
        versionKey:false
    }
);

/**Implementar metodo propio con la relacion coleccion storage listar get all */
TracksScheme.statics.findAllData = function() {
    const joinData = this.aggregate([
        {
            $lookup:{
                from:"storages",
                localField:"mediaId",
                foreignField:"_id",
                as:"audio"
            },
        },
        {
            $unwind:"$audio"
        }
    ])
    return joinData
};

/**Implementar metodo propio con la relacion coleccion storage by one */
TracksScheme.statics.findOneData = function(id) {
    const joinData = this.aggregate([
        {
            $match:{
                    _id:mongoose.Types.ObjectId(id),
            },
        },
        {
            $lookup:{
                from:"storages",
                localField:"mediaId",
                foreignField:"_id",
                as:"audio"
            },
        },
        {
            $unwind:"$audio"
        }
    ])
    return joinData
};

TracksScheme.plugin(mongooseDelete , {overrideMethods:'all'}); //SOFT DELETE
module.exports = mongoose.model("tracks",TracksScheme) //NOMBRE DE LA COLECCION DEL MODELO