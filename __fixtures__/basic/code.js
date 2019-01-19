// @flow

type MoreProps = {
  /** this does something */
  wow1: boolean
};

export class AnotherComponent extends React.Component<MoreProps> {
  render() {
    return null;
  }
}

type Props = {
  /** this does something */
  wow: boolean
};

export class SomeComponent extends React.Component<Props> {
  render() {
    return null;
  }
}
