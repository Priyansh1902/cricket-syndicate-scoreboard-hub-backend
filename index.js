import express from 'express'
import { createClient } from '@supabase/supabase-js'
import morgan from 'morgan'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import { teamRouter } from './routes/teamRoutes.js'

dotenv.config() // ✅ Load env variables

const app = express()

app.use(morgan('combined'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
)

// Make supabase accessible via request
app.use((req, res, next) => {
  req.supabase = supabase
  next()
})

app.use('/api/v1/teams', teamRouter)

app.listen(3000, () => {
  console.log(`> Ready on http://localhost:3000`)
})
