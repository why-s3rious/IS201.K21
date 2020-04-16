import { Connection } from 'mongoose';

// import { PostSchema } from './posts.schema';
import { USER_MODEL_PROVIDER, DB_PROVIDER } from '../shared/constant';
import { UserSchema } from './user.model';

export const userProviders = [
    {
        provide: USER_MODEL_PROVIDER,
        useFactory: (connection: Connection) => connection.model('User', UserSchema),
        inject: [DB_PROVIDER],
    },
];