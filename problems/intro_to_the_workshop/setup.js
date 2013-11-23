var inputs = [
  ['space-y', 'far out'],
  ['groovy', 'froody'],
  ['fun', 'accessible']
];

var choice = function (lst) {
  return lst[Math.floor(Math.random() * lst.length)];
};

module.exports = function () {
  return {
    args: choice(inputs),
    long: true,
    stdin: null
  };
};
