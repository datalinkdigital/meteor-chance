Package.describe({
  summary: "Chance is a minimalist generator of random [1] strings, numbers, etc. to help reduce some monotony particularly while writing automated tests or anywhere else you need anything random."
});

Npm.depends({
    "chance": "0.5.9"
});

Package.on_use(function (api, where) {
  api.add_files('chance.js', 'server');
  if (api.export) {
    api.export("Chance", "server");
  }
});
