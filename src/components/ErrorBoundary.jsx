import React from "react";

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    console.error("ErrorBoundary caught", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div
          role="alert"
          className="p-4 bg-red-50 border border-red-200 rounded"
        >
          <h3 className="font-semibold">Something went wrong.</h3>
          <pre className="text-xs mt-2">{String(this.state.error)}</pre>
        </div>
      );
    }
    return this.props.children;
  }
}
