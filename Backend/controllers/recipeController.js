exports.homepage = async(req, res, next) => {
   res.render("index", {title: "Cooking blog - Home"})
}