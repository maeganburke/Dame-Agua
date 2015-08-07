Rails.application.routes.draw do

  get 'profiles/show'

  get '/' => 'pages#home'

  get '/users' => 'users#index'
  get '/signup' => 'users#new'
  post '/' => 'users#create'

  get '/profile' => 'users#show'
  get '/profile/edit' => 'users#edit', as: :profile_edit
  post '/profile' => 'users#update', as: :profile_update

  post '/login' => 'sessions#create'
  get '/logout' => 'sessions#delete'

  get '/admin' => 'admin/sessions#new'
  get '/admin/logout' => 'admin/sessions#delete'
  get 'admin/fountains' => 'admin/fountains#index'

  namespace :admin do
    resources :users, :sessions
  end
end
