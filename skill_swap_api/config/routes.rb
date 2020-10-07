Rails.application.routes.draw do
  resources :sessions 
  resources :skills
  resources :registrations 
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root to: 'pages#home'
  resources :sessions, only: [:create]
  resources :users
  resources :skills 
end
