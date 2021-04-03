import React, { useState, useContext, useEffect } from 'react'
import IconButton from '@material-ui/core/IconButton';
import moment from "moment";
import { useMutation } from "@apollo/react-hooks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import FormComment from "../Components/formComment";
import LoadComment from "../Components/loadComment";
import { AuthContext } from "../Context/auth";
import { LIKEPOST } from "../Graphql/mutation";

function Post({ post: {
    id,
    body,
    createdAt,
    displayname,
    image,
    likeCount,
    likes,
    commentCount,
    avatar
} }) {
    const user = useContext(AuthContext);
    const [open, setOpen] = useState(false);

    const [liked, setLiked] = useState(false);
    useEffect(() => {
        if (user.user && likes.find((like) => like.username === user.user.username)) {
            setLiked(true);
        } else setLiked(false);
    }, [user, likes]);

    const [likepost] = useMutation(LIKEPOST);
    function likePost() {
        likepost({
            variables: { postId: id }
        })
    }
    function openComment() {
        setOpen(true);
    }
    return (
        <div className='card'>
            <div className='card__title'>
                <img src={avatar} alt="avatar" />
                <div className='card__title--conteint'>
                    <span>{displayname}</span>
                    <p>{moment(createdAt).fromNow(true)}</p>
                </div>
                <div className="card__title--icon">

                </div>

            </div>
            <div className='card__body'>{body}</div>
            <div className='card__image'>
                <img src={image} alt="imagepost" />
            </div>
            <div className='card__bottom'>
                {liked ? (
                    <IconButton className='card__bottom--button-liked' onClick={likePost}>
                        <FontAwesomeIcon icon='thumbs-up' />
                        <p>{likeCount}</p>
                    </IconButton>
                ) : (
                    <IconButton className='card__bottom--button' onClick={likePost}>
                        <FontAwesomeIcon icon='thumbs-up' />
                        <p>{likeCount}</p>
                    </IconButton>
                )}


                <IconButton className="card__bottom--button">
                    <FontAwesomeIcon icon='comments' onClick={openComment} />
                    <p style={{ paddingLeft: "5px" }}>{commentCount}</p>
                </IconButton>

                <IconButton className="card__bottom--button">
                    <FontAwesomeIcon icon='share' />
                    <p style={{ paddingLeft: "5px" }}>0</p>
                </IconButton>

            </div>
            {open ? (
                <div>
                    <FormComment id={id} />
                    <LoadComment id={id}/>
                </div>
            ) : (<></>)}

        </div>
    )
}

export default Post
