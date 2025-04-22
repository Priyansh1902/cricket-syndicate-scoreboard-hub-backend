import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  'https://lkzkubghiupzjobfzrgz.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxremt1YmdoaXVwempvYmZ6cmd6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDUzMTgzMzksImV4cCI6MjA2MDg5NDMzOX0.EXeXnJdP8ZSCUs-pX0QO7MkRzFnrs-bwQBvJo522SQY'
)

export default supabase
