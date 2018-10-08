import * as React from 'react';
import classNames from 'classnames';
import styles from './Lol.css';

interface State {
}

interface Props {
}

class Lol extends React.PureComponent<Props, State> {
	constructor(props: Props) {
		super(props);

		this.state = {
		};
	}

	render() {
		const {
			children,
		} = this.props;

		const className: string = classNames(
			// styles.container,
			{
				container: true
			}
		);

		return (
			<div className={className}>
				Hi, my name is Lol.🔥
				I was created to make your dreams come true.
				<br/>
				<div>
					{children}
				</div>
			</div>
		);
	}
}

export default Lol;
