const getHomePage = (req, res) => {
   //process dada
   //model
   res.send("Hello World! My first project of NodeJS");
};

const getNewsPage = (req, res) => {
   res.render("sample.ejs");
};

module.exports = {
   getHomePage,
   getNewsPage,
};
