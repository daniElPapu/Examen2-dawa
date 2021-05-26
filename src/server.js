import express from 'express'
import helmet from 'helmet'
import morgan from 'morgan'
import personsRouter from './routes/persons'
import accountsRouter from './routes/accounts'

export const app = express()    
app.use(helmet())
app.use(morgan('dev')) 
app.use(express.json())

app.use('/',personsRouter)
app.use('/',accountsRouter)


var port = process.env.PORT || 3001  
app.listen(port,()=>{
    console.log('API escuchando en el puerto ' + port)
})
