const { parseExpression } = require("@babel/parser");
const { isReactComponentClass } = require("babel-react-components");

const {
  getContext,
  isReactComponentFunction,
  convertReactComponentClass,
  convertReactComponentFunction
} = require("./extract-react-types");

// parseExpression(JSON.stringify());

module.exports = babel => {
  let t = babel.types;

  return {
    visitor: {
      Program: {
        enter(path, state) {
          const context = getContext("flow", state.file.filename);
          for (let i = 0; i < path.node.body.length; i++) {
            let node = path.get(`body.${i}`);
            if (node.isExportDeclaration()) {
              let declaration = node.get("declaration");
              let converted;
              if (isReactComponentClass(declaration)) {
                converted = convertReactComponentClass(declaration, context);
              } else if (isReactComponentFunction(declaration)) {
                converted = convertReactComponentFunction(declaration, context);
              }
              // todo this might break for unnamed default exports
              if (converted && converted.name && converted.name.name) {
                path.node.body.push(
                  t.expressionStatement(
                    t.assignmentExpression(
                      "=",
                      t.memberExpression(
                        t.identifier(converted.name.name),
                        t.identifier("___types")
                      ),
                      parseExpression(JSON.stringify(converted))
                    )
                  )
                );
              }
            }
          }
        }
      }
    }
  };
};
