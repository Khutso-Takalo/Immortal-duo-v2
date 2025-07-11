import React from 'react';
import './ErrorBoundary.css';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary">
          <div className="error-content">
            <h2>⚠️ Oops! Something went wrong</h2>
            <p>We're sorry, but there was an error loading this page.</p>
            <p>Please try refreshing the page or contact us if the problem persists.</p>
            <button 
              onClick={() => window.location.reload()}
              className="error-button"
            >
              Refresh Page
            </button>
            <div className="error-contact">
              <p>Need help? Contact us at:</p>
              <a href="mailto:bookings@immortalduo.com">bookings@immortalduo.com</a>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
