import React from 'react';
import './ChatBubble.css';

export function ChatBubble({ from = 'user', children }) {
  return { from, children };
}

export function ChatDemo({ platform = 'gchat', children }) {
  const bubbles = React.Children.toArray(children).filter(
    (child) => child.type === ChatBubble || (child.props && child.props.from)
  );

  const label = platform === 'line' ? 'LINE' : 'Google Chat';

  return (
    <div className={`chat-demo chat-demo--${platform}`}>
      <div className="chat-demo__label">{label}</div>
      {bubbles.map((bubble, i) => {
        const { from, children: text } = bubble.props || bubble;
        const isUser = from === 'user';

        if (isUser) {
          return (
            <div key={i} className="chat-bubble-row chat-bubble-row--user">
              <div className={`chat-bubble chat-bubble--user`}>{text}</div>
            </div>
          );
        }

        return (
          <div key={i} className="chat-bubble-row chat-bubble-row--bot">
            <div className="chat-bubble__avatar">🦐</div>
            <div className="chat-bubble__bot-content">
              <div className="chat-bubble__bot-info">
                <span className="chat-bubble__bot-name">AIA小助手</span>
                <span className="chat-bubble__bot-tag">應用程式</span>
              </div>
              <div className={`chat-bubble chat-bubble--bot`}>{text}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
