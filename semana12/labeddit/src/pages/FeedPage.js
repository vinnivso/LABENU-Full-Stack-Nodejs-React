import React from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import BASE_URL from '../constants/BASE_URL'
import ComponentNewPost from '../components/ComponentNewPost'
import ComponentPostCard from '../components/ComponentPostCard'
import LinearProgress from '@material-ui/core/LinearProgress'

const FeedWrapper = styled.div`
  display: grid;
  gap: 20px;
  width: 300px;
  margin: 0 auto;
`

export default function FeedPage(props){
  const history = useHistory();

  const [posts, setPosts] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);

  const seekPost = () => {
    const axiosConfig = {
      headers: {
        Authorization: localStorage.getItem("token")
      }
    }

    setIsLoading(true)
    axios.get(`${BASE_URL}/posts`, axiosConfig).then((response) => {
      setPosts(response.data.posts);
      setIsLoading(false)
    })
  }

  const handleVotePost = async (id, direction) => {
    const axiosConfig = {
      headers: {
        Authorization: localStorage.getItem("token")
      }
    }

    const body = {
      direction: direction
    }

    try{
      await axios.put(`${BASE_URL}/posts/${id}/vote`, body, axiosConfig);
      seekPost();
    } catch (error) {
      alert("Não foi possível votar no post, tente novamente");
      console.error(error);
    }
  }

  const handleCreatePost = async (text, title) => {
    const axiosConfig = {
      headers: {
        Authorization: localStorage.getItem("token")
      }
    }

    const body = {
      text: text,
      title: title,
    }

    try{
      setIsLoading(true)
      await axios.post(`${BASE_URL}/posts`, body, axiosConfig)
      seekPost();
    } catch(error) {
      alert("Não foi possível criar o post");
      console.error(error)
    }
  }

  React.useEffect(() => {
    if(localStorage.getItem("token") === null) {
      history.push("/login");
    }
  }, [])

  React.useEffect(() => {
    seekPost();
  }, [])

  return (
    <FeedWrapper>
      <ComponentNewPost
        handleCreatePost={handleCreatePost}
      />
      <hr/>
      {isLoading && <LinearProgress/>}
      {posts.map(post => {
        return (<ComponentPostCard key={post.id} handleVotePost={handleVotePost} post={post}/>)
      })}
    </FeedWrapper>
  )
}
