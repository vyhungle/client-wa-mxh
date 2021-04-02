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
    commentCount
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
                <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxQHBhIRBxIOExAQEREVFxYVDRcVExIVGBIWFhUSFRUYHSggGh0lGxcVLTEhJSkrLi4uFx8zODMsNygtLisBCgoKDQ0NFQ4PEjEZFRkrKysrLTctLSsrKzctNysrLSsrNy0tKysrKy0rLSsrKysrKysrKystLSsrKysrKysrK//AABEIAOEA4QMBIgACEQEDEQH/xAAbAAEAAwEBAQEAAAAAAAAAAAAAAwQFBgIBB//EADUQAQABAgMDCQcEAwEAAAAAAAABAgMEBRESITETQVFhcYGhscEUIjI0kdHwQlKS4SRy8SP/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAQL/xAAWEQEBAQAAAAAAAAAAAAAAAAAAARH/2gAMAwEAAhEDEQA/AP0wBpAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHqiiblWlETMg8vsRrOkcV2jLKqvjmmPGWjh8NTh6fcjf088mjMtZdXX8WlPbx+kJ4yr91U/xaQmqzpyqOaqf4o68rqj4KontjRqhowbuErtfHTOnTG+EDpVTE4Gm9GtO6rp6e2DUxij3dtTZr0uRv/N8PCgAAAAAAAAAAAAAAAAAA3MDh+Qsxr8U75+zHw9O3iKY6aodClABFAAAAAAQYzDxiLWnPHCWFMaTpPGHSMjNbWxfiqP1ecfkLBRAVAAAAAAAAAAAAAAAAFnL41xlPf5S3GHlvzlPf5S3EpABFAAAAAAFLNaNrC6/tmPt6rqtmM/4dWvV5wDDAaQAAAAAAAAAAAAAAABZy75ynv8pbjCwE6Yynt9JbqVQBAAAAAAAYmZVTOLmJmdI07t0Ntg46dcZV2+iwQAKgAAAAAAAAAAAAAAACfBRPtNMxE7qo5m8hwdGxhqYp6In6pkqgCAAAAAAAwMXExiatqJjWqebrb6pmdG1hJmeMaTH1WDFAVAAAAAAAAAAAAAAAAG5l9e3hKerd9Flm5Pc3VUz2+k+jSZqgAAAAAAAClm1ezhtP3THhv+y6yc2ubV6KY/THjKwUAFQAAAAAAAAAAAAAAABJh702LsVU/wDYbeFv+0WdqI047tWA08nubqqZ7fSfQo0gGVAAAAAAQYvEez2tdNd+nFh3bk3LkzVxmWhnFe+mmOufSPVmtRAAAAAAAAAAAAAAAAAABNhL3IYiJnhwnsQgOlidY3CllVya7GlX6Z0hdZUAAAABWzGuaMJOzz6R9QZWMu8tiZmOHCOyEANIAAAAAAAAAAAAAAAAAAAA2MpjTDT11T5RC6rZfTsYOnr1n6zqssqAAAAK2YxtYOru84WUeIp27FURz0zHgDngGkAAAAAAAAAAAAAAAAAAHqinbriKeMzoUUzXVpREzLVwGC5Gdq78XkC7TGzTERzQ+gyoAAAAADn8Vb5LEVR1+E8ETbx2E9op1p3VRw6+qWPctzaq0uRMS1EeAAAAAAAAAAAAAAB9iNqdKd8r2Hy2a997dHRz/wBAo007c6URMz1L+Hyyat9+dI6I4tGzZps06W4iPOe9ImmI7VmmzTpbiISAigAAAAAAADzctxcp0riJh6AZmIyznsT3T6Sz7lubdWlyJiXRvFy3F2nS5ETC6mOdGjiMs034ee6fSVCuiaKtK4mJ61HkAAAAAAH2N87gfFvC4Gq9vq92nxnshbwWA2I2r++ejmj+19NENjD02I/847+ee9MCKAAAAAAAAAAAAAAAAI71mm9TpciJ/OlIAyMVl8299r3o8Y+6i6VTxmBi/GtG6rwntXUYw9VUzRVMVRpMPKgAA0sqw2vv1933Z1MbVURHGZ0dFbo5O3EU8IjQo9AMqAAAAAAAAAAAAAAAAAAAAAAo5nh9u3t08aePXDIdLMaxvc9ft8leqp6J8OZYiMBRLhfmaP8AanzdACUgAigAAAAAAAAAAAAAAAAAAAAADEzL5yru8oBYKoCsv//Z" alt="avatar" />
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
