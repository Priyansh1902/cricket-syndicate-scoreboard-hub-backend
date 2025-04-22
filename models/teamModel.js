// models/playerModel.js
import supabase from '../supabaseClient.js'

// Basic DB operations
export const getAllTeams = async () => {
  return await supabase.from('teams').select('*')
}

export const getTeamById = async (id) => {
  return await supabase.from('teams').select('*').eq('id', id).single()
}

export const createTeam = async (teamData) => {
  return await supabase.from('teams').insert([teamData])
}

export const updateTeam = async (id, teamData) => {
  return await supabase.from('teams').update(teamData).eq('id', id)
}

export const deleteTeam = async (id) => {
  return await supabase.from('teams').delete().eq('id', id)
}
