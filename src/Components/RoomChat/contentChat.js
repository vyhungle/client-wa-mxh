import React, { useContext } from "react";
import { useQuery } from "@apollo/react-hooks";
import moment from "moment";

import { GET_CHAT } from "../../Graphql/query";
import { AuthContext } from "../../Context/auth";
import FormChat from "./formChat";

function ContentChat({ id }) {
  if (id === undefined) id = "";
  var username;
  const context = useContext(AuthContext);
  context.user === null ? (username = "") : (username = context.user.username);
  const { data: { getChatReverse: chat } = {} } = useQuery(GET_CHAT, {
    variables: { roomId: id },
    pollInterval: 500,
  });

  return (
    <div className="content-chat">
      <div className="content-chat__header">
        {chat && (
          <>
            {chat.members[0].username !== username ? (
              <h5>{chat.members[0].displayname}</h5>
            ) : (
              <h5>{chat.members[1].displayname}</h5>
            )}
          </>
        )}
      </div>
      <div className="content-chat__body  d-flex flex-column-reverse">
        {chat &&
          chat.content.map((Chat, index) =>
            username === Chat.username ? (
              <div key={Chat.id} className="content-chat__body--me">
                {index != 0 ? (
                  <>
                    {Date.parse(chat.content[index - 1].createdAt) -
                      Date.parse(Chat.createdAt) >
                    800000 ? (
                      <p className="time">{moment(Chat.createdAt).subtract(1, 'days').calendar()}</p>
                    ) : (
                      ""
                    )}
                  </>
                ) : (
                  ""
                )}
                <p className="content">{Chat.content}</p>
              </div>
            ) : (
              <div key={Chat.id} className="content-chat__body--you">
                {index != 0 ? (
                  <>
                    {Date.parse(chat.content[index - 1].createdAt) -
                      Date.parse(Chat.createdAt) >
                    800000 ? (
                      <p className="time">{moment(Chat.createdAt).subtract(1, 'days').calendar()}</p>
                    ) : (
                      ""
                    )}
                  </>
                ) : (
                  ""
                )}
                <p className="content">{Chat.content}</p>
              </div>
            )
          )}
      </div>
      <div className="content-chat__form">
        <FormChat id={id} />
      </div>
    </div>
  );
}

export default ContentChat;
