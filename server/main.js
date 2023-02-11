const fastify = require('fastify')({
    logger: true
  })
  
  // Declare a route
  fastify.get('/:first/:second', function (request, reply) {
    console.log(request)
    aa = request.params.first
    bb = request.params.second

    c = +aa + +bb
    reply.send({aa, bb, c})
  })
  fastify.get('/hello', function (request, reply) {
    reply.send({ hello: 'hello' })
  })
  
  // Run the server!
  fastify.listen({ port: 3000 }, function (err, address) {
    if (err) {
      fastify.log.error(err)
      process.exit(1)
    }
    // Server is now listening on ${address}
  })
  