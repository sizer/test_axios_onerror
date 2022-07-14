require 'sinatra'

# Avoid CORS error(from Nuxt)
before do
  response.headers['Access-Control-Allow-Origin'] = '*'
end

get '/ok' do
  status 200
  return 'this is response from /ok'
end

get '/ng' do
  status 403
  return 'this is response from /ng'
end