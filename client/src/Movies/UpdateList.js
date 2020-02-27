import React,{useState, useEffect } from "react"
import axios from "axios"

const initialMovie = {
  id: '',
  title: '',
  director: '',
  metascore: '',
  stars:[]
},

const UpdateMovie = (props) => {
  const [movie, setMovie] = useState(initialMovie)

  useEffect(() => {
    axios
    .get(`http://localhost:5000/api/movies/${props.match.params.id}`)
    .then(res => {
      console.log(res)
      setMovie(res.data)
    })
    .catch(err => {
      console.log(err);
    })
  },[props.match.params.id])

  const handleChanges = e => {
    setMovie({...movie, [e.target.name] : e.target.value})
  };
const handleSubmit = e => {
  e.preventDefault();
  axios
  .put(`http://localhost:5000/api/movies/${movie.id}`)
  .then(res => {
    console.log(res)
    props.history.push("/")
  })
  .catch(err => {
    console.log(err)
  })
}

return(
  <div>
    <form onSubmit={handleSubmit}>
 
                <div>
                  <input  placeholder="title" type="text" name="title" value={movie.title} onChange={handleChanges}/>
                </div> 
                <div>
                  <input  placeholder="director" type="text" name="director" value={movie.director} onChange={handleChanges}/>
                </div>
                <div>
                  <input  placeholder="metascore" type="text" name="metascore" value={movie.metascore} onChange={handleChanges}/>
                </div>
                <div>
                  <input  placeholder="stars" type="text" name="stars" value={movie.stars} onChange={handleChanges}/>
                </div>
                <button type="submit">Submit</button>
    </form>
  </div>
)

}
export default UpdateMovie