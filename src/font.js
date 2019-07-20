const Fontmin = require("fontmin");
const format = (text) => {
  return new Promise(resolve => {
    const fontmin = new Fontmin()
      .src("assets/font.ttf")
      .use(Fontmin.glyph({
        text,
        hinting: false,
      }));

    fontmin.run((err, data) => {
      if (err) {
        console.log("error", err);
        resolve({success: false, data: err});
        return;
      }
      resolve({success: true, data: data[0]._contents});
    });
  });
};


module.exports = {
  format
};