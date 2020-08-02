import React from "react";
import Link from "next/link";
import {
  createStyles,
  Theme,
  WithStyles,
  withStyles,
  Button,
} from "@material-ui/core";

function styles(theme: Theme) {
  return createStyles({
    root: {
      paddingTop: theme.spacing(1),
    },
  });
}

type Props = {
  classes: {
    root: any;
  };
};

type State = {
  test: string;
  count: number;
};

class IndexPage extends React.Component<
  Props & WithStyles<typeof styles>,
  State
> {
  constructor(props: Props & WithStyles<typeof styles>) {
    super(props);
    this.state = {
      test: "Nexts",
      count: 1,
    };
  }

  public handleIncriment = () => {
    let cnt: number = this.state.count;
    this.setState({
      count: ++cnt,
    });
  };

  // ライフサイクル
  shouldComponentUpdate(_nextProps: any, _nextState: any): boolean {
    console.log("shouldComponentUpdate");
    return true;
  }

  public render() {
    const { classes } = this.props;
    const { test, count } = this.state;

    return (
      <div className={classes.root}>
        <h1>
          Hello {test} 👋 {count}
        </h1>
        <p>
          <Link href="/about">
            <a>About</a>
          </Link>
        </p>
        <Button color="primary" onClick={this.handleIncriment}>
          State Test!
        </Button>
      </div>
    );
  }
}
export default withStyles(styles)(IndexPage);
