const product = require("./productRoute")
const blog = require("./blogRoute");
const category = require("./categoryRoute");
const routeAll =(app) => {
    app.use("/product", product)
    app.use("/blog", blog)
    app.use("/category", category)
}
module.exports = routeAll;