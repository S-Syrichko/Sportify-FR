export default {
  source: {
    include: ["src"],
    exclude: ["node_modules"]
  },
  plugins: ["plugins/markdown"],
  opts: {
    template: "node_modules/minami",
    destination: "./docs"
  }
};