import react, {useState, useEffect} from 'react'
import api from './services/api'
import './App.css'


function App(){
  const [projects, setProjects] = useState([])

  useEffect(() => {
    api.get('projects').then(response => {
      setProjects(response.data)
    })
  }, [])

  async function handleAddProject() {
    const response = await api.post('project', {
      "title": `Novo projeto ${Date.now()}`,
      "owner": "Felipe Paiser"
    })

    const newProject = response.data
    setProjects([...projects, newProject])
  }

  return (
    <>
      <ul>
        {projects.map(project => <li key={project.id}>{project.title}</li>)}
      </ul>
    </>
  )
}
