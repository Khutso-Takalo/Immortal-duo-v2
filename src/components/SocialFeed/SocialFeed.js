import React, { useState, useEffect } from 'react';
import { Instagram, Twitter, Facebook, ExternalLink, Heart, MessageCircle, Share2, Music } from 'lucide-react';
import './SocialFeed.css';

const SocialFeed = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Sample social media posts - replace with real API integration
  const samplePosts = [
    {
      id: 1,
      platform: 'instagram',
      content: 'Just dropped some fire beats at the studio! 🔥 New track coming soon... #ImmortalDuo #NewMusic',
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop',
      likes: 234,
      comments: 45,
      timestamp: '2 hours ago',
      url: 'https://www.instagram.com/theimmortalduo/'
    },
    {
      id: 2,
      platform: 'twitter',
      content: 'Thank you Miami for an incredible night! The energy was absolutely insane 🙌 Next stop: NYC! #TourLife #ElectronicMusic',
      likes: 156,
      comments: 23,
      timestamp: '1 day ago',
      url: 'https://twitter.com/immortal_duo'
    },
    {
      id: 3,
      platform: 'facebook',
      content: 'Behind the scenes of our latest music video shoot! Can\'t wait to share the final result with you all 🎬✨',
      image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400&h=400&fit=crop',
      likes: 89,
      comments: 12,
      timestamp: '3 days ago',
      url: 'https://web.facebook.com/profile.php?id=100082587348379'
    },
    {
      id: 4,
      platform: 'instagram',
      content: 'Collaborating with some amazing artists for our upcoming EP! Stay tuned for more updates 🎵',
      image: 'https://images.unsplash.com/photo-1571974599782-87624638275c?w=400&h=400&fit=crop',
      likes: 178,
      comments: 34,
      timestamp: '1 week ago',
      url: 'https://www.instagram.com/theimmortalduo/'
    }
  ];

  useEffect(() => {
    // Simulate API call
    const fetchPosts = async () => {
      setLoading(true);
      await new Promise(resolve => setTimeout(resolve, 1000));
      setPosts(samplePosts);
      setLoading(false);
    };

    fetchPosts();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const getPlatformIcon = (platform) => {
    switch (platform) {
      case 'instagram':
        return <Instagram size={20} />;
      case 'twitter':
        return <Twitter size={20} />;
      case 'facebook':
        return <Facebook size={20} />;
      default:
        return <Share2 size={20} />;
    }
  };

  const getPlatformColor = (platform) => {
    switch (platform) {
      case 'instagram':
        return '#E4405F';
      case 'twitter':
        return '#1DA1F2';
      case 'facebook':
        return '#4267B2';
      default:
        return '#667eea';
    }
  };

  if (loading) {
    return (
      <div className="social-feed">
        <div className="social-header">
          <h2>Latest Updates</h2>
          <p>Stay connected with our latest activities</p>
        </div>
        <div className="loading-posts">
          {[1, 2, 3, 4].map(i => (
            <div key={i} className="post-skeleton">
              <div className="skeleton-header"></div>
              <div className="skeleton-content"></div>
              <div className="skeleton-image"></div>
              <div className="skeleton-actions"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="social-feed">
      <div className="social-header">
        <h2>Latest Updates</h2>
        <p>Stay connected with our latest activities and behind-the-scenes content</p>
      </div>
      
      <div className="posts-grid">
        {posts.map(post => (
          <div key={post.id} className="social-post">
            <div className="post-header">
              <div className="platform-info">
                <div 
                  className="platform-icon"
                  style={{ backgroundColor: getPlatformColor(post.platform) }}
                >
                  {getPlatformIcon(post.platform)}
                </div>
                <div className="post-meta">
                  <span className="platform-name">
                    {post.platform.charAt(0).toUpperCase() + post.platform.slice(1)}
                  </span>
                  <span className="post-time">{post.timestamp}</span>
                </div>
              </div>
              <a 
                href={post.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="external-link"
              >
                <ExternalLink size={16} />
              </a>
            </div>
            
            <div className="post-content">
              <p>{post.content}</p>
              {post.image && (
                <div className="post-image">
                  <img src={post.image} alt="Social post" />
                </div>
              )}
            </div>
            
            <div className="post-actions">
              <div className="action-item">
                <Heart size={16} />
                <span>{post.likes}</span>
              </div>
              <div className="action-item">
                <MessageCircle size={16} />
                <span>{post.comments}</span>
              </div>
              <div className="action-item">
                <Share2 size={16} />
                <span>Share</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="social-cta">
        <h3>Follow Us for More</h3>
        <div className="social-links">
          <a 
            href="https://www.instagram.com/theimmortalduo/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-link instagram"
          >
            <Instagram size={20} />
            <span>Instagram</span>
          </a>
          <a 
            href="https://www.tiktok.com/@theimmortal_duo1" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-link tiktok"
          >
            <Music size={20} />
            <span>TikTok</span>
          </a>
          <a 
            href="https://web.facebook.com/profile.php?id=100082587348379" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-link facebook"
          >
            <Facebook size={20} />
            <span>Facebook</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SocialFeed;
