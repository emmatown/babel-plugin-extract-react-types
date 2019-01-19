export class AnotherComponent extends React.Component {
  render() {
    return null;
  }
}
export class SomeComponent extends React.Component {
  render() {
    return null;
  }
}

AnotherComponent.___types = {
  kind: "generic",
  value: {
    kind: "object",
    members: [
      {
        kind: "property",
        key: {
          kind: "id",
          name: "wow1"
        },
        value: {
          kind: "boolean"
        },
        optional: false,
        leadingComments: [
          {
            type: "commentBlock",
            value: "this does something",
            raw: "* this does something "
          }
        ]
      }
    ],
    leadingComments: [
      {
        type: "commentLine",
        value: "@flow",
        raw: " @flow"
      }
    ],
    referenceIdName: "MoreProps"
  },
  name: {
    kind: "id",
    name: "AnotherComponent",
    type: null
  }
};
SomeComponent.___types = {
  kind: "generic",
  value: {
    kind: "object",
    members: [
      {
        kind: "property",
        key: {
          kind: "id",
          name: "wow"
        },
        value: {
          kind: "boolean"
        },
        optional: false,
        leadingComments: [
          {
            type: "commentBlock",
            value: "this does something",
            raw: "* this does something "
          }
        ]
      }
    ],
    referenceIdName: "Props"
  },
  name: {
    kind: "id",
    name: "SomeComponent",
    type: null
  }
};
