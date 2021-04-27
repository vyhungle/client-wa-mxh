import React, { useState, useContext, useEffect } from "react";
import IconButton from "@material-ui/core/IconButton";
import moment from "moment";
import { useMutation } from "@apollo/react-hooks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { SRLWrapper } from "simple-react-lightbox";
import SRWL from "simple-react-lightbox";

import FormComment from "./formComment";
import LoadComment from "./loadComment";
import { AuthContext } from "../../Context/auth";
import { LIKEPOST } from "../../Graphql/mutation";

function Post({
  post: {
    id,
    body,
    createdAt,
    displayname,
    image,
    likeCount,
    likes,
    commentCount,
    avatar,
    username,
  },
}) {
  const user = useContext(AuthContext);
  const [open, setOpen] = useState(false);

  const [liked, setLiked] = useState(false);
  useEffect(() => {
    if (
      user.user &&
      likes.find((like) => like.username === user.user.username)
    ) {
      setLiked(true);
    } else setLiked(false);
  }, [user, likes]);

  const [likepost] = useMutation(LIKEPOST);
  function likePost() {
    likepost({
      variables: { postId: id },
    });
  }
  function openComment() {
    setOpen(true);
  }
  function Linkiv(link) {
    var value = link.split(".");
    return value[value.length - 1];
  }
  return (
    <div className="card">
      <div className="card__title">
        {avatar === null ? (
          <img
            src="https://thumbs.dreamstime.com/b/default-avatar-profile-image-vector-social-media-user-icon-potrait-182347582.jpg"
            alt="avatar"
          />
        ) : (
          <img src={avatar} alt="avatar" />
        )}
        <div className="card__title--conteint">
          <Link to={`/profile/${username}`} className="link">
            <span>{displayname}</span>
          </Link>
          <p>{moment(createdAt).fromNow(true)}</p>
        </div>

        <div className="card__title--icon"></div>
      </div>
      <div className="card__body">{body}</div>
      {image.length === 0 ? (
        ""
      ) : (
        <div className="card__image">
          {image.length === 1 ? (
            <SRWL>
              <SRLWrapper>
                <img src={image[0]} alt="imagepost" />
              </SRLWrapper>
            </SRWL>
          ) : (
            <>
              {image.length === 2 ? (
                <div className="multi-Image2">
                  <SRWL>
                    <SRLWrapper>
                      <img src={image[0]} alt="imagepost" />
                      <img src={image[1]} alt="imagepost" />
                    </SRLWrapper>
                  </SRWL>
                </div>
              ) : (
                <>
                  {image.length === 3 ? (
                    <div className="multi-Image3">
                      <SRWL>
                        <SRLWrapper>
                          <div>
                            <img src={image[0]} alt="imagepost" />
                            <img src={image[1]} alt="imagepost" />
                          </div>
                          <img src={image[2]} alt="imagepost" />
                        </SRLWrapper>
                      </SRWL>
                    </div>
                  ) : (
                    <div className="multi-Image4">
                      <SRWL>
                        <SRLWrapper>
                          {image.map((i, index) => (
                            <>
                              {index < 4 ? (
                                <>
                                  {index === 3 && image.length>4 ? (
                                    <>
                                      <img
                                        src={i}
                                        alt="imagepost"
                                        className="last-image"
                                        key={index}
                                      />
                                     <p key="po">{image.length - 4}+</p>
                                      
                                    </>
                                  ) : (
                                    <img src={i} alt="imagepost"  key={index}/>
                                  )}
                                </>
                              ) : (
                                <img
                                  src={i}
                                  alt="imagepost"
                                  style={{ display: "none" }}
                                  key={index}
                                />
                              )}
                            </>
                          ))}
                        </SRLWrapper>
                      </SRWL>
                      <div></div>
                    </div>
                  )}
                </>
              )}
            </>
          )}
        </div>
      )}

      <div className="card__bottom">
        {liked ? (
          <IconButton className="card__bottom--button-liked" onClick={likePost}>
            <FontAwesomeIcon icon="thumbs-up" />
            <p>{likeCount}</p>
          </IconButton>
        ) : (
          <IconButton className="card__bottom--button" onClick={likePost}>
            <FontAwesomeIcon icon="thumbs-up" />
            <p>{likeCount}</p>
          </IconButton>
        )}

        <IconButton className="card__bottom--button" onClick={openComment}>
          <FontAwesomeIcon icon="comments" />
          <p style={{ paddingLeft: "5px" }}>{commentCount}</p>
        </IconButton>

        <IconButton className="card__bottom--button">
          <FontAwesomeIcon icon="share" />
          <p style={{ paddingLeft: "5px" }}>0</p>
        </IconButton>
      </div>
      {open ? (
        <div>
          <FormComment id={id} />
          <LoadComment id={id} />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Post;
