Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :houses, only: [:index, :show]
    resources :professors, only: [:new, :create, :edit, :update, :index, :show]
    resources :reviews, only: [:new, :create, :index, :show, :edit, :update, :destroy]
    resource :session, only: [:new, :create, :destroy]
    resources :users, only: [:edit, :update, :show]
  end
  resources :users, only: [:new, :create]
  resource :session, only: [:new, :create, :destroy]
end
