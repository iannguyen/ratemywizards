Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :houses, only: [:show]
    resources :professors, only: [:show]
  end

  resources :users, only: [:new, :create]
  resource :session, only: [:new, :create, :destroy]

end
