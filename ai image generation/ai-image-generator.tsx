import React, { useState } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  font-family: Arial, sans-serif;
  line-height: 1.6;
  color: #333;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f4f4f4;
`

const Card = styled.div`
  background-color: #fff;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
`

const Title = styled.h1`
  color: #2c3e50;
  text-align: center;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

const Label = styled.label`
  font-weight: bold;
`

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
`

const Button = styled.button`
  background-color: #3498db;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #2980b9;
  }
`

const ImageContainer = styled.div`
  margin-top: 20px;
  text-align: center;
`

const ImagePlaceholder = styled.div`
  width: 100%;
  height: 300px;
  background-color: #ecf0f1;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  font-style: italic;
  color: #7f8c8d;
`

export default function AIImageGenerator() {
  const [description, setDescription] = useState('')
  const [generatedImage, setGeneratedImage] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically make an API call to your AI image generation service
    // For this example, we'll just update the state
    setGeneratedImage('Generating image... (API call would happen here)')
  }

  return (
    <Container>
      <Card>
        <Title>AI Historical Image Generator</Title>
        <p>Generate "before" images of architectural monuments and places using AI.</p>
        <Form onSubmit={handleSubmit}>
          <Label htmlFor="description">Describe the monument or place:</Label>
          <Input
            type="text"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            placeholder="e.g., Eiffel Tower in 1880"
          />
          <Button type="submit">Generate Image</Button>
        </Form>
        <ImageContainer>
          <ImagePlaceholder>
            {generatedImage || 'Generated image will appear here'}
          </ImagePlaceholder>
        </ImageContainer>
      </Card>
    </Container>
  )
}