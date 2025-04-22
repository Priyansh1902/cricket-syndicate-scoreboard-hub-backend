// models/playerModel.js
import supabase from '../supabaseClient.js'

// Basic DB operations
export const getAllPlayers = async () => {
  return await supabase.from('players').select('*')
}

export const getPlayerById = async (id) => {
  return await supabase.from('players').select('*').eq('id', id).single()
}

export const createPlayer = async (playerData) => {
  return await supabase.from('players').insert([playerData])
}

export const updatePlayer = async (id, playerData) => {
  return await supabase.from('players').update(playerData).eq('id', id)
}

export const deletePlayer = async (id) => {
  return await supabase.from('players').delete().eq('id', id)
}
