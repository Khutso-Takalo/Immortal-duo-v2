import React, { useState, useEffect } from 'react';
import { BarChart, Users, Music, Calendar, TrendingUp, Eye, Heart, Share2 } from 'lucide-react';
import './PerformanceMetrics.css';

const PerformanceMetrics = () => {
  const [metrics, setMetrics] = useState({});
  const [loading, setLoading] = useState(true);

  // Sample metrics data - replace with real analytics data
  const sampleMetrics = {
    totalViews: 125680,
    monthlyListeners: 45230,
    totalTracks: 28,
    upcomingEvents: 6,
    socialFollowers: 89400,
    engagement: 12.8,
    growth: 18.5
  };

  useEffect(() => {
    // Simulate API call to fetch metrics
    const fetchMetrics = async () => {
      setLoading(true);
      await new Promise(resolve => setTimeout(resolve, 1000));
      setMetrics(sampleMetrics);
      setLoading(false);
    };

    fetchMetrics();
  }, []);

  const MetricCard = ({ icon: Icon, title, value, suffix = '', trend = null, color = '#667eea' }) => (
    <div className="metric-card">
      <div className="metric-header">
        <div className="metric-icon" style={{ backgroundColor: color }}>
          <Icon size={24} />
        </div>
        {trend && (
          <div className={`metric-trend ${trend > 0 ? 'positive' : 'negative'}`}>
            <TrendingUp size={16} />
            <span>{Math.abs(trend)}%</span>
          </div>
        )}
      </div>
      <div className="metric-content">
        <h3>{title}</h3>
        <div className="metric-value">
          {loading ? (
            <div className="metric-skeleton"></div>
          ) : (
            <span>{value.toLocaleString()}{suffix}</span>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div className="performance-metrics">
      <div className="metrics-header">
        <h2>
          <BarChart size={24} />
          Performance Dashboard
        </h2>
        <p>Track your music performance and audience engagement</p>
      </div>

      <div className="metrics-grid">
        <MetricCard
          icon={Eye}
          title="Total Views"
          value={metrics.totalViews || 0}
          trend={15.2}
          color="#667eea"
        />
        <MetricCard
          icon={Users}
          title="Monthly Listeners"
          value={metrics.monthlyListeners || 0}
          trend={12.8}
          color="#764ba2"
        />
        <MetricCard
          icon={Music}
          title="Total Tracks"
          value={metrics.totalTracks || 0}
          trend={8.3}
          color="#f093fb"
        />
        <MetricCard
          icon={Calendar}
          title="Upcoming Events"
          value={metrics.upcomingEvents || 0}
          color="#4facfe"
        />
        <MetricCard
          icon={Heart}
          title="Social Followers"
          value={metrics.socialFollowers || 0}
          trend={18.5}
          color="#43e97b"
        />
        <MetricCard
          icon={Share2}
          title="Engagement Rate"
          value={metrics.engagement || 0}
          suffix="%"
          trend={5.2}
          color="#fa709a"
        />
      </div>

      <div className="metrics-charts">
        <div className="chart-container">
          <h3>Monthly Performance</h3>
          <div className="chart-placeholder">
            <div className="bars">
              {[65, 45, 78, 52, 89, 73, 91, 68, 84, 76, 92, 88].map((height, index) => (
                <div
                  key={index}
                  className="bar"
                  style={{ height: `${height}%` }}
                  data-value={`${height * 100}`}
                ></div>
              ))}
            </div>
            <div className="chart-labels">
              <span>Jan</span>
              <span>Feb</span>
              <span>Mar</span>
              <span>Apr</span>
              <span>May</span>
              <span>Jun</span>
              <span>Jul</span>
              <span>Aug</span>
              <span>Sep</span>
              <span>Oct</span>
              <span>Nov</span>
              <span>Dec</span>
            </div>
          </div>
        </div>

        <div className="insights-container">
          <h3>Key Insights</h3>
          <div className="insights-list">
            <div className="insight-item">
              <div className="insight-icon success">
                <TrendingUp size={16} />
              </div>
              <div className="insight-content">
                <h4>Growing Audience</h4>
                <p>Your monthly listeners increased by 18.5% this month</p>
              </div>
            </div>
            <div className="insight-item">
              <div className="insight-icon info">
                <Music size={16} />
              </div>
              <div className="insight-content">
                <h4>Top Track Performance</h4>
                <p>Your latest release is trending with 25K+ plays</p>
              </div>
            </div>
            <div className="insight-item">
              <div className="insight-icon warning">
                <Calendar size={16} />
              </div>
              <div className="insight-content">
                <h4>Event Bookings</h4>
                <p>6 upcoming events scheduled - great momentum!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerformanceMetrics;
