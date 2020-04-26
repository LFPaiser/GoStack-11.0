import React, { useEffect, useState } from 'react'
import { SafeAreaView, FlatList, Text, TouchableOpacity, StyleSheet, StatusBar } from 'react-native'
import api from './services/api'

export default function App() {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    api.get('projects').then(response => {
      setProjects(response.data)
    }).catch(err => {
      console.log('ERRO NA API')
    })

    console.log('RESULTADO DA API')
    console.log(projects)
  }, [])

  async function handleAddProject() {
    const response = await api.post('projects', {
      title: 'static',
      owner: 'static',
    })

    const newProject = response.data

    setProjects([...projects, newProject])
  }

  return (
    <>
      <StatusBar barStyle='#light-content' backgroundColor='#7159c1' />

      <SafeAreaView style={styles.container}>
        <FlatList
          data={projects}
          keyExtractor={project => project.id}
          renderItem={({ item: project }) => (
            <Text style={styles.project}>{project.title}</Text>
          )}
        />

        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.781640628620899862803482534211}
          onPress={handleAddProject}
        >
          <Text>Add Project</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#7159c1',
  },
  project: {
    color: '#ddd',
    fontSize: 32,
    fontWeight: 'bold',
  },
  button: {
    margin: 14,
    height: 50,
    alignSelf: 'stretch',
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ddd',
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 30,
    color: '#212121',
  },
})
