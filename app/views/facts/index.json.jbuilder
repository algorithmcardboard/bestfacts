json.array!(@facts) do |fact|
  json.extract! fact, 
  json.url fact_url(fact, format: :json)
end
