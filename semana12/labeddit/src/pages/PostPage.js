import React from 'react'
import { useHistory, useParams } from 'react-router-dom'
import axios from 'axios'
import BASE_URL from '../constants/BASE_URL'
import ComponentCommentList from '../components/ComponentCommentList'
import ComponentPostCard from '../components/ComponentPostCard'
import Button from '@material-ui/core/Button'
import List from '@material-ui/core/List'
import TextField from '@material-ui/core/TextField'

export default function PostDetailsPage(props) {
  const [postDetails, setPostDetails] = React.useState(null)
  const [newComment, setNewComment] = React.useState("")
  const params = useParams()
  const history = useHistory()

  React.useEffect(() => {
    if (localStorage.getItem('token') === null) {
      history.push('/login')
    } else if (!params.id) {
      history.push('/')
    }
  }, [])

  React.useEffect(() => {
    fetchPostDetails();
  }, [])

  const fetchPostDetails = () => {
    const axiosConfig = {
      headers: {
        Authorization: localStorage.getItem('token'),
      },
    }

    axios.get(`${BASE_URL}/posts/${params.id}`, axiosConfig).then((response) => {
      setPostDetails(response.data.post)
    })
  }

  const handleUpdateComment = (event) => {
    setNewComment(event.target.value);
  }

  const handleCreateComment = async () => {
    const axiosConfig = {
      headers: {
        Authorization: localStorage.getItem("token")
      }
    }

    const body = {
      text: newComment
    }

    try{
      await axios.post(`${BASE_URL}/posts/${params.id}/comment`, body, axiosConfig);

      setNewComment("");
      fetchPostDetails();
    } catch(error) {
      alert("Não foi possível comentar, tente novamente");
      console.error(error);
    }
  }

  const handleCommentVote = async (commentId, direction) => {
    const axiosConfig = {
      headers: {
        Authorization: localStorage.getItem("token")
      }
    }

    const body = {
      direction: direction
    }

    try{
      await axios.put(`${BASE_URL}/posts/${params.id}/comment/${commentId}/vote`, body, axiosConfig)
      fetchPostDetails();
    } catch (error) {
      alert("Não foi possível votar no comentário, tente novamente");
      console.error(error)
    }

  }

  return (
    <div>
      {postDetails !== null && <ComponentPostCard post={postDetails} hideComment/>}
      <TextField
        placeholder={"Seu comentário"}
        value={newComment}
        onChange={handleUpdateComment}
      />
      <Button onClick={handleCreateComment}>Enviar Comentário</Button>
      <List dense>
        {postDetails && postDetails.comments.map((comment) => {
          return (
          <ComponentCommentList comment={comment} handleCommentVote={handleCommentVote} />
        )})}
      </List>
    </div>
  )
}
