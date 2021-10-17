const mongoose = require("mongoose")

mongoose.connect('mongodb+srv://' + process.env.PASS + '@cluster0.xwl0l.mongodb.net/api',
{
	 useNewUrlParser: true,
	 useUnifiedTopology: true,

	}
    )
    .then(()=>console.log("connected to mongodb"))
    .catch(err=> console.log("failed to connect to mongodb", err))