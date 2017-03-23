Rails.application.routes.draw do
  root to: 'static#root'
  namespace :api, defaults: { format: :json } do
    resources :secure_random_tokens, only: [:create]
  end
end
