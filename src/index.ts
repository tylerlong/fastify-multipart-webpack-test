import Fastify from 'fastify';
import fastifyMultipart from 'fastify-multipart';

const fastify = Fastify();
fastify.register(fastifyMultipart);
