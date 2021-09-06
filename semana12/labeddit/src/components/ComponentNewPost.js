import React from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

export default function ComponentNewPost(props) {
  const [newPost,setNewPost] = React.useState({title:'', text:''})

  const createPost = () => {
    props.handleCreatePost(newPost.title, newPost.text);
  }

  return (
    <div>
      <form onSubmit={(e)=>{e.preventDefault()}}>
        <TextField
          label={"Título"}
          type={'text'}
          value={newPost.title}
          onChange={(e) => setNewPost(e.target.value)}
          fullWidth
          margin={'normal'}
          required
        />
        <TextField
          label={"Texto"}
          type={'text'}
          value={newPost.text}
          onChange={(e) => setNewPost(e.target.value)}
          fullWidth
          margin={'normal'}
          required
        />
        <Button color={'primary'}variant={'contained'}onClick={createPost}>Crie um novo Post!</Button>
      </form>
    </div>
  )
}
