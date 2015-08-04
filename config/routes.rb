Rails.application.routes.draw do

  get 'profiles/show'

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

  get '/admin' => 'admin/sessions#new'
  # get '/admin/logout' => 'admin/sessions#delete'

  namespace :admin do
    resources :users, :sessions
  end
end
