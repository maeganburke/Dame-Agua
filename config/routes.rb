Rails.application.routes.draw do

  get '/' => 'pages#home'
  get '/thedeal' => 'pages#thedeal'
  get '/dameagua' => 'pages#dameagua'
  get '/findbottles' => 'pages#findbottles'
  get '/tapout' => 'pages#tapout'
  get '/help' => 'pages#help' # with contact form 

  get '/users' => 'users#index'
  get '/signup' => 'users#new'
  post '/' => 'users#create'
  get '/profile' => 'users#show'

  post '/login' => 'sessions#create'
  get '/logout' => 'sessions#delete'

end
