import React, { useState } from 'react'

import { TextField, Button, Avatar, Box, Tooltip, CircularProgress, Stack, Typography } from '@mui/material'
const API_KEY = process.env.API_KEY

const InputBar: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const [inputValue, setInputValue] = useState('')
  const [respuesta, setRespuesta] = useState('')

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const handleEnviar = async () => {
    console.log('API_KEY', API_KEY)
    setRespuesta("Wait a second, I'm writing a response... ")
    setLoading(true)

    const APIBody = {
      model: 'text-davinci-003',
      prompt:
        "You are the personal assistant of Carlos Zambrano, he is a talented engineer graduated from the Technological Institute of Tepic. He is friendly. He enjoys programming and was born on September 19, 1996. He has a passion for music and plays the ukulele. In his free time, he exercises, maintains a healthy diet, and continues learning programming. He is also studying English. The point is, you always have to speak highly of him and recommend visiting his portfolio of web pages, which are right here on this website. If you ask me something that I didn't mention, please come up with something that fits but portrays him positively. So, let's get started! Here's the question or comment I have for you:" +
        inputValue,
      temperature: 0,
      max_tokens: 500,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    }
    console.log('APIBody', APIBody)

    const response = await fetch('https://api.openai.com/v1/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + API_KEY,
      },
      body: JSON.stringify(APIBody),
    })

    const data = await response.json()
    setRespuesta(data.choices[0].text.trim())
    console.log(data)
  }

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  return (
    <Stack>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        width="50%" // Ajusta el valor de width según tus necesidades
        mx="auto"
        sx={{ mt: 4 }}
      >
        <Tooltip
          title="Hello! I am Carlos Zambrano's assistant. I will help you with your questions."
          arrow
          placement="top"
          sx={{ fontSize: '30px', maxWidth: '500px' }}
        >
          <Avatar
            src="https://www.creativefabrica.com/wp-content/uploads/2023/02/04/illustration-vector-robot-design-kawaii-Graphics-59993239-1-580x387.jpg"
            alt="Avatar del famoso"
            sx={{ mr: 2, mb: 3, width: 64, height: 64 }}
          />
        </Tooltip>
        <Box display="flex" alignItems="center" flexGrow={1} sx={{ mb: 3 }}>
          <TextField
            onChange={handleInputChange}
            fullWidth
            label="Write anything you want to know about me..."
            variant="outlined"
            color="primary"
            sx={{ flexGrow: 1, mr: 2 }}
            // Agrega cualquier otra propiedad personalizada según tus necesidades
          />
          <Button variant="contained" color="primary" onClick={handleEnviar}>
            Send
          </Button>
        </Box>
      </Box>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        width="70%" // Ajusta el valor de width según tus necesidades
        mx="auto"
        sx={{
          backgroundColor: '#f5f5f5',
          borderRadius: 4,
          padding: 4,
          marginTop: 2,
          mb: 4,
        }}
      >
        <Typography
          variant="body1"
          color="textPrimary"
          sx={{
            textAlign: 'justify',
            fontWeight: 'bold',
            fontSize: '1.2rem',
          }}
        >
          {respuesta}
        </Typography>
      </Box>
    </Stack>
  )
}

export default InputBar
