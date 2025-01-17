module.exports=(sequelize,DataTypes)=>{
    const Post=sequelize.define("post",{
        postId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull:false,
            validate: {
              isNumeric: {
                msg: "Invalid PostId"
              }
            }
          },
          title: {
            type: DataTypes.STRING,
            allowNull: false
          },
          description: {
            type: DataTypes.TEXT,
            allowNull: false
          },
          status: {
            type: DataTypes.ENUM('Active', 'Deleted'),
            defaultValue: 'Active',
            allowNull: false,
            
          },
          userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
              isNumeric: {
                msg: "Invalid userId"
              }
            }
          },
          file_path:{
            type:DataTypes.STRING,
            allowNull:true
          }
        }, 
        {
          timestamps: true,
    })
    return Post;
}