import Fastify from 'fastify';
import cors from '@fastify/cors';
import { PrismaClient } from '@prisma/client';
import { appRoutes } from './routes';

const app = Fastify()

app.register(cors);

app.register(appRoutes)

app.listen({
    port: 5000,
}).then(() => {
    console.log('listening on port 5000')

});

