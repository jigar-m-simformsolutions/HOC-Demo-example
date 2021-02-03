import React from "react";

const FeedItem = ({ contacts }) => {
  return (
    <div>
      {contacts.map(contact => (
        <div style= {{padding :'10px'}} key={contact.id}>
          <div>
            <img
              src={contact.thumbnail}
              role="presentation"
              alt = {contact.name}
            />
          </div>
          <div>
            <strong>{contact.name}</strong>
            <br />
            <small>{contact.email}</small>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeedItem;