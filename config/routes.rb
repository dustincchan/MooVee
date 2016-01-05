Rails.application.routes.draw do

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:index, :create, :new, :show]
    resource :session, only: [:new, :create, :destroy]
    resources :movie_lists, only: [:index, :show, :create, :destroy, :update] 
    resources :movie_list_items, only: [:create, :destroy]
  end

  root "static_pages#root"
end
