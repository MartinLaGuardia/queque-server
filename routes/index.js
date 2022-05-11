module.exports = app => {

    const indexRoutes = require("./index.routes");
    app.use("/api/index", indexRoutes);

    const placesRoutes = require("./places.routes");
    app.use("/api/places", placesRoutes);

    const commentsRoutes = require("./comments.routes");
    app.use("/api/comments", commentsRoutes);

    const usersRoutes = require("./users.routes");
    app.use("/api/users", usersRoutes);

    const authRoutes = require("./auth.routes");
    app.use("/api/auth", authRoutes);



}