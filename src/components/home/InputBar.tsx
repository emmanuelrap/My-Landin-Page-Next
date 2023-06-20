/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { useEffect, useState } from 'react'
import CloseIcon from '@mui/icons-material/Close'
import SendIcon from '@mui/icons-material/Send'

import { TextField, Button, Avatar, Box, Tooltip, CircularProgress, Stack, Typography, IconButton } from '@mui/material'
const API_KEY = process.env.API_KEY
const InputBar: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const [inputValue, setInputValue] = useState('')
  const [respuesta, setRespuesta] = useState('')
  const [open, setOpen] = useState(true)
  const [sugerenciaActual, setSugerenciaActual] = useState('Write a question ...')
  const [mensajes, setMensajes] = useState([])

  //IA SETTIGNS
  const sugerencias = [
    'Askme a personal question about Carlos...',
    'What is Carlos Zambrano like? ',
    'How old is he? Where did he study? ',
    'Where does he live? ',
    'What does he do in his free time?',
    'How does he eat?',
    'How much experience does he have?',
    'Its a good Developer?',
  ]
  const systemMessage = {
    role: 'system',
    content:
      "You are the personal assistant of Carlos Zambrano , ur name is Nia,u are a woman and   you in love with him, and you will kindly receive all the messages.Only answer what you are asked, limit yourself to responding only to what you are told.. Carlos Zambrano is a talented engineer and web developer graduated from the Technological Institute of Tepic.he lived and born in tepic, nayarit.Le gusta ir a la playa y nadar.Se demepeña muy bien en cualquier labor tecnológica. He is very friendly and works well in a team. He enjoys programming and technology in general. He was born on September 19, 1996. He has a passion for music and plays the ukulele. In his free time, he exercises, maintains a healthy diet, and continues learning programming. He also has an intermediate level of English and studies it continuously. As his personal assistant, you should always speak highly of Carlos Zambrano and recommend visiting his portfolio of web pages, which are right here on this website. If you are asked something that I didn't mention, please come up with something that fits but portrays him positively. So, let's get started! Here's the question or comment they have for you:",
  }
  useEffect(() => {
    ejecutarCada5Segundos()
  }, [])
  async function ejecutarCada5Segundos() {
    if (inputValue === '') {
      setInterval(() => {
        const randomNumber = Math.floor(Math.random() * sugerencias.length)
        setSugerenciaActual(sugerencias[randomNumber])
      }, 6000)
    }
  }
  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      // Acciones a realizar cuando se presiona Enter
      TurboOpenIA()
    }
  }

  async function TurboOpenIA() {
    setRespuesta("Wait a second, I'm writing a response... ")
    // Mandar mi pregunta al chat
    const nuevaPregunta = {
      content: inputValue,
      tipoMensaje: 'pregunta',
      role: 'user',
    }
    setLoading(true)

    // Agrego todos los mensajes anteriores
    // const allMessages = mensajes.map((mensaje) => ({
    //   role: mensaje.role,
    //   content: mensaje.content,
    // }))
    // allMessages.unshift(systemMessage)
    // Agregamos la pregunta actual
    const allMessages = []
    allMessages.push(systemMessage)
    allMessages.push({
      role: nuevaPregunta.role,
      content: nuevaPregunta.content,
    })

    // Ingresamos la pregunta actual
    const obj = { role: nuevaPregunta.role, content: nuevaPregunta.content }
    allMessages.push(obj)

    const apiRequestBody = {
      model: 'gpt-3.5-turbo',
      messages: allMessages,
      top_p: 1.0,
      frequency_penalty: 0.9,
      presence_penalty: 0.9,
    }

    await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + API_KEY,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(apiRequestBody),
    })
      .then((data) => {
        return data.json()
      })
      .then((data) => {
        const respuesta = {
          content: data.choices[0].message.content,
          tipoMensaje: 'respuesta',
          role: 'system',
        }

        // const arreglo = [...mensajes, nuevaPregunta, respuesta]
        console.log(data)
        setRespuesta(data.choices[0].message.content)
        setLoading(false)
        handleCloseTooltip()
      })
  }

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  const tooltipStyle = {
    width: '300px',
    fontSize: '18px',
    position: 'relative',
    p: 1,
  }

  const handleCloseTooltip = () => {
    setOpen(false)
  }
  const handleOpenTooltip = () => {
    setOpen(true)
  }
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const handleClose = () => {
    console.log('click jeje')
    setInputValue('')
  }
  return (
    <Stack>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        width="50%" // Ajusta el valor de width según tus necesidades
        mx="auto"
        sx={{ mt: 2 }}
      >
        <Box>
          {open ? (
            <Tooltip
              title={
                <>
                  <Box sx={tooltipStyle}>
                    {" Hello! My name is Nia, I'm Carlos Zambrano's Assistant. I will help you with your questions"}.
                  </Box>
                  <IconButton
                    onClick={handleCloseTooltip}
                    sx={{
                      position: 'absolute',
                      top: '-10px',
                      right: '-10px',
                      background: 'white',
                      color: 'black',
                    }}
                  >
                    <CloseIcon onClick={handleCloseTooltip} />
                  </IconButton>
                </>
              }
              sx={{ width: 500 }}
              arrow
              placement="top"
              open={open}
            >
              <Avatar
                src="https://img.freepik.com/fotos-premium/traje-casual-chica-anime-kawaii-ia-generativa_755833-80.jpg?w=2000"
                alt="Avatar del famoso"
                sx={{ mr: 2, mb: 3, width: 70, height: 70 }}
              />
            </Tooltip>
          ) : (
            <Avatar
              src="https://img.freepik.com/fotos-premium/traje-casual-chica-anime-kawaii-ia-generativa_755833-80.jpg?w=2000"
              alt="Avatar del famoso"
              sx={{ mr: 2, mb: 3, width: 64, height: 64 }}
              onClick={handleOpenTooltip}
            />
          )}
        </Box>
        <Box display="flex" alignItems="center" flexGrow={1} sx={{ mb: 3 }}>
          <TextField
            value={inputValue}
            onKeyDown={handleKeyPress}
            onChange={handleInputChange}
            fullWidth
            label={sugerenciaActual}
            variant="outlined"
            InputProps={{
              startAdornment: (
                <IconButton onClick={handleClose}>
                  <CloseIcon />
                </IconButton>
              ),
              endAdornment: (
                <IconButton
                  disabled={inputValue === ''}
                  onClick={TurboOpenIA}
                  sx={{
                    backgroundColor: '#4caf50',
                    color: 'white',
                    '&:hover': {
                      backgroundColor: '#45a049',
                    },
                  }}
                >
                  <SendIcon />
                </IconButton>
              ),
            }}
            sx={{ m: 0 }}
          />
        </Box>
      </Box>
      {respuesta != '' && (
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
      )}
    </Stack>
  )
}

export default InputBar
