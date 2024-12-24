const jsonServer = require("json-server");
const auth = require("json-server-auth");

const server = jsonServer.create();
const router = jsonServer.router("db.json");
const port = process.env.PORT || 9000;
const middlewares = jsonServer.defaults();

server.db = router.db;
const rules = auth.rewriter({
    users: 640,
    serviceDDL: 660,
    services: 660,
    requestedService: 660,
    quotations: 660,
    orders: 660,
});
server.use(middlewares);
server.use(rules);
server.use(auth);
server.use(router);


server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});
