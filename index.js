const { parseExpression } = require("@babel/parser");

const { findExportedComponents } = require("./extract-react-types");

module.exports = babel => {
  let t = babel.types;

  return {
    visitor: {
      Program(programPath, state) {
        try {
          let components = findExportedComponents(
            programPath,
            "flow",
            state.file.filename
          );
          components.forEach(({ name, component }) => {
            // TODO: handle when name is null
            // it will only happen when it's the default export
            // generate something like this
            // export default (var someName = function() {}, someName.___types = theTypes, someName)
            if (name !== null) {
              programPath.node.body.push(
                t.expressionStatement(
                  t.assignmentExpression(
                    "=",
                    t.memberExpression(
                      t.identifier(name),
                      t.identifier("___types")
                    ),
                    parseExpression(JSON.stringify(component))
                  )
                )
              );
            }
          });
        } catch (e) {}
      }
    }
  };
};
