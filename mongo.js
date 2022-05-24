import mongoose from 'mongoose';

let mongo1 = mongoose.createConnection("mongodb+srv://padalakavya:padalakavya@cluster0.hkjnf.mongodb.net/mernstack?retryWrites=true&w=majority");
let mongo2 = mongoose.createConnection("mongodb+srv://padalakavya:padalakavya@cluster0.hkjnf.mongodb.net/mernstack?retryWrites=true&w=majority");

export {mongo1,mongo2};