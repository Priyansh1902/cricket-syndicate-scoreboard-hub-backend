// models/playerModel.js
import supabase from '../supabaseClient.js'

// Basic DB operations
export const getAllMatchs = async () => {
  return await supabase.from('match').select('*')
}

export const getMatchById = async (id) => {
  return await supabase.from('match').select('*').eq('id', id).single()
}

// export const createMatch = async (matchData) => {
//   return await supabase.from('match').insert([matchData])
// }

// export const updateMatch = async (id, matchData) => {
//   return await supabase.from('match').update(matchData).eq('id', id)
// }

export const deleteMatch = async (id) => {
  return await supabase.from('match').delete().eq('id', id)
}
