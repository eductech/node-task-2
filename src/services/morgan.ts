import morgan from 'morgan';
import http from 'http';

interface RequestData extends http.IncomingMessage {
  query: object;
  body: object;
}

morgan.token<RequestData>('body', (req) => JSON.stringify(req.body));
morgan.token<RequestData>('query', (req) => JSON.stringify(req.query));

export { morgan };
