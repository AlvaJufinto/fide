/** @format */

import {
	Component,
	type ReactNode,
} from 'react';

import Button from './Button';

interface Props {
	children: ReactNode;
}

interface State {
	hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
	constructor(props: Props) {
		super(props);
		this.state = { hasError: false };
	}

	static getDerivedStateFromError() {
		return { hasError: true };
	}

	componentDidCatch(error: any, errorInfo: any) {
		console.error("UI Error:", error, errorInfo);
	}

	handleReset = () => {
		this.setState({ hasError: false });
		window.location.reload();
	};

	render() {
		if (this.state.hasError) {
			return (
				<div className="w-full h-screen flex flex-col items-center justify-center gap-4">
					<h1 className="text-2xl font-bold text-red-500">SYSTEM FAILURE</h1>
					<p className="text-sm">Unexpected error occurred</p>
					<Button onClick={this.handleReset} customClass=" px-4 py-2">
						RELOAD
					</Button>
				</div>
			);
		}

		return this.props.children;
	}
}

export default ErrorBoundary;
