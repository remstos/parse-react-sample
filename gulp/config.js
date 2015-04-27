var dest = "./build";
var src = './app';
var bowerRoot = "./bower_components"

module.exports = {
  bower: {
    files: {
      overrides: {
      }
    }
  },
  browserSync: {
    server: {
      // We're serving the src folder as well
      // for sass sourcemap linking
      baseDir: [dest, src]
    },
    files: [
      dest + "/**",
      // Exclude Map files
      "!" + dest + "/**.map"
    ]
  },
  sass: {
    src: src + "/assets/styles/*.scss",
    dest: dest + "/styles",
    fileName: 'main.css'
  },
  images: {
    src: src + "/assets/images/**",
    dest: dest + "/images"
  },
  fonts: {
    src: src + "/assets/fonts/**",
    dest: dest + "/fonts"
  },
  markup: {
    src: src + "/htdocs/**",
    dest: dest
  },
  browserify: {
    // Enable source maps
    debug: true,
    // Additional file extentions to make optional
    extensions: ['.js', '.jsx'],
    // A separate bundle will be generated for each
    // bundle config in the list below
    bundleConfigs: [{
      entries: './app/js/main.jsx',
      dest: dest,
      outputName: './main.js'
    }]
  }
};
