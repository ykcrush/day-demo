class Yk {
  apply(compiler) {
    console.log("杨康自定义插件");
    compiler.hooks.emit.tapAsync("Yk", (compilation, cb) => {
      debugger;
      console.log("compliation: ", compilation.assets);
      compilation.assets["yangakang.txt"] = {
        source: function () {
          return "我是杨康的自定义插件";
        },
      };
      cb();
    });
  }
}
module.exports = Yk;
