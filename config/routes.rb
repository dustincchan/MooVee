Rails.application.routes.draw do

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:index, :create, :new]
    resource :session, only: [:new, :create, :destroy]
  end

  root "static_pages#root"
end
