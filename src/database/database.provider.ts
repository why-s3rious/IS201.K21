import * as mongoose from 'mongoose';
 import { DB_PROVIDER } from '../shared/constant'; 

export const databaseProviders = [
    {
        provide: DB_PROVIDER,
        useFactory: async () => {
            (mongoose as any).Promise = global.Promise;
            return await mongoose.connect("mongodb+srv://anhtu:0938615915@cluster0-ffgjh.mongodb.net/test?retryWrites=true&w=majority",{ useNewUrlParser: true ,useUnifiedTopology: true});
        },
    },
];