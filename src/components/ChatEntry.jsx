import PropTypes from 'prop-types';
import './ChatEntry.css';
import TimeStamp from './TimeStamp';


const ChatEntry = ({ sender, body, timeStamp, liked, onHandleLike }) => {
  const heart = liked ? '❤️' : '🤍';
  return (
    // Replace the outer tag name with a semantic element that fits our use case
    <article className="chat-entry local">
      <h2 className="entry-name">{sender}</h2>
      <section className="entry-bubble">
        <p>{body}</p>
        <p className="entry-time">
          <TimeStamp time={timeStamp} />
        </p>
        <button className="like" onClick={onHandleLike}>
          {heart}
        </button>
      </section>
    </article>
  );
};

ChatEntry.propTypes = {
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
  onHandleLike: PropTypes.func,
};

export default ChatEntry;
