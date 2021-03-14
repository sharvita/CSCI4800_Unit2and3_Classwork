var courses = [
    {
      title: "Chocolate Cake",
      cost: 50
    },
    {
      title: "Lemon Meringue Pie",
      cost: 15
    },
    {
      title: "Chilli Chicken",
      cost: 30
    }
  ];

exports.showCourses = (req, res) => {
    res.render("courses", {offeredCourses: courses});
};

exports.showSignUp = (req, res) => {
    res.render("contact");
};

exports.postedSignUpForm = (req, res) => {
    res.render("thanks");
};

exports.showIndex = (req, res) => {
    res.render("index");
};