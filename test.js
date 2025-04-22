import supabase from './supabaseClient.js'

const fetchPlayers = async () => {
  const { data, error } = await supabase.from('players').select('*')
  if (error) console.error(error)
  else console.log("Data is",data )
}

fetchPlayers()
