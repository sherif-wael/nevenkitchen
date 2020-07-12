import { session, promisifyStore, expressSession } from 'next-session';
import connectMongo from 'connect-mongo';

const MongoStore = connectMongo(expressSession);
const milliseconds = 6 * 30 * 24 * 60 * 60 * 1000;

export default function (req, res, next) {
  const mongoStore = new MongoStore({
    client: req.dbClient,
    stringify: false,
  });
  return session({
    cookie: {
      maxAge: Date.now() + milliseconds
    },
    store: promisifyStore(mongoStore),
  })(req, res, next);
}