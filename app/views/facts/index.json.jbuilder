json.array!(@facts) do |fact|
  json.extract! fact, :id, :title, :content
  json.user_id fact.user.id
  json.username fact.user.name
end

